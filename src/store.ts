

interface Game {
    id : string;
    whitePlayerName: string;
    blackPlayerName : string;
    moves : string[];
}

// export const games: Game[] = []



export class GameManager {
    games: Game[] = []; 
    private static instance : GameManager ; 
    private constructor(){

    }
    // static clear(){
    //     add logic to clear everything 
    // }

    static getInstance(){
        // create a singel instance of GamaManager and return it 
        if(GameManager.instance){
            return GameManager.instance
        }
        GameManager.instance = new GameManager();
        return GameManager.instance 
    }

    addMove( gameId:string , move:string){
        console.log(`Adding move ${move} to the ${gameId}`)
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move)
    }
    addGame(gameId : string ){
        const game = {
            id : gameId,
            whitePlayerName : 'Alice',
            blackPlayerName : 'bob',
            moves : []

        }
        this.games.push(game);
    }
}

// export const gameManager = new GameManager(); // here we have created single instance , but still there is a issue is that if a new developer comes and by mistake he can create a new instance it other file like const gameManager = new GameManager (); and nothing complain so we have to implement thig that if a new develop does that it get red line error that call singleton
// so just make the constructor private , so no one can call new GameManager () ; but this will give the error for the instance of this file also so we have to create a instance inside the class 

// if we craete a function that static, it can be called directly on the class (eg. GameManager.clear), so we can expose a function like GameManger.getInstance()

export const gameManger = GameManager.getInstance() ;


// we will create private static instace of the same class 




















// class BankAccount {
//     constructor(owner, balance){
//         this.owner = owner;
//         this.balance = balance
//     }
//     deposite(amount){
//         this.balance += amount ;
//     } 
//     withdraw(amount){
//         this.balance -= amount ;
//     }
//     getbalance(){
//         return this.balance
//     }

// }

// const account = new BankAccount("Tasawwur", 1000);

// account.deposite(5000)

// account.withdraw(2000)

// console.log(account.getbalance());