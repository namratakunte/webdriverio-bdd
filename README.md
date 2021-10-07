
### WebdriverIO with Cucumber BDD

This repository contains a automation tests builds using Cucumber BDD framework. 

### Installation
Webdriver IO Installation:

1. Java
2. Node.js installation
3. NPM installation
4. open terminal/command line:
node -v
npm -v

4. install VSC editor

5. webdriver setup and installation commands:
-- npm init
-- npm install webdriverio --save-dev
-- npm install @wdio/cli
-- ./node_modules/.bin/wdio config
-- npm install chai --save-dev
-- npm install chai-webdriverio --save-dev
-- npm install local-runner --save-dev
-- npm install wdio-iedriver-service --save-dev

### Run Some Sample Tests

Set cucumber tag under wdio.conf.js file cucumberOpts as per feature file tags by defining
under tagExpression: '@ALLScenarios'

Run tests using command npx wdio .\wdio.conf.js\

To generate allure report run allure generate --clean ./allure-results
To open report run allure open
