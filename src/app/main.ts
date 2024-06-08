import { join } from "path";
import { app, BrowserWindow, ipcMain } from "electron";
import { graphql, buildSchema } from 'graphql'
 
// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`)
 
// The rootValue provides a resolver function for each API endpoint
var rootValue = {
  hello() {
    return "Hello world!"
  }
}

app.whenReady().then(() => {
  const win = new BrowserWindow({
    title: "Main window",
    webPreferences: {
      preload: join(app.getAppPath(), "dist-electron", "preload.mjs"),
    },
  });

  win.webContents.openDevTools();

  // const resolvers  = []
  ipcMain.handle('gql', async (_e: any, query: string) => {
    return await graphql({
      schema,
      source: query,
      rootValue
    })
  })

  if (process.env.VITE_DEV_SERVER_URL) {
    win.loadURL(process.env.VITE_DEV_SERVER_URL);
  } else {
    win.loadFile(join(app.getAppPath(), "dist", "index.html"));
  }
});
