import { EventEmitter } from 'node:events';
export class Player extends EventEmitter {
    guildId;
    track = null;
    volume = 100;
    paused = false;
    filters = {};
    state;
    constructor(guildId) {
        super();
        this.guildId = guildId;
        this.state = {
            time: Date.now(),
            position: 0,
            connected: false,
            ping: -1
        };
    }
    play(track) {
        this.track = track;
        this.paused = false;
        this.state.position = 0;
        this.emit('start', track);
    }
    pause() {
        this.paused = true;
        this.emit('pause');
    }
    resume() {
        this.paused = false;
        this.emit('resume');
    }
    stop() {
        this.track = null;
        this.paused = false;
        this.state.position = 0;
        this.emit('stop');
    }
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1000, volume));
        this.filters.volume = this.volume / 100;
        this.emit('volumeChange', this.volume);
    }
    setFilters(filters) {
        this.filters = { ...this.filters, ...filters };
        this.emit('filtersChange', this.filters);
    }
}
