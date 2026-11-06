import { gameManager} from "./store"

// const gameManager = new GameManager(); also this gameMangar instance is different so they are not sharing the same instance that's why it nothing prints in the cosole
export function startLogger(){
    setInterval(()=>{
        console.log(gameManager.games)
    },5000)
}