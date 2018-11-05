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

var blas = require( './../lib' );

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
