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
blas.dnrm2 = require( 'blas-dnrm2' );
blas.dscal = require( 'blas-dscal' );
blas.dswap = require( 'blas-dswap' );
blas.idamax = require( 'blas-idamax' );


// EXPORTS //

module.exports = blas;
