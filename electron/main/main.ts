import { app, BrowserWindow, ipcMain } from "electron";
import { autoUpdater } from "electron-updater"; 
import path from "node:path";
import dotenv from "dotenv";
import log from "electron-log";

dotenv.config();

let win: BrowserWindow | null;
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  win = new BrowserWindow({
    width: 1080,
    height: 1920,
    alwaysOnTop: true,
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
  
  autoUpdater.checkForUpdatesAndNotify();
}


// Логирование обновлений
autoUpdater.logger = log;
log.transports.file.level = "info";

autoUpdater.on("checking-for-update", () => {
  log.info("Проверка обновлений...");
  win?.webContents.send("update-status", { message: "Проверка обновлений..." });
});

autoUpdater.on("update-available", (info) => {
  log.info(`Доступно обновление: ${info.version}`);
  win?.webContents.send("update-status", { message: `Доступно обновление: ${info.version}` });
});

autoUpdater.on("update-not-available", () => {
  log.info("Обновлений нет.");
  win?.webContents.send("update-status", { message: "Обновлений нет." });
});

autoUpdater.on("error", (err) => {
  log.error(`Ошибка обновления: ${err}`);
  win?.webContents.send("update-status", { message: `Ошибка обновления: ${err.message}` });
});

autoUpdater.on("update-downloaded", () => {
  log.info("Обновление загружено, устанавливаем...");
  win?.webContents.send("update-status", { message: "Обновление загружено, устанавливаем..." });
  
  // Показываем модальное окно с кнопкой "Перезагрузить"
  win?.webContents.send("update-downloaded");
});

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
