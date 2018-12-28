# parcel-plugin-greasemonkey

[Parcel](https://parceljs.org/) plugin for Greasemonkey/Tampermonkey.

## Features

- Add UserScript header to bundled file

## Install

Install with [npm](https://www.npmjs.com/):

    npm install parcel-plugin-greasemonkey

## Usage

1. Create `greasemonkey.header` in project root directory

```
// ==UserScript==
// @name user-script
// @namespace info.efcl
// @match https://*
// @grant none
// ==/UserScript==
```

2. Install `parcel-plugin-greasemonkey`

```
npm install parcel-plugin-greasemonkey --save-dev
# or
yarn install parcel-plugin-greasemonkey -D
```

3. Build `.user.js` as entry file

```
parcel build --no-content-hash ./yourscript.user.js --out-dir ./dist
```

Finally, Generate Greasemonkey script to `./dist/yourscript.user.js`!

```js
// ==UserScript==
// @name user-script
// @namespace info.efcl
// @match https://*
// @grant none
// ==/UserScript==

// your script
```

## Changelog

See [Releases page](https://github.com/azu/parcel-plugin-greasemonkey/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/parcel-plugin-greasemonkey/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- [github/azu](https://github.com/azu)
- [twitter/azu_re](https://twitter.com/azu_re)

## License

MIT © azu
