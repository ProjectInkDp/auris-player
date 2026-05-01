import { EventEmitter } from 'node:events';
import { Track, PlayerState } from '../typings/index.js';

export class Player extends EventEmitter {
  public guildId: string;
  public track: Track | null = null;
  public volume: number = 100;
  public paused: boolean = false;
  public state: PlayerState;

  constructor(guildId: string) {
    super();
    this.guildId = guildId;
    this.state = {
      time: Date.now(),
      position: 0,
      connected: false,
      ping: -1
    };
  }

  public play(track: Track): void {
    this.track = track;
    this.paused = false;
    this.state.position = 0;
    this.emit('start', track);
  }

  public pause(): void {
    this.paused = true;
    this.emit('pause');
  }

  public resume(): void {
    this.paused = false;
    this.emit('resume');
  }

  public stop(): void {
    this.track = null;
    this.paused = false;
    this.state.position = 0;
    this.emit('stop');
  }

  public setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1000, volume));
    this.emit('volumeChange', this.volume);
  }
}
