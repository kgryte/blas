'use strict';

/**
* BLAS.
*/

var blas = {};


/**
* Level 1.
*/
blas.dasum = require( 'blas-dasum' );
blas.daxpy = require( 'blas-daxpy' );
blas.dcopy = require( 'blas-dcopy' );
blas.ddot = require( 'blas-ddot' );
blas.dscal = require( 'blas-dscal' );
blas.dswap = require( 'blas-dswap' );


// EXPORTS //

module.exports = blas;
