import fetch from 'node-fetch';
import util from 'util';

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (typeof text === 'string') { // Memeriksa apakah text adalah string
    if (!text) throw `Masukkan pertanyaan!\n\n*Contoh:* kenapa kepin gtg bgt`;

    try {
      let js = await fetch(API('xzn', 'api/openai', { text: `${text}`, apikey: xzn }));
      let responseJson = await js.json(); // Mengurai JSON respons

      // Mengekstrak hasil dari respons JSON
      let result = responseJson.result;

      await conn.sendMessage(m.chat, {
        text: result,
        contextInfo: {
          externalAdReply: {
            title: 'OpenAI GPT',
            body: '',
            thumbnailUrl: "https://telegra.ph/file/075934c3d2c9b2e8f7001.jpg",
            sourceUrl: "https://Mad e By Kepin Desu",
          }
        }
      }, { quoted: m });
    } catch (err) {
      m.reply(util.format(err)); // Menampilkan pesan kesalahan jika terjadi kesalahan dalam permintaan
    }
  } else {
    // Handle jika text bukan string
    m.reply("Teks pertanyaan tidak valid.");
  }
}

handler.help = ['openai <pertanyaan>'];
handler.tags = ['tools'];
handler.command = ['openai','ai','chatgpt'];
handler.diamond = 10

export default handler;
