const path = require("path");
const fs = require("fs");
// const filePath = "./src/data/data.json";
const updater = require('./updater')

const { app, BrowserWindow, Menu, ipcMain, dialog } = require("electron");
const isDev = require("electron-is-dev");
const template = [];

function createWindow() {
  // Create the browser window.
  const splash = new BrowserWindow({
    icon: path.join(__dirname, "logo512.png"),
    width: 595,
    height: 595,
    titleBarStyle: "hidden",
    transparent:true,
    alwaysOnTop: true,
    autoHideMenuBar: true,
    show: false,
  });

  splash.loadURL(`file://${path.join(__dirname, "splash.html")}`);
  splash.once("ready-to-show", () => {
    splash.center();
    splash.show();
  });
  const win = new BrowserWindow({
    icon: path.join(__dirname, "logo512.png"),
    width: 1280,
    height: 700,
    minWidth: 1250,
    minHeight: 700,
    fullscreen: false,
    resizable: true,
    show: false,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      enableRemoteModule: false,
    },
  });
  // maxWidth,maxheight, show, back,resizable,
  // and load the index.html of the app.
  // win.loadFile("index.html");
  win.loadURL(
    isDev
      ? "http://localhost:3000"
      : `file://${path.join(__dirname, "index.html")}`
  );
  win.on("ready-to-show", () => win.show());
  // Open the DevTools.
  if (isDev) {
    win.webContents.openDevTools();
  }

  win.webContents.on("did-finish-load", (e) => {
    // splash.webContents.openDevTools({mode:'detach'})
    splash.close();
    win.webContents.send("test", "test finish-load");
  });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  // const menu = Menu.buildFromTemplate(template)
  // Menu.setApplicationMenu(menu)

  console.log("ready");

  // setTimeout(() => {

  // }, 5000);
  createWindow();

  // Check for update after x seconde

  setTimeout(()=>{
    console.log('====================================');
    console.log("Check");
    console.log('====================================');
    updater.check()
  } , 2000);
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

ipcMain.on("do-thing", (e, arg) => {
  // dialog.showMessageBox({message:"salut"})
  // app.quit();
  console.log(arg);
});

ipcMain.on("quit", (e, arg) => {
  // dialog.showMessageBox({message:"salut"})
  
  let data = JSON.stringify(arg);
  const filePath = `${app.getPath("appData")}/data/data.json`;
  fs.writeFile(filePath, data, (err) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log("file write success", `${arg}`);
  });

  console.log(arg);
  // app.quit();
});
