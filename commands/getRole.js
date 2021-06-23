module.exports = {
  name: 'getRole',
  description: 'Untuk get role member',
  execute(message) {
    const user = message.author.id;
    const member = message.guild.members.cache.find((m) => m.id === user);
    const role = message.guild.roles.cache.find((r) => r.name === 'Member');
    member.roles.add(role.id);
    message.reply('Selamat kamu sudah menjadi member');
  },
};
