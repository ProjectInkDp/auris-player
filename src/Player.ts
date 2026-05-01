import { EventEmitter } from 'node:events';

export interface Track {
  title: string;
  author: string;
  identifier: string;
  uri: string;
  length: number;
  isStream: boolean;
}

export type PlayerState = 'IDLE' | 'PLAYING' | 'PAUSED' | 'STOPPED';

export class Player extends EventEmitter {
  public guildId: string;
  public track: Track | null = null;
  public state: PlayerState = 'IDLE';
  public position: number = 0;
  public volume: number = 100;

  constructor(guildId: string) {
    super();
    this.guildId = guildId;
  }

  public play(track: Track): void {
    this.track = track;
    this.state = 'PLAYING';
    this.position = 0;
    this.emit('start', track);
  }

  public pause(): void {
    if (this.state === 'PLAYING') {
      this.state = 'PAUSED';
      this.emit('pause');
    }
  }

  public resume(): void {
    if (this.state === 'PAUSED') {
      this.state = 'PLAYING';
      this.emit('resume');
    }
  }

  public stop(): void {
    this.state = 'STOPPED';
    this.track = null;
    this.position = 0;
    this.emit('stop');
  }

  public setVolume(volume: number): void {
    this.volume = Math.max(0, Math.min(1000, volume));
    this.emit('volumeChange', this.volume);
  }
}
