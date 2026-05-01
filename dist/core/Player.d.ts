import { EventEmitter } from 'node:events';
import { Track, PlayerState } from '../typings/index.js';
import { Filters } from '../typings/filters.js';
export declare class Player extends EventEmitter {
    guildId: string;
    track: Track | null;
    volume: number;
    paused: boolean;
    filters: Filters;
    state: PlayerState;
    constructor(guildId: string);
    play(track: Track): void;
    pause(): void;
    resume(): void;
    stop(): void;
    setVolume(volume: number): void;
    setFilters(filters: Filters): void;
}
