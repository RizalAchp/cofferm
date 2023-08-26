import { defineConfig, UserConfig } from 'vite'
import solidPlugin from "vite-plugin-solid";

export default defineConfig(async () => {
    const platform = process.env.TAURI_PLATFORM;
    const internal_ip = (platform === "android" || platform === "ios") ? (await import('internal-ip')) : undefined;
    const host = internal_ip ? internal_ip.internalIpV4() : "localhost";
    return {
        plugins: [solidPlugin()],
        // prevent vite from obscuring rust errors
        clearScreen: false,
        server: {
            host: '0.0.0.0', // listen on all addresses
            port: 42069,
            // Tauri expects a fixed port, fail if that port is not available
            strictPort: true,
            hmr: {
                protocol: 'ws',
                host,
                port: 5183
            },
        },
        // to make use of `TAURI_DEBUG` and other env variables
        // https://tauri.studio/v1/api/config#buildconfig.beforedevcommand
        envPrefix: ["VITE_", "TAURI_"],
        build: {
            // don't minify for debug builds
            minify: (process.env.TAURI_DEBUG) ? false : "esbuild",
            // produce sourcemaps for debug builds
            sourcemap: !!process.env.TAURI_DEBUG,
        },
    } as UserConfig;
})
