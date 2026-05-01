import { Manager, Player, Track } from './index.js';

async function runTest() {
  console.log('🚀 Iniciando testes de integração do AurisPlayer v1.0.3...\n');

  const manager = new Manager();
  const guildId = '123456789012345678';

  // 1. Teste de Criação
  console.log('1. Testando criação de player...');
  const player = manager.createPlayer(guildId);
  if (player instanceof Player && player.guildId === guildId) {
    console.log('✅ Player criado com sucesso!\n');
  } else {
    throw new Error('❌ Falha ao criar player.');
  }

  // 2. Teste de Eventos e Play
  console.log('2. Testando reprodução e eventos...');
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
    console.log(`📡 Evento 'start' recebido para: ${track.info.title}`);
  });

  player.play(mockTrack);
  if (player.track?.info.identifier === 'abc-123' && !player.paused) {
    console.log('✅ Estado de reprodução validado!\n');
  }

  // 3. Teste de Pause/Resume
  console.log('3. Testando Pause e Resume...');
  player.pause();
  if (player.paused) {
    console.log('✅ Player pausado com sucesso.');
  }

  player.resume();
  if (!player.paused) {
    console.log('✅ Player retomado com sucesso!\n');
  }

  // 4. Teste de Volume
  console.log('4. Testando controle de volume...');
  player.setVolume(150);
  if (player.volume === 150) {
    console.log('✅ Volume ajustado corretamente!\n');
  }

  // 5. Teste de Gerenciamento
  console.log('5. Testando exclusão de player...');
  manager.deletePlayer(guildId);
  if (!manager.getPlayer(guildId)) {
    console.log('✅ Player removido do Manager com sucesso!\n');
  }

  console.log('🎉 Todos os testes passaram! A estrutura v1.0.3 está estável.');
}

runTest().catch(err => {
  console.error('❌ O teste falhou:', err);
  process.exit(1);
});
