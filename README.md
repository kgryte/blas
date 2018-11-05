<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

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
*	[blas.dcopy][blas-dcopy]
*	[blas.ddot][blas-ddot]
*	[blas.dnrm2][blas-dnrm2]
*	[blas.dscal][blas-dscal]
*	[blas.dswap][blas-dswap]
*	[blas.idamax][blas-idamax]

## Examples

``` javascript
var blas = require( 'blas' );

var rand;
var sign;
var x;
var y;
var i;

x = new Float64Array( 100 );
for ( i = 0; i < x.length; i++ ) {
    rand = Math.round( Math.random()*100.0 );
    sign = Math.random();
    if ( sign < 0.5 ) {
        sign = -1.0;
    } else {
        sign = 1.0;
    }
    x[ i ] = sign * rand;
}
console.log( blas.dasum( x.length, x, 1 ) );

x = new Float64Array( 10 );
y = new Float64Array( 10 );
for ( i = 0; i < x.length; i++ ) {
    x[ i ] = Math.round( Math.random()*500.0 );
    y[ i ] = Math.round( Math.random()*255.0 );
}
console.log( x );
console.log( y );

// Copy elements from `x` into `y` starting from the end of `y`:
blas.dcopy( x.length, x, 1, y, -1 );
console.log( y );
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

## Contributing

To contribute, see [stdlib][stdlib] (the monorepo in which development takes place).

---

## License

See [LICENSE][license].

## Copyright

Copyright © 2016-2018. The Stdlib [Authors][stdlib-authors].


[npm-image]: http://img.shields.io/npm/v/blas.svg
[npm-url]: https://npmjs.org/package/blas

[build-image]: https://img.shields.io/travis/kgryte/blas/master.svg
[build-url]: https://travis-ci.org/kgryte/blas

[coverage-image]: https://img.shields.io/codecov/c/github/kgryte/blas/master.svg
[coverage-url]: https://codecov.io/github/kgryte/blas?branch=master

[dependencies-image]: http://img.shields.io/david/kgryte/blas.svg
[dependencies-url]: https://david-dm.org/kgryte/blas

[dev-dependencies-image]: http://img.shields.io/david/dev/kgryte/blas.svg
[dev-dependencies-url]: https://david-dm.org/dev/kgryte/blas

[github-issues-image]: http://img.shields.io/github/issues/kgryte/blas.svg
[github-issues-url]: https://github.com/kgryte/blas/issues

[tape]: https://github.com/substack/tape
[istanbul]: https://github.com/gotwarlost/istanbul

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[license]: https://raw.githubusercontent.com/kgryte/blas/master/LICENSE

[blas-dasum]: https://www.npmjs.com/package/blas-dasum
[blas-daxpy]: https://www.npmjs.com/package/blas-daxpy
[blas-dcopy]: https://www.npmjs.com/package/blas-copy
[blas-ddot]: https://www.npmjs.com/package/blas-ddot
[blas-dnrm2]: https://www.npmjs.com/package/blas-dnrm2
[blas-dscal]: https://www.npmjs.com/package/blas-dscal
[blas-dswap]: https://www.npmjs.com/package/blas-swap
[blas-idamax]: https://www.npmjs.com/package/blas-idamax
