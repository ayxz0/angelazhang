import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    //plugins: [require("tw-elements/dist/plugin.cjs")],
    darkMode: "class",
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
            /* content: {
                "./src/**//*.{html,js}",
                "./node_modules/tw-elements/dist/js/**//*.js"
            }, */
            
        },
        safelist: [
            'animate-[fade-in_1s_ease-in-out]', 
            'animate-[fade-in-down_1s_ease-in-out]'
        ]
        
    },
    variants: {
        extend: {
            display: ["group-hover"],
        },
    },
}
export default config
