import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import VitePluginBrowserSync from 'vite-plugin-browser-sync';
export default defineConfig({
    plugins: [
        VitePluginBrowserSync({
            mode: 'snippet'
        }),
        laravel({
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
    ],
});
