const { MessageEmbed } = require('discord.js');
const { author, bot_name, description, version } = require('../data/bot.json');

module.exports = {
  name: 'info',
  description: 'Info bot!',
  execute(message, args) {
    if (!args[1]) {
      const commandList = new MessageEmbed()
        .setTitle('Command List')
        .setColor('#fafcfc')
        .addField('`;info author`', 'Menampilkan pembuat bot', true)
        .addField('`;info versi`', 'Menampilkan versi bot', true)
        .addField('`;info bot`', 'Menampilkan seluruh informasi bot');
      message.channel.send(commandList);
    } else {
      if (args[1] === 'author') {
        message.channel.send(author);
      } else if (args[1] === 'versi') {
        message.channel.send('Versi : ' + version);
      } else if (args[1] === 'bot') {
        const embed = new MessageEmbed()
          .setTitle('Informasi Bot')
          .addField('Nama : ', bot_name, true)
          .addField('Version : ', version, true)
          .setDescription(description)
          .setURL('https://hendraaagil.space/')
          .setColor('#2A61CC')
          .setFooter('Created by hendraaagil');
        message.channel.send(embed);
      } else {
        message.channel.send('Perintah tidak ditemukan!');
      }
    }
  },
};
