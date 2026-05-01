<div align="center">
  <h1>AurisPlayer</h1>
  <p>A high-performance, lightweight audio engine for Discord bots, built with TypeScript.</p>

  ![version](https://img.shields.io/badge/version-1.0.5-blueviolet?style=flat-square)
  ![license](https://img.shields.io/badge/license-Restricted-red?style=flat-square)
  ![npm](https://img.shields.io/npm/v/@projectinkdp/auris-player?style=flat-square)
</div>

---

## 🚀 Overview

**AurisPlayer** is the core audio engine behind **AurisLink**. It provides a robust, event-driven architecture for managing audio players, tracks, and filters in a Node.js environment. Designed for efficiency and compatibility with the Lavalink v4 protocol.

## ✨ Features

- **Lavalink v4 Compatible:** Native support for Lavalink v4 track and player structures.
- **Event-Driven:** Easily hook into player events like `start`, `pause`, `resume`, and `stop`.
- **Audio Filters:** Built-in support for Equalizer, Timescale, and Tremolo.
- **Lightweight:** Minimal dependencies and low memory footprint.
- **TypeScript Native:** Full type safety and organized internal structure.

## 📦 Installation

```sh
npm install @projectinkdp/auris-player
```

## 🛠️ Usage

```typescript
import { Manager } from '@projectinkdp/auris-player';

const manager = new Manager();
const player = manager.createPlayer('guild_id');

player.on('start', (track) => {
  console.log(`Now playing: ${track.info.title}`);
});

// Play a track
player.play(trackData);
```

## 🛡️ License

This project is proprietary software owned by **ProjectInkDp**. 
- **Commercial use is strictly prohibited.**
- **Modification and redistribution are not allowed without prior authorization.**
- **External contributions are not accepted at this time.**

---

<div align="center">
  Maintained by <b>ProjectInkDp</b>
</div>
