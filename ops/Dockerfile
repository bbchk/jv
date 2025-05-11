FROM node:lts-slim as base

ARG APP_GROUP_ID="65534"
ARG APP_USER_ID="65534"

RUN getent group $APP_GROUP_ID || groupmod -g $APP_GROUP_ID nobody && \
    getent passwd $APP_USER_ID || usermod -u $APP_USER_ID nobody

ENV HOME="/var/www" 

COPY ops/bin/pre-run /usr/bin/pre-run

EXPOSE $WEBSOCKET_PORT

RUN mkdir -p "${HOME}" && \
  chown -R ${APP_USER_ID}:${APP_GROUP_ID} "${HOME}"

WORKDIR $HOME

USER ${APP_USER_ID}:${APP_GROUP_ID}

#############
# dev below
#############
FROM base AS development

ENV NODE_ENV=development

VOLUME $HOME

ENTRYPOINT ["pre-run"]
CMD [ "npm", "run", "dev" ]

#############
# prod below
#############
FROM base AS production

ENV NODE_ENV=production

COPY --chown=${APP_USER_ID}:${APP_GROUP_ID} src/package.json src/package-lock.json $HOME

RUN npm ci

COPY --chown=${APP_USER_ID}:${APP_GROUP_ID} src $HOME/

ENTRYPOINT ["pre-run"]
CMD ["npm", "run", "start"]
