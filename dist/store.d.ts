interface Game {
    id: string;
    whitePlayerName: string;
    blackPlayerName: string;
    moves: string[];
}
export declare class GameManager {
    games: Game[];
    constructor();
    addMove(gameId: string, move: string): void;
    addGame(gameId: string): void;
}
export declare const gameManager: GameManager;
export {};
//# sourceMappingURL=store.d.ts.map