# Automation [Project Name]

[Project description]
​

## Contents

If you are looking for something specific, you can jump right into the relevant section from here.

​1.[Getting Started](#getting-started)

2.[Folder Structure](#folder-structure)

3.[Style Guides](#style_guides)

4.[Documentation](#documentation)

5.[Git](#git)
​
​
## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.
​

### About Cypress

Cypress is a next generation front end testing tool built for the modern web. It can test anything that runs in a browser.
For Cypress features, please check https://docs.cypress.io/guides/overview/why-cypress.html#Features
Tests are written in cypress version 4.0
​

### Prerequisites

1. [Node.js](https://nodejs.org/en/)

### Instructions

1.  Clone the repo

```sh
git clone [repo ssh]
```

2.  Install dependencies

```sh
npm install
```

3.  Open cypress

```sh
npm run cypress
```

4.  To commit your changes

```sh
npm run commit
```

5.To run cypress headless to view how many test passed and failed on the terminal
...sh
npm run cy:run -- --record --key 4e3bda2b-bbc2-476d-9076-01ab3833c180 "cypress/integration/common/homePage-test.js
...

## Folder Structure

| Folder      | Description                                                                                                                                                                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fixtures    | Used as external pieces of static data that can be used by your tests. Fixture files are located in cypress/fixtures by default, but can be configured to another directory.                                                                                                |
| Integration | Used for creating test suits.Test files are located in cypress/integration by default, but can be configured to another directory.We are writing tests in js.Test file naming convention shall include the word test for easy documentation generation i.e feature1-test.js |
| Plugin      | Used to load plugins By default.Cypress will automatically include the plugins file cypress/plugins/index.js before every single spec file it runs.                                                                                                                         |
| Support     | Used to create various custom commands and overwrite existing commands.This file runs before every single spec file.                                                                                                                                                        |
| Utilities   | Used to include all common methods needed for tests, Contain page methods (methods to interact with page elems), generic functions (generate name, email, date ..etc) and assertions (used for needed assertions)                                                           |


## Style Guides
* [esLint](https://eslint.org/) is being used to enforce js styles and conventions.
* esLint autocorrect is being used which automatically corrects warnings and errors.
* Excluded file: package-lock.json

## Documentation
* [esDoc](https://esdoc.org/) is being used for code documentation
​

## Git

- `dev` should be the semi-stable branch.
- `master` should have the code that is fully stable.
- A new branch should be created for every major feature `<feature-name>`.
  * one-way-booking

​
