'use strict';
/* eslint no-unused-vars: 'off' */

/**
 * To add a test, make a new function with code that should or should not be allowed.
 *
 * Code that should not be allowed should be commented with the eslint disable directive above it.
 * If the specified rule is not broken, eslint will error with an "unused directive" error which
 * enforces correctness for our "should not" tests.
 *
 * ```javascript
 * codeThatShouldBeAllowed()
 *
 * // eslint-disable-next-line rule-that-is-broken
 * codeThatBreaksTheRule()
 * ```
 */


function preferConstDestructing() {
	// Should allow let usage on destructuring when only one variable is reassigned
	let { a, b } = { a: 0, b: 100 };
	a += 1;

	// If neither are reassigned, prefer-const should show
	// eslint-disable-next-line prefer-const
	let { c, d } = { c: 0, d: 100 };
}
