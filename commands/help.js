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
      .setFooter('My Bot @' + version)
      .setColor('#D83A56');
    message.channel.send(helpEmbed);
  },
};
