// import {contextBridge, ipcRenderer} from 'electron'

const { contextBridge, ipcRenderer, dialog } = require("electron");

contextBridge.exposeInMainWorld("electronAPI", {
  printComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("printComponent", url);
    callback(response);
  },
  previewComponent: async (url, callback) => {
    let response = await ipcRenderer.invoke("previewComponent", url);
    callback(response);
  },
  doThing: (arg) => {
    console.log("Main: test", arg);
    ipcRenderer.send("do-thing", { d: "data things" });
  },
});

// 

contextBridge.exposeInMainWorld("api", {
  quit: (state) => {
    console.log(state);
    ipcRenderer.send("quit", state);
  },
});
