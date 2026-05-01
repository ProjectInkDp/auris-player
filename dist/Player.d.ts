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
export declare class Player extends EventEmitter {
    guildId: string;
    track: Track | null;
    state: PlayerState;
    position: number;
    volume: number;
    constructor(guildId: string);
    play(track: Track): void;
    pause(): void;
    resume(): void;
    stop(): void;
    setVolume(volume: number): void;
}
