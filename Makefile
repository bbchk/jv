.DEFAULT_GOAL := help
.PHONY: clean help build setup up test down stop .env audit reinstall test-run

compose_file = ops/compose.yaml
compose_file_custom = ops/compose.custom.yaml
compose_project_name = jv-fr 
compose_profiles =

ifeq (,$(wildcard .env))
	export COMPOSE_FILE ?= $(compose_file)
	export COMPOSE_PROJECT_NAME ?= $(compose_project_name)
	export COMPOSE_PROFILES ?= $(compose_profiles)
endif

export APP_IMAGE ?= 
export APP_TARGET ?= development
export APP_GROUP_ID ?= $(shell echo $${SUDO_GID:-$$(id -g)})
export APP_USER_ID ?= $(shell echo $${SUDO_UID:-$$(id -u)})

help:
	@echo "Available targets:"
	@echo ""
	@echo "=============================="
	@echo "Development targets:"
	@echo "------------------------------"
	@echo "  Primary:"
	@echo "   - help        Display this help message."
	@echo "   - setup       Install dependencies and boot up the project for local development."
	@echo "   - build       Build the application images."
	@echo "   - up          Start the application containers."
	@echo "   - stop        Stop the application containers."
	@echo "   - down        Stop and remove the application containers."
	@echo "   - clean       Shut down the project and remove all generated artifacts."
	@echo "   - test-run    Execute tests within the running application container."
	@echo ""
	@echo "  Secondary:"
	@echo "   - audit       Check the application for security vulnerabilities."
	@echo "   - .env        Prompt the user to overwrite .env files with their corresponding .env.example files."
	@echo "   - reinstall   Shut down all services, reinstall dependencies, and restart the services back."
	@echo ""
	@echo "=============================="
	@echo "CI-specific targets:"
	@echo "------------------------------"
	@echo "  (Can be executed locally, but they are not optimized for local usage.)"
	@echo ""
	@echo "   - test        Boot up the application and run tests inside the application container."
	@echo "=============================="

$(compose_file_custom):
	touch "$(compose_file_custom)"

.env: $(compose_file_custom)
	@overwritten_files=""; \
	cp -i .env.example .env && overwritten_files=".env:$$overwritten_files"; \
	cp -i .env.test.example .env.test && overwritten_files=".env.test:$$overwritten_files"; \
	IFS=":"; \
	for file in $$overwritten_files; do \
		echo -e "Writing BUILD-RELATED env. variable to '$$file' file"; \
		echo -e "\n\n#== BUILD-RELATED ==#\n\n" >> $$file; \
		echo "APP_IMAGE=\"${APP_IMAGE}\"" >> $$file; \
		echo "APP_TARGET=\"${APP_TARGET}\"" >> $$file; \
		echo "APP_GROUP_ID=\"${APP_GROUP_ID}\"" >> $$file; \
		echo "APP_USER_ID=\"${APP_USER_ID}\"" >> $$file; \
		echo "COMPOSE_FILE=\"$(compose_file):$(compose_file_custom)\"" >> $$file; \
		echo "COMPOSE_PROJECT_NAME=\"$(compose_project_name)\"" >> $$file; \
		echo "COMPOSE_PROFILES=\"$(compose_profiles)\"" >> $$file; \
	done

setup: build 
	docker compose run --no-deps --rm app npm ci 
	${MAKE} up

build: .env 
	docker compose build
	
up:
	 docker compose up -d --remove-orphans --wait --wait-timeout 30

test: .env
	docker compose run --rm app npm ci
	${MAKE} up
	docker compose exec app npm test 
	
test-run:
	${MAKE} up
	docker compose exec app npm test 
	
down:
	docker compose down --remove-orphans 
	
stop:
	docker compose stop
	
clean: down
	rm -rf .env .env.test src/.npm src/node_modules src/coverage src/debug.json "$(compose_file_custom)"

audit:
	docker compose exec app npm audit || true # ignore non-zero return code   

reinstall: down
	rm -rf src/node_modules
	docker compose run --no-deps --rm app npm ci 
	${MAKE} up
