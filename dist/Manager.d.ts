import { Player } from './Player.js';
export declare class AurisManager {
    readonly players: Map<string, Player>;
    createPlayer(guildId: string): Player;
    getPlayer(guildId: string): Player | undefined;
    destroyPlayer(guildId: string): void;
}
