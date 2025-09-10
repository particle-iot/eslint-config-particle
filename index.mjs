import js from '@eslint/js';
import globals from 'globals';
import jsdoc from 'eslint-plugin-jsdoc';
import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tseslint from 'typescript-eslint';

/** jsdoc.configs['flat/recommended'] is VERY strict */
export { globals, jsdoc };

/**
 * @param {string} testGlobals
 * @returns {import('eslint').Linter.Config}
 */
function testRules(testGlobals) {
	const testFilenames = ['spec', 'test', 'e2e', 'integration'];
	const extensions = '{mjs,cjs,js,ts}';

	return {
		files: [
			...testFilenames.map((name) => `**/*.${name}.${extensions}`),
			`**/test/**/*.${extensions}`,
		],
		languageOptions: {
			globals: {
				...globals[testGlobals]
			}
		},
		rules: {
			// Important for describe and it
			'func-names': 'off'
		}
	};
}

/**
 * @typedef {object} TsOptions
 * @property {string} tsconfig - the path to the tsconfig file used for type checking rules
 * @property {string[]} [ignores] - a list of files that the tsconfig ignores and should be excluded. You will get a warning if you are missing files here
 */

/**
 * @param {string} rootDir
 * @param {TsOptions} options
 * @returns {import('eslint').Linter.Config[]}
 */
function tsConfigs(rootDir, options) {
	/** @type {import('@typescript-eslint/parser').ParserOptions} */
	const parserOptions = {
		tsconfigRootDir: rootDir,
		project: options.tsconfig,
	};

	return [
		...tseslint.configs.recommended,
		{
			ignores: ['**/dist/**', '**/build/**', './config.schema.js']
		},
		{
			ignores: options.ignores ?? [],
			files: ['**/*.ts'],
			languageOptions: {
				parser: tsParser,
				parserOptions,
				globals: {
					// For some reason, NodeJS.Timeout isn't valid without this
					NodeJS: 'readable'
				}
			},
			plugins: {
				'@typescript-eslint': tsPlugin,
			},
			rules: {
				'@typescript-eslint/no-empty-object-type': ['error', {
					allowInterfaces: 'always'
				}],
				'@typescript-eslint/no-explicit-any': 'off',
				'@typescript-eslint/no-floating-promises': ['error', {
					ignoreVoid: true,
				}],
				'@typescript-eslint/no-misused-promises': ['error', {
					checksVoidReturn: {
						arguments: false,
						inheritedMethods: false
					}
				}],
				'@typescript-eslint/await-thenable': 'error',
				'@typescript-eslint/no-unused-vars': ['warn', {
					varsIgnorePattern: '^_',
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}],
				'@typescript-eslint/no-non-null-asserted-optional-chain': 'off'
			},
		},
	];
}

/**
 * @param {object} opts
 * @param {string} opts.rootDir - import.meta.dirname
 * @param {'vitest' | 'mocha' | 'jest'} opts.testGlobals - The name of the test framework we use that we want globals for
 * @param {boolean} [opts.jsdocs] - Whether to enable jsdocs rules. They are VERY strict, we also export jsdoc so you can try other configs if you want
 * @param {TsOptions} [opts.typescript] - Options for enabling typescript linting
 * @param {import('eslint').Linter.Rules} [opts.overrides] - Rule overrides for your specific project
 * @param {string[]} [opts.globalIgnores] - A list of files to ignore all lints for. eg- build scripts, changelog scripts, etc
 *
 * @returns {import('eslint').Linter.Config[]}
 */
export function particle(opts) {
	/** @type {import('eslint').Linter.Config[]} */
	const configs = [
		{ ignores: opts.globalIgnores ?? [] },
		{
			languageOptions: {
				// TS gets parsed as ESM, but transpiled to CJS by TSC
				sourceType: opts.typescript ? 'module' : 'commonjs',
				ecmaVersion: 2024,
				globals: {
					...globals.node
				}
			},
			rules: {
				'array-bracket-spacing': ['error', 'never'],
				'arrow-spacing': 'error',
				'block-scoped-var': 'error',
				'block-spacing': 'error',
				'brace-style': ['error', '1tbs'],
				'constructor-super': 'error',
				'curly': 'error',
				'eol-last': 'error',
				'eqeqeq': ['error', 'smart'],
				'func-names': ['error', 'as-needed'],
				'func-style': ['error', 'declaration', {
					allowArrowFunctions: true
				}],
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
				'new-cap': 'warn',
				'no-class-assign': 'error',
				'no-cond-assign': ['error', 'except-parens'],
				'no-const-assign': 'error',
				'no-dupe-class-members': 'error',
				'no-extend-native': 'error',
				'no-extra-parens': ['error', 'functions'],
				'no-mixed-spaces-and-tabs': 'error',
				'no-multi-spaces': ['error', {
					ignoreEOLComments: true
				}],
				'no-nested-ternary': 'error',
				'no-prototype-builtins': 'off',
				'no-this-before-super': 'error',
				'no-trailing-spaces': 'error',
				'no-undef': 'error',
				'no-underscore-dangle': 'off',
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
				'no-unused-vars': ['error', {
					varsIgnorePattern: '^_',
					argsIgnorePattern: '^_',
					caughtErrorsIgnorePattern: '^_'
				}],
				'no-console': 'error',
				...opts.overrides
			}
		},
		{ // Always allow module syntax for the eslint config file
			files: ['./eslint.config.mjs'],
			languageOptions: {
				sourceType: 'module',
			}
		},
		{ // Turn off console errors for scripts folder
			files: ['**/scripts/**'],
			rules: {
				'no-console': 'off'
			}
		},
		testRules(opts.testGlobals)
	];

	if (opts.typescript) {
		configs.push(...tsConfigs(opts.rootDir, opts.typescript));
	} else {
		configs.push(js.configs.recommended);
	}

	if (opts.jsdocs) {
		configs.push(jsdoc.configs['flat/recommended']);
	}

	return configs;
}
