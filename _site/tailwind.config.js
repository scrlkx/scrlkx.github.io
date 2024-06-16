const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './_drafts/**/*.html',
        './_includes/**/*.html',
        './_layouts/**/*.html',
        './_posts/*.md',
        './*.md',
        './*.html',
    ],
    theme: {
        colors: {
            current: 'currentColor',
            'dark': '#0D1017',
            'light': '#FCFCFC',
            'black': '#0F131A',
            'white': '#FCFCFC',
            'gray': '#636A72',
            'light-gray': '#E7EAED',
            'dark-gray': '#1A1F28',
            'green': '#AAD94C',
            'orange': '#FF8F40',
        },
        extend: {
            fontFamily: {
                'sans': ['Inter', ...defaultTheme.fontFamily.sans],
                'serif': ['Merriweather', ...defaultTheme.fontFamily.serif],
            },
        }
    },
    plugins: [],
}