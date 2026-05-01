<div align="center">
  <img src="https://raw.githubusercontent.com/ProjectInkDp/aurislink/main/images/logo.png" alt="AurisPlayer" width="120"/>
  <h1>AurisPlayer</h1>
  <p>The high-performance, lightweight audio engine powering the <b>ProjectInkDp</b> ecosystem.</p>

  [![npm version](https://img.shields.io/npm/v/@projectinkdp/auris-player?style=flat-square&color=a78bfa)](https://www.npmjs.com/package/@projectinkdp/auris-player)
  [![license](https://img.shields.io/badge/license-Restrictive-red?style=flat-square)](LICENSE)
  [![platform](https://img.shields.io/badge/platform-Node.js-339933?style=flat-square&logo=node.js&logoColor=white)](https://nodejs.org)
</div>

---

## 🚀 Overview

**AurisPlayer** is a re-imagined audio engine built from the ground up with **TypeScript**. It serves as the core processing unit for **AurisLink**, providing a robust, event-driven architecture for managing audio players, tracks, and real-time filters.

Unlike traditional solutions, AurisPlayer is designed for **maximum efficiency** and **originality**, ensuring a lightweight footprint without compromising on power.

## ✨ Key Features

- **Lavalink v4 Protocol:** Full compatibility with the latest Lavalink v4 specifications.
- **Advanced Audio Filters:** Native support for Equalizer, Timescale (Speed/Pitch), Tremolo, and more.
- **Event-Driven Architecture:** Granular control with events like `start`, `pause`, `resume`, and `stop`.
- **Type Safety:** Built with strict TypeScript typings for a developer-friendly experience.
- **Ultra Lightweight:** Optimized for low memory usage and high-speed execution.

## 📦 Installation

```sh
npm install @projectinkdp/auris-player
```

## 🛠️ Quick Start

```typescript
import { Manager } from '@projectinkdp/auris-player';

const manager = new Manager();
const player = manager.createPlayer('guild_id');

player.on('start', (track) => {
  console.log(`Now playing: ${track.info.title}`);
});

// Play a track with filters
player.play(trackData);
player.setFilters({ timescale: { speed: 1.2, pitch: 1.1 } });
```

## 🛡️ Development & Originality

Following the **ProjectInkDp** guidelines, this engine is a complete rewrite focused on technical superiority. We do not copy code; we innovate and adapt to create a superior audio experience.

## 📄 License

Copyright (c) 2026 **ProjectInkDp**.

This software is proprietary and protected by a restrictive license. 
- **Commercial use is strictly prohibited.**
- **Unauthorized modification or redistribution is not allowed.**
- **External contributions are not accepted at this time.**

---

<div align="center">
  Proudly maintained by <b>ProjectInkDp</b>
</div>
