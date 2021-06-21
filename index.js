const { Client, MessageEmbed } = require('discord.js');
const bot = new Client();

const token = 'ODU2MzUyODAwOTgzNDgyMzY4.YM_ysg.Md78cQdO_9Bzb6i-kdSw_uLUwNU';
const PREFIX = '!';
const version = '1.0.0';

bot.on('ready', () => {
  console.log('Bot Sudah Online!');
});

bot.on('message', (message) => {
  let args = message.content.substring(PREFIX.length).split(' ');

  switch (args[0]) {
    case 'ping':
      message.reply('pong!');
      break;
    case 'Author':
      message.channel.send('Hendra Agil');
      break;
    case 'info':
      if (!args[1]) {
        message.channel.send('Commands : \n-author\n-versi');
      } else {
        if (args[1] === 'author') {
          message.channel.send('Hendra Agil @hendraaagil');
        } else if (args[1] === 'versi') {
          message.channel.send('Versi : ' + version);
        } else {
          message.channel.send('Perintah tidak ditemukan!');
        }
      }
      break;
    case 'embed':
      const embed = new MessageEmbed()
        .setTitle('Informasi Bot')
        .addField('Nama : ', 'Hendra Agil Syaputra')
        .addField('Version : ', version)
        .setDescription(
          'Ini adalah bot untuk belajar membuat Bot di Discord dengan Node.js dan Discord.js'
        )
        .setURL('https://hendraaagil.space/')
        .setColor('#2A61CC')
        .setFooter('Created by hendraaagil');
      message.channel.send(embed);
      break;
    case 'help':
      const helpEmbed = new MessageEmbed()
        .setTitle('Commands yang bisa digunakan')
        .addField('PREFIX', PREFIX)
        .addField('ping', 'ping bot!')
        .addField('info', 'all about bot informations')
        .setFooter('My Bot @' + version)
        .setColor('#D83A56');
      message.channel.send(helpEmbed);
      break;
  }
});

bot.login(token);
