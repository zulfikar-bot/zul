const uploadImage = require('../lib/uploadImage')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
  let [atas, bawah] = text.split('|')
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'Tidak ada foto'
  if (!/image\/(jpe?g|png)/.test(mime)) throw `Mime ${mime} tidak support`
  let img = await q.download()
  let url = await uploadImage(img)
  let wasted = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
  let stiker = await sticker(null, wasted, packname, author)
  conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
 } catch (e) {
   m.reply(`Reply image dengan caption ${usedPrefix + command} <teks atas>|<teks bawah>\n\n*Jangan reply sticker*`)
  }
}
handler.help = ['stikermeme <teks atas>|<teks bawah>']
handler.tags = ['sticker']
handler.command = /^(s(tic?ker)?meme)$/i

handler.limit = true

handler.fail = null

module.exports = handler