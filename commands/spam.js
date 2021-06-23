let spam;

module.exports = {
  name: 'spam',
  description: 'Untuk spam chat',
  execute(message, args) {
    if (args[1] === 'start') {
      spam = setInterval(() => {
        message.channel.send(
          'Jangan lupa kunjungi website saya di https://hendraaagil.space/\n**Terima Kasih**'
        );
      }, 1000 * 2);
    } else if (args[1] === 'stop') {
      clearInterval(spam);
      message.channel.send('**Berhasil distop**');
    } else {
      message.channel.send('Masukkan argumen kedua **start** / **stop**');
    }
  },
};
