# centralized-boilerplate.package
Boilerplate generator for NPM packages. Are you tired of copying the same old boring code when you want to make a new package? Well, stop it. Outsource your boring code to me, the boring code guy. If you occasionally check for package updates, you can continue to benifit. Read more here: https://pizzaisdavid.medium.com/reducing-boilerplate-between-repositories-83157f253d01  

# How to use
1. Add this package as a dev dependency.
    ```
    npm install centralized-boilerplate.package --save-dev
    ```
1. Add the boil command in your package.
    ```
    "scripts": {
      "boil": "node ./node_modules/centralized-boilerplate.package/bin/run.js"
    }
    ```
1. Run the command.
    ```
    npm run boil
    ```
1. Scream in horror as computers are beginning to take your job.
