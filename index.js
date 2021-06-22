const fs = require('fs');
const { Client, Collection } = require('discord.js');
const { prefix } = require('./data/bot.json');

const token = 'ODU2MzUyODAwOTgzNDgyMzY4.YM_ysg.Md78cQdO_9Bzb6i-kdSw_uLUwNU';

const bot = new Client();
const commands = new Collection();

// Get all file in commands folder
const files = fs
  .readdirSync('./commands')
  .filter((file) => file.endsWith('.js'));

// Save each file in commands folder to commands collection
files.map((file) => {
  const command = require(`./commands/${file}`);
  commands.set(command.name, command);
});

// Notification if bot ready
bot.on('ready', () => {
  console.log('Bot Sudah Online!');

  bot.user
    .setActivity('Warga RPL', {
      type: 'LISTENING',
    })
    .catch(console.error);
});

// Send message if new member landed
bot.on('guildMemberAdd', (member) => {
  const channel = member.guild.channels.cache.find(
    (ch) => ch.id === '856450580218511372'
  );
  const rule = member.guild.channels.cache.find(
    (ch) => ch.id === '856894054175866965'
  );

  if (!channel) return;

  if (member.guild.id === '856353394436079616') {
    channel.send(
      `Halo, ${member}, Selamat datang di server BotTest! Silahkan baca peraturan di ${rule}`
    );
  }
});

// List all commands
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
      case 'delay':
        commands.get('delay').execute(message);
        break;
      case 'cooldown':
        commands.get('cooldown').execute(message);
        break;
      case 'satpam':
        commands.get('satpam').execute(message);
        break;
    }
  }
});

// Activate bot
bot.login(token);
