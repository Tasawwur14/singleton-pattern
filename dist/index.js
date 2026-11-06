"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const logger_1 = require("./logger");
const store_1 = require("./store");
// const gameManager = new GameManager() ; here we have created different instance/object for this file so the gameMangaer.addgame is doing the work here 
(0, logger_1.startLogger)();
setInterval(() => {
    store_1.gameManager.addGame(Math.random().toString());
}, 5000);
//# sourceMappingURL=index.js.map