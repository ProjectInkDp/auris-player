import { EventEmitter } from 'node:events';
export class Player extends EventEmitter {
    guildId;
    track = null;
    state = 'IDLE';
    position = 0;
    volume = 100;
    constructor(guildId) {
        super();
        this.guildId = guildId;
    }
    play(track) {
        this.track = track;
        this.state = 'PLAYING';
        this.position = 0;
        this.emit('start', track);
    }
    pause() {
        if (this.state === 'PLAYING') {
            this.state = 'PAUSED';
            this.emit('pause');
        }
    }
    resume() {
        if (this.state === 'PAUSED') {
            this.state = 'PLAYING';
            this.emit('resume');
        }
    }
    stop() {
        this.state = 'STOPPED';
        this.track = null;
        this.position = 0;
        this.emit('stop');
    }
    setVolume(volume) {
        this.volume = Math.max(0, Math.min(1000, volume));
        this.emit('volumeChange', this.volume);
    }
}
