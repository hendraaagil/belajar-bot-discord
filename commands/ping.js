module.exports = {
  name: 'ping',
  description: 'Ping member!',
  execute(bot, message) {
    message.channel.bulkDelete(1);
    message.reply(`pong! \`${bot.ws.ping}ms\``);
  },
};
