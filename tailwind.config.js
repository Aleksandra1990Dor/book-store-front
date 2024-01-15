/** @type {import('tailwindcss').Config} */
const twColors = require('tailwindcss/colors')

const colors = {
	transparent: twColors.transparent,
	black: '#2c1810',
	white: twColors.white,
	'bg-color': '#f3e5d0',
	'secondary-bg': '#f8f3ed',
	'shadow-bg': '#eae1d4',
	brown: '#daaa63',
	'light-brown': '#ddb476',
	gray: '#a9a19e',
	shadow: 'rgba(44,24,16, 0.4)'
}

module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		colors,
		extend: {
			fontSize: {
				xs: 'calc(calc(1vh + 1vw) * .3)',
				'1xs': 'calc(calc(1vh + 1vw) * .4)',
				'0.5-sm': 'calc(calc(1vh + 1vw) * .5)',
				sm: 'calc(calc(1vh + 1vw) * .6)',
				'0.5-base': 'calc(calc(1vh + 1vw) * .675)',
				base: 'calc(calc(1vh + 1vw) * .75)',
				'0.5-lg': 'calc(calc(1vh + 1vw) * 0.9)',
				lg: 'calc(calc(1vh + 1vw) * 1.1)',
				xl: 'calc(calc(1vh + 1vw) * 1.3)',
				'1.5xl': 'calc(calc(1vh + 1vw) * 1.5)',
				'2xl': 'calc(calc(1vh + 1vw) * 1.75)',
				'3xl': 'calc(calc(1vh + 1vw) * 2)',
				'4xl': 'calc(calc(1vh + 1vw) * 2.5)',
				'5xl': 'calc(calc(1vh + 1vw) * 3)'
				// '6xl': '4.3rem',
				// '7xl': '5.17rem',
				// '8xl': '6.9rem',
				// '9xl': '9.2rem'
			},
			spacing: {
				index: 'calc(1vh + 1vw)',
				0: '0',
				0.02: 'calc(calc(1vh + 1vw) * .025)',
				translate: 'calc(calc(1vh + 1vw) * .05)',
				0.15: 'calc(calc(1vh + 1vw) * .15)',
				0.3: 'calc(calc(1vh + 1vw) * .3)',
				0.4: 'calc(calc(1vh + 1vw) * .4)',
				0.5: 'calc(calc(1vh + 1vw) * .5)',
				0.75: 'calc(calc(1vh + 1vw) * .75)',
				1: 'calc(calc(1vh + 1vw) * 1.15)',
				1.3: 'calc(calc(1vh + 1vw) * 1.3)',
				1.5: 'calc(calc(1vh + 1vw) * 1.5)',
				1.75: 'calc(calc(1vh + 1vw) * 1.75)',
				2: 'calc(calc(1vh + 1vw) * 2)',
				2.5: 'calc(calc(1vh + 1vw) * 2.5)',
				3: 'calc(calc(1vh + 1vw) * 3)',
				3.5: 'calc(calc(1vh + 1vw) * 3.5)',
				4: 'calc(calc(1vh + 1vw) * 4)',
				4.5: 'calc(calc(1vh + 1vw) * 4.5)',
				5: 'calc(calc(1vh + 1vw) * 5)',
				5.75: 'calc(calc(1vh + 1vw) * 5.75)',
				6: 'calc(calc(1vh + 1vw) * 6)',
				7: 'calc(calc(1vh + 1vw) * 7)',
				8: 'calc(calc(1vh + 1vw) * 8)',
				9: 'calc(calc(1vh + 1vw) * 9)',
				10: 'calc(calc(1vh + 1vw) * 10)',
				11: 'calc(calc(1vh + 1vw) * 11)',
				12: 'calc(calc(1vh + 1vw) * 12)',
				13: 'calc(calc(1vh + 1vw) * 13)',
				14: 'calc(calc(1vh + 1vw) * 14)',
				15: 'calc(calc(1vh + 1vw) * 15)',
				16: 'calc(calc(1vh + 1vw) * 16)',
				18: 'calc(calc(1vh + 1vw) * 18)',
				20: '80px',
				24: '96px',
				28: '112px',
				32: '128px',
				36: '144px',
				40: '160px',
				44: '176px',
				48: '192px',
				52: '208px',
				56: '224px',
				60: '240px',
				64: '256px',
				72: '288px',
				80: '320px',
				96: '384px'
			},
			// extend: {
			// 	lineHeight: {
			// 		3: '12px',
			// 		4: '16px',
			// 		5: '20px',
			// 		6: '24px',
			// 		7: '28px',
			// 		8: '32px',
			// 		9: '36px',
			// 		10: '40px'
			// 	}
			// },
			zIndex: {
				1: 1,
				2: 2,
				3: 3
			},
			keyframes: {
				animationOpacity: {
					from: { opacity: 0.2 },
					to: { opacity: 1 }
				},
				scaleIn: {
					'0%': {
						opacity: 0,
						transform: 'scale(0.9)'
					},
					'50%': {
						opacity: 0.3
					},
					'100%': {
						opacity: 1,
						transform: 'scale(1)'
					}
				}
			},
			animation: {
				opacity: 'animationOpacity .5s ease-in-out',
				shadowOpacity: 'animationShadow .5s ease-in-out',
				scaleIn: 'scaleIn .35s ease-in-out'
			}
		}
	},
	plugins: []
}
