# jv
Zhyviy svit | Vanilla js ed

# Tech stack

front-end jv

i want to create architecture graph for this project

vanilla.js
redis
logging system

back-end separate application 

node.js
psql

<!-- ## Overview -->
<!---->
<!---->
<!-- ### Dependent Services -->
<!---->
<!-- - The application relies on  -->
<!---->
<!-- ### Overview of Application Functionality  -->
<!---->
<!-- ## Development -->
<!---->
<!-- ### Prerequisites -->
<!---->
<!-- Before you begin, ensure you have the following installed: -->
<!---->
<!-- - [Git](https://git-scm.com/) -->
<!-- - [Docker](https://docs.docker.com/get-started/get-docker/) -->
<!---->
<!-- ### 🚀 Installation -->
<!---->
<!-- 1. Clone the repository: -->
<!---->
<!--    ```sh -->
<!--    git clone  -->
<!--    cd  -->
<!--    ``` -->
<!---->
<!-- 2. Setup the project from scratch using the `setup` target: -->
<!---->
<!--    ```sh -->
<!--    make setup -->
<!--    ``` -->
<!---->
<!-- 3. Verify that the application is running: -->
<!---->
<!--    ```sh -->
<!--    curl -X GET http://localhost:3001/status -->
<!--    ``` -->
<!---->
<!--    Expected response: -->
<!---->
<!--    ```json -->
<!--    { -->
<!--      "pub_client_ready": true, -->
<!--      "sub_client_ready": true, -->
<!--      "app_cache": true, -->
<!--      "server_status": 200, -->
<!--      "errors": { -->
<!--        "pubClientErrors": "", -->
<!--        "subClientError": "", -->
<!--        "appCacheError": "" -->
<!--      } -->
<!--    } -->
<!--    ``` -->
<!---->
<!-- > **NOTE:** Run `make help` to see all the available commands. -->
<!---->
<!-- ### Postman request collection -->
<!---->
<!-- To perform requests, use the Postman collection available in the `req-collection` folder. -->
<!---->
<!-- 1. Import the html_collection.json file into Postman. -->
<!-- 2. Import the env.json file into Postman. -->
<!-- 3. Set the imported environment as the active environment for the collection. -->
<!---->
<!-- Once these steps are completed, you can use the collection to make requests. -->
<!---->
<!-- ### Configuration -->
<!---->
<!-- #### Environment Variables -->
<!---->
<!-- The application relies on environment variables for configuration.   -->
<!-- You can modify them using the `.env` file, then run `make up` to apply changes. -->
<!---->
<!-- Below is an overview of key variables: -->
<!---->
<!-- | Variable           | Description                                                    | -->
<!-- | ------------------ | -------------------------------------------------------------- | -->
<!-- | `APP_PORT`         | port number for the application (default: `3001`)              | -->
<!---->
<!-- ## Testing -->
<!---->
<!-- To run tests locally after setting up the project (`make setup`), use: -->
<!---->
<!-- ```sh -->
<!-- make test-run -->
<!-- ``` -->
<!---->
<!-- `make test` is primarily for CI, though can be used locally, it is not optimized for local usage. -->
<!---->
<!-- ```sh -->
<!-- make test -->
<!-- ``` -->
