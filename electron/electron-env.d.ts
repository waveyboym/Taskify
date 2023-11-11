/// <reference types="vite-plugin-electron/electron-env" />

declare namespace NodeJS {
  interface ProcessEnv {
    /**
     * The built directory structure
     *
     * ```tree
     * ├─┬─┬ dist
     * │ │ └── index.html
     * │ │
     * │ ├─┬ dist-electron
     * │ │ ├── main.js
     * │ │ └── preload.js
     * │
     * ```
     */
    DIST: string
    /** /dist/ or /public/ */
    VITE_PUBLIC: string
  }
}

export interface GateWayAPI {
  osType: NodeJS.Platform,
  minimizeWindow: () => void,
  maximizeWindow: () => void,
  restoreWindow: () => void,
  closeWindow: () => void,
  isWindowMaximized: () => Promise<any>,
  saveData: (data: string) => void,
  readData: () => Promise<any>
}

// Used in Renderer process, expose in `preload.ts`
declare global {
  interface Window {
    ipcRenderer: import('electron').IpcRenderer,
    gateway: GateWayAPI,
  }
}
