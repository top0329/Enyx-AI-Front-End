/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        custom: '0px 20px 40px 0px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: () => ({
        'custom-image': "url('./src/assets/img/news-bg.png')",
        'custom-close-image': "url('./src/assets/img/close-line-icon.png')",
      }),
      maxWidth: {
        custom: '220px',
      },
      spacing: {
        'bs-gutter-x': 'var(--bs-gutter-x)',
        'bs-gutter-y': 'var(--bs-gutter-y)',
      },
      backgroundColor: {
        'custom-green': 'rgba(82, 195, 140, 0.20)',
      },
      width: {
        'max-content': 'max-content',
      },
      backgroundPosition: {
        inherit: 'inherit',
      },
    },
    colors: {
      default: '#3366a5',
      white: '#ffffff',
      hover: '#477ab9',
      grey: '#f8f8f8',
      black: '#434343',
      'b-gray': 'rgba(123, 123, 123, 0.2)',
      'f-gray': '#7B7B7B',
      'input-color': '#80a0c7',
    },
  },
  plugins: [],
};
