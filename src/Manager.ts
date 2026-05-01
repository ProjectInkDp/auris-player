import { Player } from './Player.js';

export class AurisManager {
  public readonly players: Map<string, Player> = new Map();

  public createPlayer(guildId: string): Player {
    let player = this.players.get(guildId);
    if (!player) {
      player = new Player(guildId);
      this.players.set(guildId, player);
    }
    return player;
  }

  public getPlayer(guildId: string): Player | undefined {
    return this.players.get(guildId);
  }

  public destroyPlayer(guildId: string): void {
    const player = this.players.get(guildId);
    if (player) {
      player.stop();
      this.players.delete(guildId);
    }
  }
}
