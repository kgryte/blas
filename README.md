# BLAS

[![NPM version][npm-image]][npm-url] [![Build Status][build-image]][build-url] [![Coverage Status][coverage-image]][coverage-url] [![Dependencies][dependencies-image]][dependencies-url]

> Basic linear algebra subroutines (BLAS).

## Installation

``` bash
$ npm install blas
```

## Usage

``` javascript
var blas = require( 'blas' );
```

### blas

Basic linear algebra subroutines.

#### Level 1

*	[blas.dasum][blas-dasum]
*	[blas.daxpy][blas-daxpy]
*	[blas-dcopy][blas-dcopy]
*	[blas-ddot][blas-ddot]
*	[blas-dnrm2][blas-dnrm2]
*	[blas-dscal][blas-dscal]
*	[blas-dswap][blas-dswap]
*	[blas-idamax][blas-idamax]

## Examples

``` javascript
var blas = require( 'blas' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```

---

## Tests

### Unit

This repository uses [tape][tape] for unit tests. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul][istanbul] as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```

---

## License

See [LICENSE][license].

## Copyright

Copyright © 2016-2018. The Stdlib [Authors][stdlib-authors].


[npm-image]: http://img.shields.io/npm/v/blas.svg
[npm-url]: https://npmjs.org/package/blas

[build-image]: http://img.shields.io/travis/TODO/master.svg
[build-url]: https://travis-ci.org/TODO

[coverage-image]: https://img.shields.io/codecov/c/github/TODO/master.svg
[coverage-url]: https://codecov.io/github/TODO?branch=master

[dependencies-image]: http://img.shields.io/david/TODO.svg
[dependencies-url]: https://david-dm.org/TODO

[dev-dependencies-image]: http://img.shields.io/david/dev/TODO.svg
[dev-dependencies-url]: https://david-dm.org/dev/TODO

[github-issues-image]: http://img.shields.io/github/issues/TODO.svg
[github-issues-url]: https://github.com/TODO/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[license]: https://raw.githubusercontent.com/kgryte/blas/develop/LICENSE

[blas-dasum]: https://www.npmjs.com/package/blas-dasum
[blas-daxpy]: https://www.npmjs.com/package/blas-daxpy
[blas-dcopy]: https://www.npmjs.com/package/blas-copy
[blas-ddot]: https://www.npmjs.com/package/blas-ddot
[blas-dnrm2]: https://www.npmjs.com/package/blas-dnrm2
[blas-dscal]: https://www.npmjs.com/package/blas-dscal
[blas-dswap]: https://www.npmjs.com/package/blas-swap
[blas-idamax]: https://www.npmjs.com/package/blas-idamax
