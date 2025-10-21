# eslint-config-particle
eslint config rules for Particle Javascript projects

## Adding/updating rules
You can do so in the index.mjs file. There are separate functions for test rules, TS rules, js rules, etc.

If you want to validate your rule is working as expected, see the [test repo's README](./test/README.md)

## Enforcing style rules in a Particle project
### Install dependencies
`npm install -D eslint eslint-config-particle`
### Create a config
#### JS Example
```javascript
// eslint.config.mjs
import { particle } from 'eslint-config-particle';

export default particle({
	rootDir: import.meta.dirname,
	testGlobals: 'mocha'
});
```

#### TS Example
```javascript
// eslint.config.mjs
import { particle } from 'eslint-config-particle';

export default particle({
	rootDir: import.meta.dirname,
	testGlobals: 'vitest',
	globalIgnores: ['./update-changelog.js', './esbuild.js', '**/scripts/**'],
	typescript: {
		tsconfig: './tsconfig-check.json'
	},
	overrides: {
		// When we switch to a real logger, we can turn this off
		'no-console': 'off',
		// Dbus APIs are usually cap functions
		'new-cap': 'off'
	}
});
```

#### Customizing beyond particle opts
```javascript
// eslint.config.mjs
import { particle } from 'eslint-config-particle';

export default [
    ...particle({
	    rootDir: import.meta.dirname,
	    // more particle opts
    }),
	{
		// my custom rules here that the particle fn doesn't let me customize 
    }
];
```

### Add lint scripts to `package.json` and update CI
```
  "scripts": {
    "lint": "eslint",
    "lint:fix": "eslint --fix",
  }
```
