import { app, BrowserWindow, ipcMain } from "electron";
import { autoUpdater } from "electron-updater"; 
import path from "node:path";
import { machineIdSync } from "node-machine-id";
import dotenv from "dotenv";
import log from "electron-log";

// The built directory structure
// ├─┬─┬ dist
// │ │ └── index.html
// │ │
// │ ├─┬ dist-electron
// │ │ ├── main.js
// │ │ └── preload.js

dotenv.config();
process.env.DIST = path.join(__dirname, "../dist");
process.env.VITE_PUBLIC = app.isPackaged
  ? process.env.DIST
  : path.join(process.env.DIST, "../public");

let win: BrowserWindow | null;
const VITE_DEV_SERVER_URL = process.env["VITE_DEV_SERVER_URL"];

function createWindow() {
  if (!process.env.MBANK_SERVICE_URL || !process.env.CARD_MACHINE_URL) {
    win?.webContents.send(
      "error-message",
      "Не установлены необходимые переменные окружения"
    );
  }

  win = new BrowserWindow({
    width: 1080,
    height: 1920,
    alwaysOnTop: true,
    kiosk: true,
    fullscreen: true,
    frame: false,
    icon: path.join(process.env.VITE_PUBLIC, "electron-vite.svg"),
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      devTools: !!VITE_DEV_SERVER_URL,
      nodeIntegration: true,
      contextIsolation: true,
      webSecurity: true,
      allowRunningInsecureContent: false,
      javascript: true,
      nodeIntegrationInSubFrames: true,
    },
  });

  if (VITE_DEV_SERVER_URL) {
    win.loadURL(VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(path.join(process.env.DIST, "index.html"));
  }

  win.webContents.openDevTools();
  autoUpdater.checkForUpdatesAndNotify();
}
autoUpdater.logger = log;
log.transports.file.level = "info";
autoUpdater.on("checking-for-update", () => {
  log.info("Проверка обновлений...");
});

autoUpdater.on("update-available", (info) => {
  log.info("Доступно обновление:", info.version);
});

autoUpdater.on("update-not-available", () => {
  log.info("Обновлений нет.");
});

autoUpdater.on("error", (err) => {
  log.error("Ошибка обновления:", err);
});

autoUpdater.on("update-downloaded", () => {
  log.info("Обновление загружено, устанавливаем...");
  autoUpdater.quitAndInstall();
});
app.whenReady().then(createWindow);
// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
    win = null;
  }
});

// This identifier is unique to the machine and is used for device initialization.
const machineId = machineIdSync().slice(0, 50);

ipcMain.handle("local-machine-id", () => machineId);

app.whenReady().then(createWindow);
