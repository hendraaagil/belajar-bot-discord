module.exports = {
  name: 'ping',
  description: 'Ping member!',
  execute(message) {
    message.channel.bulkDelete(1);
    message.reply('pong!');
  },
};
