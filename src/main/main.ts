import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';

ipcMain.on('ping', e => {
    console.log('ping -> pong');
    return e.sender.send('pong');
});
const getResourceDirectory = () => {
    return process.env.NODE_ENV === 'development'
        ? path.join(process.cwd(), 'dist')
        : path.join(process.resourcesPath, 'app.asar.unpacked', 'dist');
};
const createWindow = () => {
    const win = new BrowserWindow({
        height: 720,
        width: 1280,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: false,
            preload: process.env.NODE_ENV === 'development' ? path.resolve(getResourceDirectory(), 'preload.js') : ''
        }
    });
    return win.loadURL('http://localhost:3000');
};

const main = async () => {
    await app.whenReady();
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