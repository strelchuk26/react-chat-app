/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
          flex: {
            '2': '2 2 0%',
          }
        },
        colors: {
          'dark-grey': '#252A34',
          'dark-grey-transperent': 'rgba(17, 25, 40, 0.5)',
          'dark-purple-transparent': 'rgba(48, 0, 97, 0.5)',
        }
    },
    plugins: [],
};
