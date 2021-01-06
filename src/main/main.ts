import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import url from 'url';
import logger from 'electron-log';

ipcMain.on('ping', e => {
    console.log('ping -> pong');
    return e.sender.send('pong');
});
const getResourceDirectory = () => {
    return process.env.NODE_ENV === 'development'
        ? path.join(process.cwd(), 'dist')
        : process.resourcesPath
    // : path.join(process.resourcesPath, 'app.asar.unpacked');
};
const createWindow = () => {
    const win = new BrowserWindow({
        height: 720,
        width: 1280,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            preload: path.resolve(__dirname, 'preload.js')
        }
    });
    if (process.env.NODE_ENV === 'development') {
        return win.loadURL('http://localhost:3000');
    } else {
        return win.loadFile('./build/index.html');
    }
};

const main = async () => {
    await app.whenReady();
    logger.info('launch');
    await createWindow();

    app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
            app.quit();
        }
    });
    app.on('activate', async () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            await createWindow();
        }
    });
};

main();