/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

/**
* BLAS namespace.
*
* @type {Namespace}
*/
var blas = {};

/**
* @name dasum
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dasum}
*/
blas.dasum = require( 'blas-dasum' );

/**
* @name daxpy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/daxpy}
*/
blas.daxpy = require( 'blas-daxpy' );

/**
* @name dcopy
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dcopy}
*/
blas.dcopy = require( 'blas-dcopy' );

/**
* @name ddot
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/ddot}
*/
blas.ddot = require( 'blas-ddot' );

/**
* @name dnrm2
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dnrm2}
*/
blas.dnrm2 = require( 'blas-dnrm2' );

/**
* @name dscal
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dscal}
*/
blas.dscal = require( 'blas-dscal' );

/**
* @name dswap
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/dswap}
*/
blas.dswap = require( 'blas-dswap' );

/**
* @name idamax
* @memberof blas
* @readonly
* @type {Function}
* @see {@link module:@stdlib/blas/base/idamax}
*/
blas.idamax = require( 'blas-idamax' );


// EXPORTS //

module.exports = blas;
