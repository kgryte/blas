'use strict';

// MODULES //

var test = require( 'tape' );
var blas = require( './../lib' );


// TESTS //

test( 'main export is an object', function test( t ) {
	t.ok( typeof blas === 'object', 'main export is an object' );
	t.end();
});
