# eslint-config-particle
eslint config rules for Particle Javascript projects

## Enforcing style rules in a Particle project

1. Install dependencies
`npm install --save-dev eslint eslint-config-particle`
1. Tell eslint to use the Particle config by creating `eslint.config.mjs`
```
import eslintParticle from 'eslint-config-particle';

// See the ESLint configuration docs for more information:
// https://eslint.org/docs/latest/use/configure/configuration-files

export default [
	// No other keys with ignore makes it "global ignore"
	// {
	// 	ignores: ['**/device-os-protobuf/**'],
	// },
	...eslintParticle.recommended,
	...eslintParticle.jsdoc,
	eslintParticle.mocha,
];
```
1. Add lint scripts to `package.json`
```
  "scripts": {
    "lint": "eslint . --quiet -f unix",
    "lint:fix": "eslint . --quiet --fix -f unix",
  }
```
1. Run lint as part of the CI pipeline, for example by adding to `.travis.yml`
```
script:
- npm run lint && npm test
```
