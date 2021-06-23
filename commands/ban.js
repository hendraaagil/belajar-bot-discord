module.exports = {
  name: 'ban',
  description: 'Untuk ban member',
  execute(message) {
    const role = message.member.roles.cache.find(
      (role) => role.id === process.env.ADMIN_ID
    );
    if (role) {
      const userBan = message.mentions.users.first();
      if (userBan) {
        const memberBan = message.guild.member(userBan);
        if (memberBan) {
          memberBan
            .ban({
              reason: 'Kamu terban karena dibenci!',
            })
            .then(() => {
              message.reply(`${userBan.tag} berhasil dibanned dari server ini`);
            })
            .catch(() => console.error);
        }
      } else {
        message.channel.bulkDelete(1);
        message.reply('User yang ingin diban tidak ada didalam server ini!');
      }
    } else {
      message.channel.bulkDelete(1);
      message.reply('Mohon maaf kamu bukan satpam di server ini!');
    }
  },
};
