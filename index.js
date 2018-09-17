module.exports = {
	"extends": "eslint:recommended",
	"rules": {
		"array-bracket-spacing": ["error", "never"],
		"block-scoped-var": "error",
		"brace-style": ["error", "1tbs"],
		"camelcase": ["error", { "properties": "never" }],
		"constructor-super": "error",
		"curly": "error",
		"eol-last": "error",
		"eqeqeq": ["error", "smart"],
		"func-names": "error",
		"func-style": ["error", "declaration", { "allowArrowFunctions": true }],
		"handle-callback-err": "error",
		"indent": ["error", "tab", {
			"SwitchCase": 1,
			"ObjectExpression": "first",
		  "MemberExpression": 1
		}],
		"keyword-spacing": ["error", {
		  "before": true,
		  "after": true,
		}],
		"max-depth": ["warn", 3],
		"max-statements": ["warn", 30],
		"new-cap": "warn",
		"no-class-assign": "error",
		"no-cond-assign": ["error", "except-parens"],
		"no-const-assign": "error",
		"no-dupe-class-members": "error",
		"no-extend-native": "error",
		"no-extra-parens": ["error", "functions"],
		"no-mixed-spaces-and-tabs": "error",
		"no-multi-spaces": ["warn", {
			"exceptions": {
				"VariableDeclarator": true
			}
		}],
		"no-nested-ternary": "error",
		"no-this-before-super": "error",
		"no-trailing-spaces": "error",
		"no-undef": "error",
		"no-underscore-dangle": "off",
		"no-use-before-define": ["error", { "functions": false, "classes": false }],
		"object-curly-spacing": ["error", "always"],
		"quotes": ["error", "single", "avoid-escape"],
		"semi": ["error", "always"],
		"space-unary-ops": ["error", {"words": true, "nonwords": false}],
		"strict": ["error", "global"],
		"valid-jsdoc": ["warn", {
			"requireReturn": false,
			"requireParamDescription": false
		}]
	}
};
