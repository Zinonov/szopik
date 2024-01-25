const mix = require('laravel-mix');

mix.js('resources/js/app.js', 'public/js')
    .sass('resources/sass/app.scss', 'public/css')
    .version()
    .browserSync({
        proxy: process.env.APP_URL,
        port: 5175,
        ghostMode: false,
    });
