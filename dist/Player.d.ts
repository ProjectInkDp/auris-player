import { EventEmitter } from 'node:events';
export interface TrackInfo {
    identifier: string;
    isSeekable: boolean;
    author: string;
    length: number;
    isStream: boolean;
    position: number;
    title: string;
    uri: string | null;
    artworkUrl: string | null;
    isrc: string | null;
    sourceName: string;
}
export interface Track {
    encoded: string;
    info: TrackInfo;
    pluginInfo: Record<string, unknown>;
}
export interface PlayerState {
    time: number;
    position: number;
    connected: boolean;
    ping: number;
}
export declare class Player extends EventEmitter {
    guildId: string;
    track: Track | null;
    volume: number;
    paused: boolean;
    state: PlayerState;
    constructor(guildId: string);
    play(track: Track): void;
    pause(): void;
    resume(): void;
    stop(): void;
    setVolume(volume: number): void;
}
