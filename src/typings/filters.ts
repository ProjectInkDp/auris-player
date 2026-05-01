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
