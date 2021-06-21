const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'ODU2MzUyODAwOTgzNDgyMzY4.YM_ysg.Md78cQdO_9Bzb6i-kdSw_uLUwNU';

bot.on('ready', () => {
  console.log('Bot Sudah Online!');
});

bot.on('message', (msg) => {
  if (msg.content === 'Halo') {
    msg.reply('Halo Hendra!');
  }
});

bot.login(token);
