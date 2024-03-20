/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{svelte,js,ts}'],
  theme: {
    extend: {backgroundImage: {
      'guitar': "url('/Users/shwncndn/tuner/src/assets/TunerGuitar.png')"
     }},
  },
  plugins: [],
}

