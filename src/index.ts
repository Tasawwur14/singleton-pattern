import { startLogger } from "./logger";
import { gameManager } from "./store";

// const gameManager = new GameManager() ; here we have created different instance/object for this file so the gameMangaer.addgame is doing the work here 

startLogger();

setInterval(()=>{
    gameManager.addGame(Math.random().toString()); 
},5000)