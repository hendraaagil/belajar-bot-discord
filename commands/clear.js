module.exports = {
  name: 'clear',
  description: 'Untuk membersihkan chat',
  execute(message, args) {
    if (!args[1]) {
      message.reply('Masukkan jumlah pesan yang ingin dihapus!');
    } else {
      message.channel.bulkDelete(args[1]);
    }
  },
};
