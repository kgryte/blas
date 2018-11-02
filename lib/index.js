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
var ns = {};

// Level 1 routines:
ns.dasum = require( 'blas-dasum' );
ns.daxpy = require( 'blas-daxpy' );
ns.dcopy = require( 'blas-dcopy' );
ns.ddot = require( 'blas-ddot' );
ns.dnrm2 = require( 'blas-dnrm2' );
ns.dscal = require( 'blas-dscal' );
ns.dswap = require( 'blas-dswap' );
ns.idamax = require( 'blas-idamax' );


// EXPORTS //

module.exports = ns;
