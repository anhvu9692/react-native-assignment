module.exports = {
	"env": {
		"browser": true,
		"es6": true,
		"node": true
	},
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"globals": {
		"Atomics": "readonly",
		"SharedArrayBuffer": "readonly"
	},
	"parserOptions": {
		"ecmaFeatures": {
			"jsx": true
		},
		"ecmaVersion": 2018,
		"sourceType": "module"
	},
	"plugins": [
		"react",
    "react-hooks",
	],
	"rules": {
		"indent": [2, 2,
			{
				"SwitchCase": 1
			}
		],
		"linebreak-style": [2, "unix"],
		"curly": [2, "all"],
		"semi": [2, "always"],
		"one-var-declaration-per-line": [2, "always"],
		"no-case-declarations": 0,
		"no-unused-vars": "off",
		"no-console": 1,
		"eqeqeq": 2,
		"quotes": [2, "single"],
		"space-unary-ops": 0,
		"spaced-comment": 0,
		"strict": 2,
		"template-curly-spacing": 0,
		"use-isnan": 2,
		"valid-jsdoc": 0,
		"valid-typeof": 2,
		"vars-on-top": 0,
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
	}
};
