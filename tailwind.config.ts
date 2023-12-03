import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				brand: {
					100: "#6a88cf",
					150: "#9db9e7",
					200: "#9db9e7",
					300: "#00521F"
				},
				audiovisual: {
					100: "#321174",
					200: "#5271FF",
					300: "#692E7E",
					400: "#7A3792",
				},
				designgrafico: {
					100: "#d41111",
					200: "#ff5100ff",
					300: "#0071cdff",
					400: "#faa400ff",
				},
				publicidade: {
					100: "#200060",
					200: "#D10000",
				},
			},
		},
	},
	plugins: [require('tailwindcss-animated')
	],
}
export default config
