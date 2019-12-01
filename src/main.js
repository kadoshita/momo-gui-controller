const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const { RUN_COMMAND, STOP_PROCESS } = require('./defines');
let mainWindow = null;
let momo_process = null;
ipcMain.on(RUN_COMMAND, (evt, data) => {
    let command = data.executeCommandText.split(' ');
    momo_process = spawn(command.shift(), command);
    momo_process.stdout.on('data', data => {
        console.log(data.toString());
    });
    momo_process.stderr.on('data', data => {
        console.error(data.toString());
    })
    momo_process.on('close', code => {
        console.log(`exited code: ${code}`);
    });
});
ipcMain.on(STOP_PROCESS, (evt, data) => {
    if (momo_process !== null) {
        momo_process.kill('SIGINT');
        momo_process = null;
    }
});
const createWindow = () => {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    });

    mainWindow.loadFile(path.join(__dirname, './static/index.html'));
    mainWindow.on('closed', () => {
        mainWindow = null;
        if (momo_process !== null) {
            momo_process.kill('SIGINT');
            momo_process = null;
        }
    });
};

app.on('ready', createWindow);
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});
app.on('activate', () => {
    if (mainWindow === null) {
        createWindow();
    }
});