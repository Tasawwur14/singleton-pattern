"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.gameManager = exports.GameManager = void 0;
// export const games: Game[] = []
class GameManager {
    games = [];
    constructor() {
    }
    addMove(gameId, move) {
        console.log(`Adding move ${move} to the ${gameId}`);
        const game = this.games.find(game => game.id === gameId);
        game?.moves.push(move);
    }
    addGame(gameId) {
        const game = {
            id: gameId,
            whitePlayerName: 'Alice',
            blackPlayerName: 'bob',
            moves: []
        };
        this.games.push(game);
    }
}
exports.GameManager = GameManager;
exports.gameManager = new GameManager(); // here we have created single instance 
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
//# sourceMappingURL=store.js.map