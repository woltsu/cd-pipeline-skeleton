# cd-pipeline-skeleton
[![Build Status](https://travis-ci.org/woltsu/cd-pipeline-skeleton.svg?branch=master)](https://travis-ci.org/woltsu/cd-pipeline-skeleton) [![codecov](https://codecov.io/gh/woltsu/cd-pipeline-skeleton/branch/master/graph/badge.svg)](https://codecov.io/gh/woltsu/cd-pipeline-skeleton) [![Maintainability](https://api.codeclimate.com/v1/badges/1102648741bae2dc0e63/maintainability)](https://codeclimate.com/github/woltsu/cd-pipeline-skeleton/maintainability) [![Dependencies](https://david-dm.org/woltsu/cd-pipeline-skeleton.svg)](https://david-dm.org/woltsu/cd-pipeline-skeleton)

A skeleton project for a node application that uses continuous delivery pipeline and other additional tools that monitor project quality. After committing changes, Travis will automatically test and lint the committed changes. If everything works fine, the commit will then be forwarded to Heroku into a staging environment.
## Start  
Install dependencies:

```npm install```

Create .env file:

```touch .env```

Add two environmental variables into the .env file:

```
PORT=X
TEST_PORT=Y
```

Start the project:

1. ```npm run watch``` for development
2. ```npm start``` for production

## Additional scripts
Tests:

```npm test```

Linter:

```npm run lint```
