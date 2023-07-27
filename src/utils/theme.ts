
export type TTheme = "night" | "autumn" | string;

const DEFAULT_THEME: TTheme = "night";
const THEME_KEY: string = "theme" as const;
const THEME_ATTR: string = "data-theme" as const;
const THEME: { [key: TTheme]: TTheme } = {
    "night": "autumn",
    "autumn": "night"
};

export function setTheme(theme: TTheme = DEFAULT_THEME) {
    document.documentElement.setAttribute(THEME_ATTR, theme);
    localStorage.setItem(THEME_KEY, theme);
}

export function getTheme(): TTheme {
    return (localStorage.getItem(THEME_KEY)
        ?? document.documentElement.getAttribute(THEME_ATTR))
        ?? DEFAULT_THEME;
}

export function swapTheme(theme?: TTheme): TTheme {
    const theme_select = THEME[theme ?? getTheme()];
    setTheme(theme_select);
    return theme_select;
}

