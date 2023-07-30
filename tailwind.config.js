/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        wobbleHorBottom: 'wobble-hor-bottom .8s'
      },
      keyframes: {
        'wobble-hor-bottom': {
          '0%, 100%': { transform: 'translateX(0)', 'transform-origin': '50% 50%' },
          '15%': { transform: 'translateX(-30px) rotate(-6deg)' },
          '30%': { transform: 'translateX(15px) rotate(6deg)' },
          '45%': { transform: 'translateX(-15px) rotate(-3.6deg)' },
          '60%': { transform: 'translateX(9px) rotate(2.4deg)' },
          '75%': { transform: 'translateX(-6px) rotate(-1.2deg)' }
        }
      }
    }
  },
  plugins: []
}
