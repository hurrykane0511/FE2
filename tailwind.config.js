module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "secondary-color": "var(--secondary-color)",
        "nav": "var(--bg-color-nav)",
        "main-screen": "var(--bg-color-main)",
        "main": "var(--text-color-main)",
        "muted": "var(--text-color-muted)",
        "online": "var(--online-color)",
        "sidebar-icon": "var(--sidebar-icon-color)" 
      },
    },
  },
  plugins: [],
}