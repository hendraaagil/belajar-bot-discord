module.exports = {
  name: 'satpam',
  description: 'Fitur satpam!',
  execute(message) {
    const role = message.member.roles.cache.find(
      (role) => role.id === '856900957757767710'
    );
    if (role) {
      message.channel.send('Kamu adalah Satpam server ini!');
    } else {
      message.channel.send('Kamu bukan Satpam!');
    }
  },
};
