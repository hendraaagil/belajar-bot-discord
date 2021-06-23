module.exports = {
  name: 'setRole',
  description: 'Untuk set role member',
  execute(message) {
    if (
      message.member.roles.cache.find(
        (role) => role.id === process.env.ADMIN_ID
      )
    ) {
      const user = message.mentions.users.first();

      if (user) {
        const userSet = message.guild.member(user);
        if (userSet) {
          const role = message.guild.roles.cache.find(
            (r) => r.name === 'Member'
          );
          const member = message.guild.members.cache.find(
            (m) => m.id === userSet.id
          );

          member.roles.add(role.id);
          message.reply(`Berhasil menambahkan ${member} sebagai ${role}`);
        }
      } else {
        message.reply(
          `Silahkan mention user yang ingin dijadikan sebagai member`
        );
      }
    } else {
      message.reply('Anda bukan Satpam yaaaaaaaaaaaaaa');
    }
  },
};
