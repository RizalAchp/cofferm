/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./src/**/*.{ts,html}",
        "./*.html"
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Nunito', 'sans'],
            },
        },
    },
    plugins: [require("daisyui")],

    daisyui: {
        themes: ["pastel", "business"],
        darkTheme: "business"
    },
}
