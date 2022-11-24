/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    daisyui: {
        themes: [
            {
                docotortheme: {
                    primary: "#10272e",
                    secondary: "#212529",
                    accent: "#3A4256",
                    neutral: "#15c694",
                    "base-100": "#FFFFFF",
                },
            },
        ],
    },
    theme: {
        extend: {},
    },
    plugins: [require("daisyui")],
};
