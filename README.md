Tic Tac Toe
===========

Browser based Tic Tac Toe


Gameplay
--------

2 players play Tic Tac Toe taking turns on the same browser window (no network-multiplayer, no AI).


Target design
-------------

![Design 1](https://cdn.rawgit.com/neopoly/tic_tac_toe/master/doc/design-1.png)

![Design 2](https://cdn.rawgit.com/neopoly/tic_tac_toe/master/doc/design-2.png)

![Design 3](https://cdn.rawgit.com/neopoly/tic_tac_toe/master/doc/design-3.png)

Environment
-----------

* [NodeJS](https://nodejs.org) (Version 5.x)

Setup
-----

* Fork this project into your github account
* Clone fork on your machine
* In project folder:
  * `npm install`


Run, test, build
----------------

* Start dev server: `npm start`
* To run the application open `http://localhost:8080/webpack-dev-server/`
* To run tests open `http://localhost:8080/webpack-dev-server/test`
* (Build release version to ./release: `npm run-script webpack`)

Technologies used
-----------------

* [Webpack](https://github.com/webpack/webpack) for asset bundling
* [React](https://facebook.github.io/react/) for web components
* [Sass](http://sass-lang.com/) for CSS preprocessing
* [Mocha](http://mochajs.org/) as test runner and [Chai](http://chaijs.com/) as assertion library
