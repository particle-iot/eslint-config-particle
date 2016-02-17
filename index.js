module.exports = {
	"rules": {
		"block-scoped-var": 2,
		"brace-style": [2, "1tbs"],
		"camelcase": 0,
		"curly": 2,
		"eol-last": 2,
		"eqeqeq": [2, "smart"],
		"max-depth": [1, 3],
		"max-statements": [1, 30],
		"new-cap": 1,
		"no-extend-native": 2,
		"no-mixed-spaces-and-tabs": 2,
		"no-trailing-spaces": 2,
		"no-use-before-define": [2, "nofunc"],
		"no-unused-vars": 1,
		"no-extra-parens": [2, "functions"],
		"no-underscore-dangle": 0,
		"no-nested-ternary": 2,
		"no-undef": 2,
		"quotes": [2, "single", "avoid-escape"],
		"semi": [2, "always"],
		"keyword-spacing": 2,
		"space-unary-ops": [2, {"words": true, "nonwords": false}],
		"strict": [2, "global"],
		"valid-jsdoc": [1, {
			"requireReturn": false,
			"requireParamDescription": false
		}],
		"func-names": 2,
		"no-multi-spaces": [1, {
			"exceptions": {
				"VariableDeclarator": true
			}
		}],
		"no-var": 2,
		"no-this-before-super": 2,
		"no-dupe-class-members": 2,
		"no-const-assign": 2,
		"no-class-assign": 2,
		"constructor-super": 2
	}
};
