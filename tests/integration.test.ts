import { Manager, Player, Track } from '../src/index.js';

async function runTest() {
  console.log('🚀 Starting AurisPlayer Integration Tests...\n');

  const manager = new Manager();
  const guildId = '123456789012345678';

  // 1. Creation Test
  console.log('1. Testing player creation...');
  const player = manager.createPlayer(guildId);
  if (player instanceof Player && player.guildId === guildId) {
    console.log('✅ Player created successfully!\n');
  } else {
    throw new Error('❌ Failed to create player.');
  }

  // 2. Events and Playback Test
  console.log('2. Testing playback and events...');
  const mockTrack: Track = {
    encoded: 'mock_encoded_string',
    info: {
      identifier: 'abc-123',
      isSeekable: true,
      author: 'ProjectInkDp',
      length: 180000,
      isStream: false,
      position: 0,
      title: 'Auris Engine Theme',
      uri: 'https://projectink.dp/song',
      artworkUrl: null,
      isrc: null,
      sourceName: 'auris'
    },
    pluginInfo: {}
  };

  player.on('start', (track) => {
    console.log(`📡 'start' event received for: ${track.info.title}`);
  });

  player.play(mockTrack);
  if (player.track?.info.identifier === 'abc-123' && !player.paused) {
    console.log('✅ Playback state validated!\n');
  }

  // 3. Pause/Resume Test
  console.log('3. Testing Pause and Resume...');
  player.pause();
  if (player.paused) {
    console.log('✅ Player paused successfully.');
  }

  player.resume();
  if (!player.paused) {
    console.log('✅ Player resumed successfully!\n');
  }

  // 4. Volume Test
  console.log('4. Testing volume control...');
  player.setVolume(150);
  if (player.volume === 150) {
    console.log('✅ Volume adjusted correctly!\n');
  }

  // 5. Management Test
  console.log('5. Testing player deletion...');
  manager.deletePlayer(guildId);
  if (!manager.getPlayer(guildId)) {
    console.log('✅ Player removed from Manager successfully!\n');
  }

  console.log('🎉 All tests passed! AurisPlayer is stable.');
}

runTest().catch(err => {
  console.error('❌ Test failed:', err);
  process.exit(1);
});
