'use strict';

var isString = require( './../lib' );

console.log( isString( 'beep' ) );
// returns true

console.log( isString( new String( 'beep' ) ) );
// returns true

console.log( isString( 5 ) );
// returns false