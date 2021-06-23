# Belajar Bot Discord

![Informasi Bot Preview](/docs/info-bot.png)

Ini adalah repo untuk belajar membuat bot discord dengan [Node.js](https://nodejs.org/en/) dan [Discord.js](https://discord.js.org/#/). <br/>
Mengikuti tutorial dari playlist: [Discord Bot Series (VIP Code Studio)](https://www.youtube.com/playlist?list=PLmF_zPV9ZcP2kMezKV_s7hDCgGG8K3zVD).

## Cara Menjalankan Bot di Lokal

1. Salin file `.env.example` dan tempel sebagai file `.env`
2. Isi file `.env` <br/>
   ```bash
   BOT_TOKEN = ''
   ADMIN_ID = ''
   CH_GREETING_ID = ''
   CH_RULE_ID = ''
   SERVER_ID = ''
   ```
3. Untuk mendapatkkan `BOT_TOKEN` buat bot terlebih dahulu di [Discord Developer Portal](https://discord.com/developers/applications)
4. Ubah info bot di file [`data/bot.json`](/data/bot.json)
5. Untuk mengundang bot agar masuk ke server bisa menggunakan [Discord Permissions Calculator](https://discordapi.com/permissions.html)

## Dokumentasi

Untuk belajar lebih lanjut tentang Discord.js:

- [Dokumentasi Discord.js](https://discord.js.org/#/)
- [Discord.js Guide](https://discordjs.guide/)
