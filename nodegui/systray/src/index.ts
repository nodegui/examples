import {
  QKeySequence,
  QApplication,
  QMainWindow,
  QMenu,
  QIcon,
  QSystemTrayIcon,
  QAction
} from "@nodegui/nodegui";
import path from "path";
import { Dock } from "@nodegui/nodegui-os-utils";
const icon = require("../assets/nodegui_white.png");

const win = new QMainWindow();
const trayIcon = new QIcon(path.resolve(__dirname, icon));
const tray = new QSystemTrayIcon();
tray.setIcon(trayIcon);
tray.show();
tray.setToolTip("hello");

const menu = new QMenu();
tray.setContextMenu(menu);

// -------------------
// Quit Action
// -------------------
const quitAction = new QAction();
quitAction.setText("Quit");
quitAction.setIcon(trayIcon);
quitAction.addEventListener("triggered", () => {
  const app = QApplication.instance();
  app.exit(0);
});

// -------------------
// Action with Submenu
// -------------------
const actionWithSubmenu = new QAction();
const subMenu = new QMenu();
const hideDockAction = new QAction();
hideDockAction.setText("hide");
hideDockAction.addEventListener("triggered", () => {
  Dock.hide();
});
//-----
const showDockAction = new QAction();
showDockAction.setText("show");
showDockAction.addEventListener("triggered", () => {
  Dock.show();
});
//-----
subMenu.addAction(hideDockAction);
subMenu.addAction(showDockAction);
actionWithSubmenu.setMenu(subMenu);
actionWithSubmenu.setText("Mac Dock");

// ----------------
// Dock Hide/Show
// ----------------
const hideAction = new QAction();
hideAction.setText("hide window");
hideAction.setShortcut(new QKeySequence("Alt+H"));
hideAction.addEventListener("triggered", () => {
  win.hide();
});
//-----
const showAction = new QAction();
showAction.setText("show window");
showAction.setShortcut(new QKeySequence("Alt+S"));
showAction.addEventListener("triggered", () => {
  win.show();
});

// ----------------------
// Add everything to menu
// ----------------------
menu.addAction(hideAction);
menu.addAction(showAction);
menu.addAction(actionWithSubmenu);
menu.addAction(quitAction);

win.setWindowTitle("NodeGUI Demo");
win.resize(400, 700);
win.show();

const qApp = QApplication.instance();
qApp.setQuitOnLastWindowClosed(false); // required so that app doesnt close if we close all windows.

(global as any).win = win; // To prevent win from being garbage collected.
(global as any).systemTray = tray; // To prevent system tray from being garbage collected.
