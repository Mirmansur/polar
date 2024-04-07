/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./pages/*.html"],
  theme: {
    screens: {
			sm: "480px",
			md: "768px",
			lg: "976px",
			xl:"1240px",
		},

    extend: {
      colors:{
        colors1:" #F2CEDA",
        colors2:" #D23166",
        colors3:" #150101",
        colors4:" #F8EDF0",
        colors5:" #0A0808",
      }
    },
  },
  plugins: [],
}

