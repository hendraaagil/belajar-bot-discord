const { Collection } = require('discord.js');
const cooldown = new Collection();

module.exports = {
  name: 'cooldown',
  description: 'Fitur cooldown!',
  execute(message) {
    if (cooldown.has(message.author.id)) {
      message.reply(
        'Tunggu 10 detik untuk bisa kembali menggunakan command ini!'
      );
    } else {
      message.channel.send('Mencoba fitur cooldown');
      cooldown.set(message.author.id);
      setTimeout(() => {
        cooldown.delete(message.author.id);
      }, 1000 * 10);
    }
  },
};
