module.exports = {
  name: 'removeRole',
  description: 'Untuk remove role member',
  execute(message) {
    if (message.member.roles.cache.find((r) => r.id === process.env.ADMIN_ID)) {
      const user = message.mentions.users.first();
      if (user) {
        const userRemove = message.guild.member(user);
        if (userRemove) {
          const role = message.guild.roles.cache.find(
            (r) => r.name === 'Member'
          );
          const member = message.guild.members.cache.find(
            (m) => m.id === userRemove.id
          );
          member.roles.remove(role.id);
          message.reply(`Berhasil menghapus role ${role} dari ${member}!!!`);
        } else {
        }
      } else {
        message.reply(
          'User yang ingin diremove rolenya tidak ada di dalam server ini'
        );
      }
    } else {
      message.reply(
        'Anda tidak bisa remove role karena bukan satpam di server ini'
      );
    }
  },
};
