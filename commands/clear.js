module.exports = {
  name: 'clear',
  description: 'Untuk membersihkan chat',
  execute(message, args) {
    const role = message.member.roles.cache.find(
      (role) => role.id === '856900957757767710'
    );
    if (role) {
      if (!args[1]) {
        message.reply('Masukkan jumlah pesan yang ingin dihapus!');
      } else {
        message.channel.bulkDelete(args[1]);
      }
    } else {
      message.reply('Mohon maaf kamu bukan satpam di server ini!');
    }
  },
};
