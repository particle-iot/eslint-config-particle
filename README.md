# eslint-config-particle
eslint config rules for Particle Javascript projects

## Enforcing style rules in a Particle project
### Install dependencies
`npm install -D eslint eslint-config-particle`
### Create a config
#### JS Example
```javascript
// eslint.config.mjs
import { particle } from './particle-eslint.mjs';

export default particle({
	rootDir: import.meta.dirname,
	testGlobals: 'mocha'
});
```

#### TS Example
```javascript
// eslint.config.mjs
import { particle } from './particle-eslint.mjs';

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
import { particle } from './particle-eslint.mjs';

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
