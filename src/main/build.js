const packager = require('electron-packager');
const packageInfo = require('../../package.json');

const build = async () => {
    await packager({
        name: packageInfo.name,
        icon: './build/favicon.ico',
        overwrite: true,
        out: 'release',
        platform: process.platform,
        prune: true,
        arch: 'x64',
        dir: './',
        asar: true,
        ignore: [/.*\.ts/, /.*\@types.*/]
    });
};

build();