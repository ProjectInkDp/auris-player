import { Player } from './Player.js';
export declare class Manager {
    players: Map<string, Player>;
    createPlayer(guildId: string): Player;
    getPlayer(guildId: string): Player | undefined;
    deletePlayer(guildId: string): boolean;
}
