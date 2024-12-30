###### CLASS NOTES

### Express Folder Structure
*The suggested folder structure for Express best practices. *

- Project
  - node_modules
    - *contains app's modules and packages*
    - *automatically created after `npm install` command*
  - config
    - *configuration files such as:*
      - *database connections*
      - *environment variables*
      - *credential files (including api keys for external services)*
  - models
    - *data models*
      - *specify relational vs non-relational data store*
      - *defined by an object-relational mapping (orm) library*
  - routes
    - *specifies routes for all entities*
    - *one file for each logical set of routes/each resource*
  - views
    - *template files*
      - *dynamically writes html, css, and javascript for the client to generate user-specific interfaces*
  - public
    - *all static content such as images, css, and javascript*
    - *each type of content should have its own sub-folder with few files in the base project folder*
  - base project folder
    - *app.js as the main configuration file for the application*
      - *should import all routes through routes.js*
    - *routes.js as the central location to access all routes in the application*
      - *requires or imports all files in the routes folder and then exports them as a single module to be imported into app.js*
    - *package.json to contain the metadata used to manage the project's dependencies*

When building the folder structure for an API, it does not need the views or the public folders.

- Use nouns as resource identifiers for API routing
- Use HTTP Status Codes correctly
  - **200s:** Everything is OK
  - **300s:** Resource has been moved
  - **400s:** Client-side error
  - **500s:** Server-side error
- Black-box test your REST APIs (testing the code w/o looking at its internal structure)
- Mocha is a JS test framework that runs on node.js and contains a simple module called "supertest" to provide an easy way to test HTTP requests for Black-Box Testing
- When API needs auth, best to use JSON Web Token/JWT stateless auth
- Create proper API documentation
- Open source API doc projects:
  - API Blueprint (apiblueprint.org)
  - Swagger (swagger.io)
- Use npm init when initializing a project
- When installing npm use `--save` or `--save-dev` to make sure correct dependencies are installed when moving to a different platform
- Don't push a node modules repository
- Naming Conventions:
  - lowercase for files: `myfile.js`
  - camel case for variables: `myVariable`
  - lowercase separated by dashes for npm modules: `my-npm-module`
  - camel case when requiring npm modules: `require('myModule')`