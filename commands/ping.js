module.exports = {
  name: 'ping',
  description: 'Ping member!',
  execute(message) {
    message.reply('pong!');
  },
};
