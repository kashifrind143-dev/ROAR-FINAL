/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}","./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        neonBlue: "#1fb6ff",
        neonCyan: "#22d3ee",
        neonPurple: "#a78bfa",
        roarBg:"#070809"
      },
      boxShadow: {
        neonGlow: "0 0 30px rgba(34,211,238,0.45)",
      },
      keyframes: {
        spinSlow: { to: { transform: "rotate(360deg)" } },
        pulseOrbit: { "0%": { opacity: 0.7 }, "50%": { opacity: 0.35 }, "100%": { opacity: 0.7 } },
        float: { "0%": { transform: "translateY(0px)" }, "50%": { transform: "translateY(-6px)" }, "100%": { transform: "translateY(0px)" } }
      },
      animation: {
        spinSlow: "spinSlow 36s linear infinite",
        pulseOrbit: "pulseOrbit 4s ease-in-out infinite",
        float: "float 6s ease-in-out infinite"
      }
    }
  },
  plugins: [],
}
