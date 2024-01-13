import { family100 } from '@bochilteam/scraper'

let timeout = 60000
let poin = 3000
let handler = async (m, { conn, usedPrefix, command }) => {
  try {
    conn.family100 = conn.family100 ? conn.family100 : {}
    let id = 'family100_' + m.chat
    if (id in conn.family100) {
      conn.reply(m.chat, 'Masih ada kuis yang belum terjawab di chat ini', conn.family100[id].msg)
      throw false
    }
    const json = await family100()
    let caption = `*[ f a m i l y 100 ]*


    *[ soal ]* => ${json.soal}
    Terdapat *${json.jawaban.length}* jawaban${json.jawaban.find(v => v.includes(' ')) ? `
    (beberapa jawaban terdapat spasi)
    `: ''}

    *[ hadiah ]* => ${poin} XP tiap jawaban benar
    *[ timeout ]* => ${timeout / 60000} menit


    
    `.trim()
    conn.family100[id] = {
      id,
      msg: await conn.reply(m.chat, caption, m),
      ...json,
      terjawab: Array.from(json.jawaban, () => false),
      poin,
      tot: setTimeout(() => {
        if (conn.family100[id]) conn.reply(m.chat, `*[ t i m e o u t ]*

          🎋 *game berakhir*

          Ayo main lagi🧢`, conn.family100[id].msg)
          delete conn.family100[id]
                  }, timeout) // Menyimpan waktu mulai game
    }
  }catch (e) {
    log(e)
    m.reply('terjadi kesalahan...')
  }
  handler.help = ['family100']
  handler.tags = ['game']
  handler.command = /^family100$/i
  
  export default handler