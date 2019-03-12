# eslint-config-particle
eslint config rules for Particle Javascript projects

## Enforcing style rules in a Particle project

1. Install dependencies
`npm install --save-dev eslint eslint-config-particle`
1. Tell eslint to use the Particle config by creating `.eslintrc`
```
{
  "extends": "particle",
  "root": true,
  "env": {
    "es6": true,
    "mocha": true,
    "node": true
  }
}
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
