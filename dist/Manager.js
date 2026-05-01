import { Player } from './Player.js';
export class AurisManager {
    players = new Map();
    createPlayer(guildId) {
        let player = this.players.get(guildId);
        if (!player) {
            player = new Player(guildId);
            this.players.set(guildId, player);
        }
        return player;
    }
    getPlayer(guildId) {
        return this.players.get(guildId);
    }
    destroyPlayer(guildId) {
        const player = this.players.get(guildId);
        if (player) {
            player.stop();
            this.players.delete(guildId);
        }
    }
}
