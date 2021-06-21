const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { prefix } = require('./data/bot.json');

const token = 'ODU2MzUyODAwOTgzNDgyMzY4.YM_ysg.Md78cQdO_9Bzb6i-kdSw_uLUwNU';

const bot = new Client();
const commands = new Collection();

const files = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

files.map((file) => {
  const command = require(`./commands/${file}`);
  console.log(command);
  commands.set(command.name, command);
});

bot.on('ready', () => {
  console.log('Bot Sudah Online!');

  bot.user
    .setActivity('Warga RPL', {
      type: 'LISTENING',
    })
    .catch(console.error);
});

bot.on('message', (message) => {
  let args = message.content.substring(prefix.length).split(' ');

  if (message.content.charAt(0) === ';') {
    switch (args[0]) {
      case 'ping':
        commands.get('ping').execute(message);
        break;
      case 'info':
        commands.get('info').execute(message, args);
        break;
      case 'help':
        commands.get('help').execute(message);
        break;
      case 'clear':
        commands.get('clear').execute(message, args);
        break;
    }
  }
});

bot.login(token);
