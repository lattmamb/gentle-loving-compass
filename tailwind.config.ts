
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float': {
					'0%, 100%': { transform: 'translateY(0)' },
					'50%': { transform: 'translateY(-10px)' }
				},
				'glow': {
					'0%, 100%': { opacity: '1' },
					'50%': { opacity: '0.6' }
				},
				'rotate-3d': {
					'0%, 100%': { transform: 'rotateX(0) rotateY(0)' },
					'50%': { transform: 'rotateX(10deg) rotateY(10deg)' },
				},
				'depth-shift': {
					'0%, 100%': { transform: 'translateZ(0px)' },
					'50%': { transform: 'translateZ(50px)' },
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float': 'float 3s infinite ease-in-out',
				'glow': 'glow 2s infinite ease-in-out',
				'rotate-3d': 'rotate-3d 6s infinite ease-in-out',
				'depth-shift': 'depth-shift 8s infinite ease-in-out'
			},
			perspective: {
				'none': 'none',
				'500': '500px',
				'1000': '1000px',
				'2000': '2000px',
			},
			transformStyle: {
				'flat': 'flat',
				'3d': 'preserve-3d',
			},
			translate: {
				'z-0': 'translateZ(0px)',
				'z-10': 'translateZ(10px)',
				'z-20': 'translateZ(20px)',
				'z-30': 'translateZ(30px)',
				'z-40': 'translateZ(40px)',
				'z-50': 'translateZ(50px)',
			},
			boxShadow: {
				'neo-sm': '3px 3px 6px #0a0c12, -3px -3px 6px #1e2430',
				'neo-md': '5px 5px 10px #0a0c12, -5px -5px 10px #1e2430',
				'neo-lg': '10px 10px 20px #0a0c12, -10px -10px 20px #1e2430',
				'neo-inner-sm': 'inset 3px 3px 6px #0a0c12, inset -3px -3px 6px #1e2430',
				'neo-inner-md': 'inset 5px 5px 10px #0a0c12, inset -5px -5px 10px #1e2430',
				'3d-hover': '0 30px 60px -15px rgba(0, 0, 0, 0.5)',
			}
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		function({ addUtilities }: { addUtilities: Function }) {
			const newUtilities = {
				'.transform-style-3d': {
					'transform-style': 'preserve-3d',
				},
				'.transform-style-flat': {
					'transform-style': 'flat',
				},
				'.backface-hidden': {
					'backface-visibility': 'hidden',
				},
				'.backface-visible': {
					'backface-visibility': 'visible',
				},
			}
			addUtilities(newUtilities)
		}
	],
} satisfies Config;
