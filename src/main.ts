import * as tauri_event from "@tauri-apps/api/event";
import { setTheme, swapTheme, TTheme } from "./utils";


function main(): void {
    // setTheme((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ? "dark" : "light")
    tauri_event.once<TTheme>(tauri_event.TauriEvent.WINDOW_THEME_CHANGED, function(ev) {
        console.log(`on ${tauri_event.TauriEvent.WINDOW_THEME_CHANGED} event: ${ev.payload}`);
        setTheme(ev.payload);
    });
    document.getElementById("theme_toggle_button")?.addEventListener("change", (ev) => {
        ev.preventDefault();
        swapTheme();
    });
}

window.addEventListener("DOMContentLoaded", main);

