module.exports = {
  name: 'kick',
  description: 'Untuk Kick member',
  execute(message) {
    const role = message.member.roles.cache.find(
      (role) => role.id === process.env.ADMIN_ID
    );
    if (role) {
      const userKick = message.mentions.users.first();
      if (userKick) {
        const memberKick = message.guild.member(userKick);
        if (memberKick) {
          memberKick
            .kick('Kamu dikick dari server BotTest')
            .then(() => {
              message.channel.bulkDelete(1);
              message.reply(`User ${userKick.tag} berhasil dikick`);
            })
            .catch((error) => {
              console.log(error);
              message.channel.bulkDelete(1);
              message.reply(`User gagal dikick`);
            });
        } else {
          message.channel.bulkDelete(1);
          message.reply('Silahkan mention user!');
        }
      } else {
        message.channel.bulkDelete(1);
        message.reply('User yang ingin dikick tidak ada didalam server ini!');
      }
    } else {
      message.channel.bulkDelete(1);
      message.reply('Mohon maaf kamu bukan satpam di server ini!');
    }
  },
};
