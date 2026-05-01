export interface EqualizerBand {
  band: number;
  gain: number;
}

export interface Timescale {
  speed?: number;
  pitch?: number;
  rate?: number;
}

export interface Tremolo {
  frequency?: number;
  depth?: number;
}

export interface Filters {
  volume?: number;
  equalizer?: EqualizerBand[];
  timescale?: Timescale;
  tremolo?: Tremolo;
  // Adicionaremos mais conforme a necessidade
}

export interface Distortion {
  sinOffset?: number;
  sinScale?: number;
  cosOffset?: number;
  cosScale?: number;
  tanOffset?: number;
  tanScale?: number;
  offset?: number;
  scale?: number;
}

declare module './index.js' {
  interface Filters {
    distortion?: Distortion;
  }
}
