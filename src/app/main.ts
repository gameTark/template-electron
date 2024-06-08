import { join } from "path";
import { app, BrowserWindow, ipcMain } from "electron";
import { buildSchema, graphql } from "graphql";
import rowSchema from "schemas/schema.graphql";

const schema = buildSchema(rowSchema);
const rootValue = {
  books() {
    return [
      {
        id: "asdfasdf",
        title: "sadfasdfxzcvx",
        author: {
          id: "sadfasdfasd",
          name: "asfasffsdasdaf",
          age: "asfdslkjsfdklsdafj",
        },
      },
    ];
  },
  rollThreeDice() {
    return [1, 2, 3];
  },
  hello() {
    return "Hello world!";
  },
};

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: "Main window",
    // fullscreen: true,
    // frame: false,
    width: 1000,
    height: 500,
    transparent: true,
    webPreferences: {
      preload: join(app.getAppPath(), "dist-electron", "preload.mjs"),
    },
  });

  win.webContents.openDevTools();

  // const resolvers  = []
  ipcMain.handle("gql", async (_e: any, query: string) => {
    return await graphql({
      schema,
      source: query,
      rootValue,
    });
  });

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(join(app.getAppPath(), "dist", "index.html"));
  }
});
