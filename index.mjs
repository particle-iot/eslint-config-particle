import globals from 'globals';
import pluginJs from '@eslint/js';
import mochaPlugin from 'eslint-plugin-mocha';
import stylisticJs from '@stylistic/eslint-plugin-js';
import jsdoc from 'eslint-plugin-jsdoc';

const mocha = mochaPlugin.configs.flat.recommended;

// Allow anon functions to make mocha tests easier to write
mocha.rules['func-names'] = 'off';

const particleMocha = {
	...mocha,
	files: ['**/*.spec.js']
}

const particleJs = [
	{
		files: ['**/*.js'],
		languageOptions: { sourceType: 'commonjs', globals: globals.node },
	},
	pluginJs.configs.recommended,
	{
		plugins: {
			'@stylistic/js': stylisticJs,
		},
		rules: {
			'array-bracket-spacing': ['error', 'never'],
			'arrow-spacing': 'error',
			'block-scoped-var': 'error',
			'block-spacing': 'error',
			'brace-style': ['error', '1tbs'],
			'camelcase': ['error', {
				properties: 'never'
			}],
			'constructor-super': 'error',
			'curly': 'error',
			'eol-last': 'error',
			'eqeqeq': ['error', 'smart'],
			'func-names': ['error', 'as-needed'],
			'func-style': ['error', 'declaration', {
				allowArrowFunctions: true
			}],
			'getter-return': 'off',
			'handle-callback-err': 'error',
			'indent': ['error', 'tab', {
				SwitchCase: 1,
				ObjectExpression: 'first',
				MemberExpression: 1
			}],
			'keyword-spacing': ['error', {
				before: true,
				after: true,
			}],
			'max-depth': ['warn', 3],
			'max-len': ['error', {
				code: 120,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true
			}],
			'max-statements': ['warn', 30],
			'new-cap': 'warn',
			'no-class-assign': 'error',
			'no-cond-assign': ['error', 'except-parens'],
			'no-const-assign': 'error',
			'no-dupe-class-members': 'error',
			'no-extend-native': 'error',
			'no-extra-parens': ['error', 'functions'],
			'no-mixed-spaces-and-tabs': 'error',
			'no-multi-spaces': ['error', {
				exceptions: {
					VariableDeclarator: true,
				}
			}],
			'no-nested-ternary': 'error',
			'no-prototype-builtins': 'off',
			'no-this-before-super': 'error',
			'no-trailing-spaces': 'error',
			'no-undef': 'error',
			'no-underscore-dangle': 'off',
			// Allow unused variables using the same _ prefix as rust
			'no-unused-vars': ['error', { argsIgnorePattern: '^_', caughtErrorsIgnorePattern: '^_' }],
			'no-use-before-define': ['error', {
				functions: false,
				classes: false
			}],
			'no-whitespace-before-property': 'error',
			'no-var': 'error',
			'object-curly-spacing': ['error', 'always'],
			'prefer-const': 'error',
			'quotes': ['error', 'single', {
				avoidEscape: true,
				allowTemplateLiterals: true
			}],
			'semi': ['error', 'always'],
			'space-in-parens': ['error', 'never'],
			'space-infix-ops': 'error',
			'space-unary-ops': ['error', {
				words: true,
				nonwords: false
			}],
			'strict': ['error', 'global'],

		}
	}
]

const particleJsDoc = [
	jsdoc.configs['flat/recommended'],
	{
		plugins: {
			'@stylistic/js': stylisticJs,
			jsdoc,
		},
		rules: {
			'jsdoc/require-returns': 'off',
			'jsdoc/require-returns-description': 'off',
			'jsdoc/require-param-description': 'off',
			'jsdoc/require-jsdoc': 'off',
		}
	},
]

export default {
	recommended: particleJs,
	mocha: particleMocha,
	jsdoc: particleJsDoc
};

