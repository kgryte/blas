'use strict';

// MODULES //

var tape = require( 'tape' );
var getKeys = require( 'object-keys' );
var blas = require( './../lib' );


// TESTS //

tape( 'main export is an object', function test( t ) {
	t.ok( typeof blas === 'object', 'main export is an object' );
	t.end();
});

tape( 'object contains methods', function test( t ) {
	var keys;
	var i;

	keys = getKeys( blas );
	for ( i = 0; i < keys.length; i++ ) {
		t.equal( typeof blas[ keys[i] ], 'function', 'property is function' );
	}
	t.end();
});
