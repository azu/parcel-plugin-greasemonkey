const fs = require('fs');
const path = require('path');
const GreasemonkeyHeaderFilePath = process.env.PARCEL_GREASEMONKEY
                                   ? path.resolve(process.cwd(), process.env.PARCEL_GREASEMONKEY)
                                   : path.resolve(process.cwd(), "greasemonkey.header");
const updateInsertHeader = (filePath, header) => {
    if (!fs.existsSync(filePath)) {
        return;
    }
    const content = fs.readFileSync(filePath, "utf-8");
    if (content.startsWith(content)) {
        return;
    }
    const updatedContent = `${header}${content}`;
    fs.writeFileSync(filePath, updatedContent, "utf-8");
};

module.exports = function(bundler) {
    if (!GreasemonkeyHeaderFilePath || !fs.existsSync(GreasemonkeyHeaderFilePath)) {
        throw new Error(`Not found greasemonkey.header in current direction: ${process.cwd()}`);
    }
    const header = fs.readFileSync(GreasemonkeyHeaderFilePath, "utf-8");
    const userScripts = new Set();
    bundler.on('bundled', (bundle) => {
        if (/\.user\.js$/.test(bundle.name)) {
            if (!userScripts.has(bundle.name)) {
                userScripts.add(bundle.name);
            }
        }
    });
    bundler.on('buildEnd', () => {
        userScripts.forEach(userScriptsName => {
            updateInsertHeader(userScriptsName, header);
        });
    });
};
