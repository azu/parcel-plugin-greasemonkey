const Bundler = require('parcel-bundler');
const path = require('path');

// Single entrypoint file location:
const entryFiles = path.join(__dirname, './target.user.js');
// OR: Multiple files with globbing (can also be .js)
// const entryFiles = './src/*.js';
// OR: Multiple files in an array
// const entryFiles = ['./src/index.html', './some/other/directory/scripts.js'];

// Bundler options
const options = {
    outDir: './dist', // The out directory to put the build files in, defaults to dist
    outFile: 'bundle.user.js', // The name of the outputFile
    publicUrl: './', // The url to serve on, defaults to dist
    watch: true, // Whether to watch the files and rebuild them on change, defaults to process.env.NODE_ENV !== 'production'
    cache: true, // Enabled or disables caching, defaults to true
    cacheDir: '.cache', // The directory cache gets put in, defaults to .cache
    contentHash: false, // Disable content hash from being included on the filename
    minify: false, // Minify files, enabled if process.env.NODE_ENV === 'production'
    scopeHoist: false, // Turn on experimental scope hoisting/tree shaking flag, for smaller production bundles
    target: 'browser', // Browser/node/electron, defaults to browser
    https: false,
    logLevel: 3, // 3 = log everything, 2 = log warnings & errors, 1 = log errors
    hmr: true, // Enable or disable HMR while watching
    hmrPort: 0, // The port the HMR socket runs on, defaults to a random free port (0 in node.js resolves to a random free port)
    sourceMaps: false, // Enable or disable sourcemaps, defaults to enabled (minified builds currently always create sourcemaps)
    hmrHostname: '', // A hostname for hot module reload, default to ''
    detailedReport: false // Prints a detailed report of the bundles, assets, filesizes and times, defaults to false, reports are only printed if watch is disabled
};

(async function() {
    // Initializes a bundler using the entrypoint location and options provided
    process.env.PARCEL_GREASEMONKEY = path.join(__dirname, "greasemonkey.header");
    const bundler = new Bundler(entryFiles, options);
    require("../src/parcel-plugin-greasemonkey.js")(bundler);
    // Run the bundler, this returns the main bundle
    // Use the events if you're using watch mode as this promise will only trigger once and not for every rebuild
    const bundle = await bundler.bundle();
})();
