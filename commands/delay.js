module.exports = {
  name: 'delay',
  description: 'Fitur delay!',
  execute(message) {
    setTimeout(() => {
      message.channel.send('Mencoba delay!');
    }, 3000);
  },
};
