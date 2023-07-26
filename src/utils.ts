
export type TTheme = "dark" | "light" | "Light" | "Dark";
type Themes = {
    [key: string | TTheme]: string
}
const THEMES: Themes = {
    "light": "business",
    "dark": "pastel",
};
const SWAP_THEME: Themes = {
    "business": "pastel",
    "pastel": "business"
};

export function swapTheme() {
    const curr_theme = (localStorage.getItem("theme") ?? document.documentElement.getAttribute("data-theme")) ?? THEMES["dark"];
    const theme = SWAP_THEME[curr_theme];
    console.debug(`swap ${theme} theme`);
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
}

export function setTheme(theme?: TTheme) {
    console.debug(`change ${theme} theme`);
    localStorage.setItem("theme", THEMES[theme ?? "dark"]);
    document.documentElement.setAttribute("data-theme", THEMES[theme ?? "dark"]);
}

export function getTheme(): TTheme {
    return (localStorage.getItem("theme") ?? "dark") as TTheme;
}

