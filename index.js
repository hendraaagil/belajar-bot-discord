const fs = require('fs');
const http = require('http');
const { Client, Collection } = require('discord.js');
const { prefix } = require('./data/bot.json');
require('dotenv').config();

const token = process.env.BOT_TOKEN;

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

// createServer
http
  .createServer(function (req, res) {
    res.write(`I'm alive!`);
    res.end();
  })
  .listen(8080);

// Notification if bot ready
bot.on('ready', () => {
  console.log('Bot Sudah Online!');

  const peoples = ['Warga RPL', 'Warga Indonesia', 'Warga Warga'];
  let i = 0;
  setInterval(() => {
    bot.user
      .setActivity(peoples[i++ % peoples.length], {
        type: 'LISTENING',
      })
      .catch(console.error);
  }, 3000);
});

// Send message if new member landed
bot.on('guildMemberAdd', (member) => {
  const greeting = member.guild.channels.cache.find(
    (ch) => ch.id === process.env.CH_GREETING_ID
  );
  const rule = member.guild.channels.cache.find(
    (ch) => ch.id === process.env.CH_RULE_ID
  );

  if (!greeting) return;

  if (member.guild.id === process.env.SERVER_ID) {
    greeting.send(
      `Halo ${member}, Selamat datang di server ${member.guild.name} Silahkan baca peraturan di ${rule}`
    );
  }
});

// List all commands
bot.on('message', (message) => {
  let args = message.content.substring(prefix.length).split(' ');

  if (message.content.startsWith(prefix)) {
    switch (args[0]) {
      case 'ping':
        commands.get('ping').execute(bot, message);
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
      case 'kick':
        commands.get('kick').execute(message);
        break;
      case 'ban':
        commands.get('ban').execute(message);
        break;
      case 'spam':
        commands.get('spam').execute(message, args);
        break;
      case 'setRole':
        commands.get('setRole').execute(message);
        break;
      case 'removeRole':
        commands.get('removeRole').execute(message);
        break;
      case 'getRole':
        commands.get('getRole').execute(message);
        break;
    }
  }
});

// Activate bot
bot.login(token);
