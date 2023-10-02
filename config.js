/*
Thanks to Botcahx
Thanks to Betabotz
Thanks to DyLux-FG
Thanks to Subscriber
*/

import { watchFile, unwatchFile } from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'

global.owner = [
  ['6283863636737', 'ChiroKageno', true],
  ['6283863636737']
] // Nomor Owner

global.mods = ['6283863636737'] 
global.prems = ['6283863636737', '6283863636737']

// apikey
global.lann = 'KiVBSE43'
// apikeylu di ganti menggunakan apikey yang di dapatkan di website https://api.betabotz.org. contohnya global.lann = 'nans' (contoh). cara mendapatkan apikey. masuk website > scroll ke bawah dan cari harga yang kamu mau ada juga yang free dan tekan > otomatis akan di arahkan untuk registrasi, isi data diri email dll. > kalo sudah klik profil dan di situ akan muncul apikey mu. terima kasih.

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api-fgmods.ddns.net': 'mhdAnan',
  'https://api.betabotz.org': 'KiVBSE43'
}

global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://fg-nrtm.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net',
  lann: 'https://api.betabotz.org'
}

// Watermark
global.nama = 'ChiroKageno' // nama owner
global.nomor = '6283863636737' // nomor owner
global.nans = 'KagenoBot' // nama bot 
global.thumb = 'https://telegra.ph/file/da5fcf1e058f0a4f5f1e9.jpg' // thumbnail bot ( foto menu )
global.dygp = 'https://chat.whatsapp.com' // link group yang ada di menu

// Sticker wm
global.packname = 'KagenoBot' 
global.author = '@ChiroKageno' 
global.fgig = 'https://www.instagram.com/nansoffc' // bebas tapi jangan kosong 
global.fgsc = 'https://github.com/nanzone' // bebas tapi jangan kosong
global.fgyt = 'https://nansoffc.my.id/' // bebas tapi jangan kosong
global.fgpyp = 'https://nansoffc.my.id' // bebas tapi jangan kosong
global.fglog = 'https://i.ibb.co/kXw4XhL/nansoffc-logo.jpg'

// Other
global.dana = '6283863636737'
global.qris = 'gaada'
global.web = 'gaada'
global.email = 'chirokageno@gmail.com'
global.lastm = 'ꜱɪᴍᴘʟᴇ ʙᴏᴛ ᴡʜᴀᴛꜱᴀᴘᴘ ʙʏ Chiro'

global.wait = 'Tunggu sebentar....'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

global.multiplier = 69 
global.maxwarn = '2' // Peringatan maksimum

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})