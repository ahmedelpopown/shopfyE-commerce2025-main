// import withMT from "@material-tailwind/react/utils/withMT";
// import { defineConfig } from "vite";

// export default withMT(
//   defineConfig({
//     darkMode: ["class"],
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//     "./public/assets/**/*.{js,ts,jsx,tsx}",
//   ],
//     optimizeDeps: {
//       include: [
//         "swiper",
//         "swiper/react/swiper-react.js",
//         "swiper/modules/navigation/navigation.js",
//         "swiper/modules/pagination/pagination.js",
//         "swiper/modules/effect-fade/effect-fade.js",
//       ],
//     },
 
  
//   theme: {
//   	extend: {
//   		keyframes: {
//   			slideUp: {
//   				'0%': {
//   					transform: 'translateY(100%)',
//   					opacity: '0'
//   				},
//   				'100%': {
//   					transform: 'translateY(0)',
//   					opacity: '1'
//   				}
//   			}
//   		},
//   		slideUp: {
//   			'0%': {
//   				transform: 'translateY(100%)',
//   				opacity: '0'
//   			},
//   			'100%': {
//   				transform: 'translateY(0)',
//   				opacity: '1'
//   			}
//   		},
//   		animation: {
//   			slideUp: 'slideUp 0.5s ease-out forwards'
//   		},
//   		colors: {
//   			customTeal: '#04D39F',
//   			landingDefault: '#ededed',
//   			landingSpan: '#fff2d5',
//   			landingService: '#caf1e1',
//   			landingSel: '#323232',
//   			textColor: '#969696',
//   			textBg: '#333333',
//   			customGreen: {
//   				'50': '#e6fcfa',
//   				'100': '#d1f8f3',
//   				'200': '#caf1e1',
//   				'300': '#b2e7d8',
//   				'400': '#9adccf',
//   				'500': '#82d2c6',
//   				'600': '#6ac8bd'
//   			},
//   			background: 'hsl(var(--background))',
//   			foreground: 'hsl(var(--foreground))',
//   			card: {
//   				DEFAULT: 'hsl(var(--card))',
//   				foreground: 'hsl(var(--card-foreground))'
//   			},
//   			popover: {
//   				DEFAULT: 'hsl(var(--popover))',
//   				foreground: 'hsl(var(--popover-foreground))'
//   			},
//   			primary: {
//   				DEFAULT: 'hsl(var(--primary))',
//   				foreground: 'hsl(var(--primary-foreground))'
//   			},
//   			secondary: {
//   				DEFAULT: 'hsl(var(--secondary))',
//   				foreground: 'hsl(var(--secondary-foreground))'
//   			},
//   			muted: {
//   				DEFAULT: 'hsl(var(--muted))',
//   				foreground: 'hsl(var(--muted-foreground))'
//   			},
//   			accent: {
//   				DEFAULT: 'hsl(var(--accent))',
//   				foreground: 'hsl(var(--accent-foreground))'
//   			},
//   			destructive: {
//   				DEFAULT: 'hsl(var(--destructive))',
//   				foreground: 'hsl(var(--destructive-foreground))'
//   			},
//   			border: 'hsl(var(--border))',
//   			input: 'hsl(var(--input))',
//   			ring: 'hsl(var(--ring))',
//   			chart: {
//   				'1': 'hsl(var(--chart-1))',
//   				'2': 'hsl(var(--chart-2))',
//   				'3': 'hsl(var(--chart-3))',
//   				'4': 'hsl(var(--chart-4))',
//   				'5': 'hsl(var(--chart-5))',
  			
//   			}
//   		},
//   		screens: {
//   			xs: '320px',
//   			sm425: '425px',
//   			md777: '777px',
//   			mdS: '991px',
//   			lg: '1024px'
//   		},
//   		borderRadius: {
//   			lg: 'var(--radius)',
//   			md: 'calc(var(--radius) - 2px)',
//   			sm: 'calc(var(--radius) - 4px)'
//   		}
//   	},
//   },
//    require("tailwindcss-animate"),
//     require("@tailwindcss/forms"),
//     require("@tailwindcss/typography"),
// })
// );

import withMT from "@material-tailwind/react/utils/withMT";
import { defineConfig } from "vite";
import animate from "tailwindcss-animate";
import forms from "@tailwindcss/forms";
import typography from "@tailwindcss/typography";

export default withMT(
  defineConfig({
    darkMode: ["class"],
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./public/assets/**/*.{js,ts,jsx,tsx}",
    ],
    optimizeDeps: {
      include: [
        "swiper",
        "swiper/react/swiper-react.js",
        "swiper/modules/navigation/navigation.js",
        "swiper/modules/pagination/pagination.js",
        "swiper/modules/effect-fade/effect-fade.js",
      ],
    },
    theme: {
    	extend: {
    		keyframes: {
    			slideUp: {
    				'0%': {
    					transform: 'translateY(100%)',
    					opacity: '0'
    				},
    				'100%': {
    					transform: 'translateY(0)',
    					opacity: '1'
    				}
    			}
    		},
    		animation: {
    			slideUp: 'slideUp 0.5s ease-out forwards'
    		},
    		colors: {
    			customTeal: '#04D39F',
    			landingDefault: '#ededed',
    			landingSpan: '#fff2d5',
    			landingService: '#caf1e1',
    			landingSel: '#323232',
    			textColor: '#969696',
    			textBg: '#333333',
    			customGreen: {
    				'50': '#e6fcfa',
    				'100': '#d1f8f3',
    				'200': '#caf1e1',
    				'300': '#b2e7d8',
    				'400': '#9adccf',
    				'500': '#82d2c6',
    				'600': '#6ac8bd'
    			},
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		screens: {
    			xs: '320px',
    			sm375: '375px',
    			sm425: '425px',
    			md777: '767px',
    			mdS: '991px',
    			lg: '1024px'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
    plugins: [animate, forms, typography, require("tailwindcss-animate")],
  })
);
