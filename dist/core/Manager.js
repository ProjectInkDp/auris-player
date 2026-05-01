import { Player } from './Player.js';
export class Manager {
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
    deletePlayer(guildId) {
        return this.players.delete(guildId);
    }
}
