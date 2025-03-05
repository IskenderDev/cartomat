import { app, BrowserWindow, dialog, ipcMain } from "electron";
import { autoUpdater } from "electron-updater";
import path from "node:path";
import dotenv from "dotenv";

dotenv.config();

let win: BrowserWindow | null;
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    width: 1080,
    height: 1920,
    alwaysOnTop: false,
    kiosk: true,
    fullscreen: true,
    frame: false,
    icon: path.join(__dirname, "../public/electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      nodeIntegration: true,
      contextIsolation: true,
      webSecurity: true,
    },
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(__dirname, "../dist/index.html"));
  }

  win.webContents.openDevTools();

  setupAutoUpdater()
}
function setupAutoUpdater(): void {
  autoUpdater.on('checking-for-update', () => {
    console.log('Проверка наличия обновлений...')
  })

  autoUpdater.on('update-available', () => {
    dialog.showMessageBox({
      type: 'info',
      title: 'Обновление доступно',
      message: 'Доступна новая версия. Загрузка...'
    })
  })

  autoUpdater.on('update-not-available', () => {
    console.log('Обновлений нет.')
  })

  autoUpdater.on('update-downloaded', () => {
    dialog
      .showMessageBox({
        type: 'info',
        title: 'Обновление загружено',
        message: 'Приложение обновлено. Перезапустить сейчас?',
        buttons: ['Да', 'Позже']
      })
      .then((result) => {
        if (result.response === 0) {
          autoUpdater.quitAndInstall(true, true);  
        }
      })
  });
  autoUpdater.on('error', (err) => {
    console.error('Ошибка автообновления:', err)
  })

  autoUpdater.checkForUpdatesAndNotify()
}

app.whenReady().then(createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

// Обработчик запроса на установку обновления
ipcMain.on("install-update", () => {
  autoUpdater.quitAndInstall();
});
