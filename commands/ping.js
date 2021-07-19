module.exports = {
  name: 'ping',
  description: 'Ping member!',
  execute(client, message) {
    message.channel.bulkDelete(1);
    message.reply(`pong! \`${client.ws.ping}ms\``);
  },
};
