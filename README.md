validate.io-string
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Validates if a value is a string.


## Installation

``` bash
$ npm install validate.io-string
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

To use the module,

``` javascript
var lib = require( 'validate.io-string' );
```


## Examples

``` javascript
var lib = require( 'validate.io-string' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://visionmedia.github.io/mocha) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ open reports/coverage/lcov-report/index.html
```


## License

[MIT license](http://opensource.org/licenses/MIT). 


---
## Copyright

Copyright &copy; 2014. Athan Reines.


[npm-image]: http://img.shields.io/npm/v/validate.io-string.svg
[npm-url]: https://npmjs.org/package/validate.io-string

[travis-image]: http://img.shields.io/travis/validate-io/string/master.svg
[travis-url]: https://travis-ci.org/validate-io/string

[coveralls-image]: https://img.shields.io/coveralls/validate-io/string/master.svg
[coveralls-url]: https://coveralls.io/r/validate-io/string?branch=master

[dependencies-image]: http://img.shields.io/david/validate-io/string.svg
[dependencies-url]: https://david-dm.org/validate-io/string

[dev-dependencies-image]: http://img.shields.io/david/dev/validate-io/string.svg
[dev-dependencies-url]: https://david-dm.org/dev/validate-io/string

[github-issues-image]: http://img.shields.io/github/issues/validate-io/string.svg
[github-issues-url]: https://github.com/validate-io/string/issues