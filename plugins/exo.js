let fetch = require('node-fetch')
let exo = []
fetch('https://raw.githubusercontent.com/arivpn/dbase/master/kpop/exo.txt')
    .then(res => res.text())
    .then(txt => exo = txt.split('\n'))
let handler = async (m, { conn }) => {
    let img = exo[Math.floor(Math.random() * arr.length)]
    if (!img) throw img
    await conn.sendFile(m.chat, img, '', '© nih EXOnya kak, 2022 - Zulfikar Bot. 👍', m, 0, { thumbnail: await (await fetch(img)).buffer() })
}
handler.help = ['exo']
handler.tags = ['internet']
handler.limit = 5
handler.command = /^(exo)$/i

module.exports = handler
