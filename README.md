# _Super Galactic Age Calculator_

#### _A web-based application to calculate a user's age and life expectancy on Earth, Mercury, Venus, Mars, and Jupiter._

#### _By **Jessica R. Williams**_

#### _Table of Contents_

1. [Technologies Used](#technologies)
2. [Description](#description)
3. [Setup/Installation Requirements](#setup)
4. [Additional Setup/Installation Note for Windows Users](#windows)
5. [Specifications](#specs)
6. [Known Bugs](#bugs)
7. [License](#license)
8. [Contact Information](#contact)

## Technologies Used <a id="technologies"></a>

* _Babel/core 7.6.4_
* _Babel/plugin-transform-modules-commonjs 7.6.0_
* _Bootstrap 4.5.0_
* _clean-webpack-plugin 3.0.0_
* _CSS_
* _css-loader 3.2.0_
* _eslint 6.3.0_
* _eslint-loader 3.0.0_
* _file-loader 1.1.6_
* _HTML5_
* _html-loader 0.5.5_
* _html-webpack-plugin 3.2.0_
* _JavaScript ES6_
* _Jest 24.9.0_
* _jQuery 3.5.1_
* _Node Package Manager 6.14.9_
* _popper.js 1.16.1_
* _style-loader 1.0.0_
* _webpack 4.39.3_
* _webpack-cli 3.3.8_
* _webpack-dev-server 3.11.2_

## Description <a id="description"></a>

_This is an independent project for the Test Driven Development section of [Epicodus](https://www.epicodus.com)'s [Intermediate JavaScript course](https://www.learnhowtoprogram.com/intermediate-javascript-part-time-c-and-react-track])
_The Project Prompt: Write an application that determines a user's age based on a planet's solar years._
_The business logic of your application should:_
_Take a person's age in years and create a class that does the following:_

* _Returns their age in Mercury years. (A Mercury year is .24 Earth years.)_
* _Returns their age in Venus years. (A Venus year is .62 Earth years.)_
* _Returns their age in Mars years. (A Mars year is 1.88 Earth years.)_
* _Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)_
* _Determines how many years a user has left to live on each planet._
* _If a user has already surpassed the average life expectancy, return the number of years they have lived past the life expectancy._

_The Project Objectives:_
* _Business logic has 100% line coverage with Jest._
* _Each spec was committed before writing its corresponding code._
* _Project utilizes ES6 features including classes and template literals._
* _Dependencies are managed with npm._
* _webpack is used to lint, bundle, and process code._
* _Project is in a polished, portfolio-quality state._

## Setup/Installation Requirements <a id="setup"></a>

* _Open the terminal on your local machine_
* _If [Node.js](https://nodejs.org/en/) and [Nope Package Manager (npm)](https://www.npmjs.com/) are not installed on your local device, follow the instructions [here](https://www.learnhowtoprogram.com/intermediate-javascript/getting-started-with-javascript/installing-node-js)_
* _Navigate to the directory inside of which you wish to house this project_
* _Clone this project with the following git command `$ git clone <https://github.com/jessicarubinwilliams/super-galactic-age-calculator>`_
* _Navigate to the top level of the repository with the command `$ cd super-galactic-age-calculator`_
* _Recreate project environment and install required dependencies with terminal command `$ npm install`_
* _Create production environment with terminal command `$ npm run build`_
* _Open project in a development server in the browser of your choice with the command `$ npm run start`_
* _Lint code with the command `$ npm run lint`_
* _Run tests in Jest with the command `$ npm test`_

## Additional Setup/Installation Note for Windows Users <a id="windows"></a>

_This environment was created on a Mac. For it to work properly in your local environment make the following change:_
* _Update package.json, line 8 to: `"start": "npm run build & webpack-dev-server --open --mode development",`_

## Specifications <a id="specs"></a>

| Behavior | Input | Output |
|:---:|:---:|:---:|
| Return age on Earth | July 12, 1997 | 23.7 |
| Return age on Mercury | July 12, 1997 | 5.7 |
| Return age on Venus | July 12, 1997 | 14.7 |
| Return age on Mars | July 12, 1997 | 44.5 |
| Return age on Jupiter | July 12, 1997 | 280.9 |
| Return remaining years on Earth | 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 | 74.3 |
| Return remaining years on Mercury | 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 | 17.8 |
| Return remaining years on Venus | 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 | 46.1 |
| Return remaining years on Mars | 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 | 139.7 |
| Return remaining years on Jupiter | 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 | 881.2 |

## Known Bugs <a id="bugs"></a>
* _There is no form validation for empty selections or non-date entries_

## License <a id="license"></a>
*[MIT](https://choosealicense.com/licenses/mit/)*

Copyright (c) **_2021 Jessica R. Williams_**

## Contact Information <a id="contact"></a>
**_Jessica R. Williams [mailto](mailto:jessicarubinwilliams@gmail.com)_**