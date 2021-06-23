const { MessageEmbed } = require('discord.js');
const { prefix, version } = require('../data/bot.json');

module.exports = {
  name: 'help',
  description: 'Help menu!',
  execute(message) {
    const helpEmbed = new MessageEmbed()
      .setTitle('Commands yang bisa digunakan')
      .addField('prefix', prefix, true)
      .addField('ping', 'ping bot!', true)
      .addField('info', 'all about bot informations')
      .addField('clear', 'clear chat in channel')
      .addField('delay', 'send message with 3 seconds delay')
      .addField('cooldown', 'send multiple messages with 10 seconds cooldown')
      .addField('satpam', `check if you're satpam(admin) or not`)
      .addField('kick', 'for kick member from server')
      .addField('ban', 'for ban member from server')
      .addField('spam', 'send messages every 2 seconds until user stop it')
      .addField('setRole', 'set role to mentioned user')
      .addField('removeRole', 'remove role to mentioned user')
      .addField('getRole', 'get role to self')
      .setFooter(`Hendra's Bot @${version}`)
      .setColor('#D83A56');
    message.channel.send(helpEmbed);
  },
};
