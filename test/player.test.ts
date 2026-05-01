import { describe, it, expect, vi } from 'vitest';
import { Player } from '../src/core/Player.js';

describe('AurisPlayer', () => {
  it('should create a player with correct guildId', () => {
    const player = new Player('123456789');
    expect(player.guildId).toBe('123456789');
  });

  it('should update filters and emit event', () => {
    const player = new Player('123456789');
    const spy = vi.fn();
    player.on('filtersChange', spy);

    const newFilters = { volume: 0.5, distortion: { scale: 2 } };
    player.setFilters(newFilters);

    expect(player.filters.volume).toBe(0.5);
    expect(player.filters.distortion?.scale).toBe(2);
    expect(spy).toHaveBeenCalledWith(expect.objectContaining(newFilters));
  });

  it('should handle volume correctly', () => {
    const player = new Player('123456789');
    player.setVolume(150);
    expect(player.volume).toBe(150);
    expect(player.filters.volume).toBe(1.5);
  });
});
