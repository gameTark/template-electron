import { join } from "path";
import { app, BrowserWindow } from "electron";

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: "Main window",
    webPreferences: {
      preload: join(app.getAppPath(), "dist-electron", "preload.mjs"),
    },
  });
  win.webContents.openDevTools();

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(join(app.getAppPath(), "dist", "index.html"));
  }
});
