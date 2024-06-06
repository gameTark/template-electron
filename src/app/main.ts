import { app, BrowserWindow } from "electron";

import server from "../resources/lowdb/server";

app.whenReady().then(() => {
  console.log(
    server.initialized.then(() => {
      console.log(server.db);
    }),
  );
  const win = new BrowserWindow({
    title: "Main window",
    webPreferences: {
      preload: "./preload.mjs",
    },
  });
  win.webContents.openDevTools();

  // You can use `process.env.VITE_DEV_SERVER_URL` when the vite command is called `serve`
  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    // Load your file
    win.loadFile("dist/index.html");
  }
});
