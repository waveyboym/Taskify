import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'node:path';
import fs from 'node:fs';
import { taskType } from '../src/types';

// The built directory structure
//
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js
// │
process.env.DIST = path.join(__dirname, '../dist')
process.env.VITE_PUBLIC = app.isPackaged ? process.env.DIST : path.join(process.env.DIST, '../public')
const filePath = path.join(process.env.DIST, '../src/content/data.json')


let win: BrowserWindow | null
// 🚧 Use ['ENV_NAME'] avoid vite:define plugin - Vite@2.x
const VITE_DEV_SERVER_URL = process.env['VITE_DEV_SERVER_URL']

function createWindow() {
  win = new BrowserWindow({
    icon: path.join(process.env.VITE_PUBLIC, 'electron-vite.svg'),
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
    width: 961,
    height: 600,
    minHeight: 600,
    minWidth: 961,
    frame: false,
  })

  // Test active push message to Renderer-process.
  win.webContents.on('did-finish-load', () => {
    win?.webContents.send('main-process-message', (new Date).toLocaleString())
  })

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL)
  } else {
    // win.loadFile('dist/index.html')
    win.loadFile(path.join(process.env.DIST, 'index.html'))
  }
}

function minimizeWindow(){
  win?.minimize();
}

function maximizeWindow(){
  win?.maximize();
}

function restoreWindow(){
  win?.unmaximize();
}

function closeWindow(){
  win?.close();
}

function isWindowMaximized(){
  return win?.isMaximized();
}

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
    win = null
  }
})

app.on('activate', () => {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})

function saveData(_event: Electron.IpcMainEvent, data: taskType[]) {
  const text = JSON.stringify(data);
  fs.writeFile(filePath, text, err => {
    if(err){
      console.error(err);
    }
  })
}

function readData(){
  const res: string = fs.readFileSync(filePath, 'utf8');
  return res;
}

app.whenReady().then(() =>{
  ipcMain.on('minimize-window', minimizeWindow);
  ipcMain.on('maximize-window', maximizeWindow);
  ipcMain.on('restore-window', restoreWindow);
  ipcMain.on('close-window', closeWindow);
  ipcMain.handle('is-window-maximized', isWindowMaximized);
  ipcMain.on('save-data', saveData);
  ipcMain.handle('read-data', readData);
  createWindow();
})
