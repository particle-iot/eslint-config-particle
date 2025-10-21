'use strict';
/* eslint no-unused-vars: 'off' */

function preferConstDestructing() {
	// Should allow let usage on destructuring when only one variable is reassigned
	let { a, b } = { a: 0, b: 100 };
	a += 1;

	// If neither are reassigned, prefer-const should show
	// eslint-disable-next-line prefer-const
	let { c, d } = { c: 0, d: 100 };
}
