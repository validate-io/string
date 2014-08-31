
// MODULES //

var // Expectation library:
	chai = require( 'chai' ),

	// Module to be tested:
	isString = require( './../lib' );


// VARIABLES //

var expect = chai.expect,
	assert = chai.assert;


// TESTS //

describe( 'validate.io-string', function tests() {
	'use strict';

	it( 'should export a function', function test() {
		expect( isString ).to.be.a( 'function' );
	});

	it( 'should positively validate', function test() {
		assert.ok( isString( '' ) );
	});

	it( 'should negatively validate', function test() {
		var values = [
				5,
				[],
				true,
				function(){},
				null,
				NaN,
				{},
				undefined
			];

		for ( var i = 0; i < values.length; i++ ) {
			assert.ok( !isString( values[i] ) );
		}
	});

});