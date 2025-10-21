# Test Repo
Code in this "repo" folder can be used to validate that eslint will pass or deny certain sections of code.


## Adding a test
Make a new function with code that should or should not be allowed.

Code that should not be allowed should be commented with the eslint disable directive above it.
If the specified rule is not broken, eslint will error with an "unused directive" error which
enforces correctness for our "should not" tests.

```javascript
codeThatShouldBeAllowed()

// eslint-disable-next-line rule-that-is-broken
codeThatBreaksTheRule()
```
