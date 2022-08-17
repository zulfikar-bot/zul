let handler = async m => { let sewa = `
*────── 「 LIST SEWA 」 ──────*

Hai 👋
𝐈𝐧𝐢 𝐥𝐢𝐬𝐭 𝐬𝐞𝐰𝐚 𝐤𝐚𝐦𝐢 𝐬𝐢𝐥𝐚𝐡𝐤𝐚𝐧 𝐝𝐢𝐩𝐢𝐥𝐢𝐡

┏━━━•❅•°•❈〔 𝐋𝐢𝐬𝐭 𝐒𝐞𝐰𝐚 〕
┣★ミ Premium : 10k/Bulan
┣★ミ Premium : 15k/2bulan
┣★ミ Jadibot + Running : 50k/bulan
┣★ミ Jadibot + Running : 90k/2bulan
┣★ミ Undang bot ke grup : 15k/bulan
┣★ミ Undang bot ke grup : 25k/2bulan
┣➲ Scan Barcode Qrisnya diatas🤗
┗━━━•❅•°•❈

┏━━━•❅•°•❈ 𝐊𝐞𝐮𝐧𝐭𝐮𝐧𝐠𝐚𝐧 𝐌𝐞𝐦𝐛𝐞𝐫 𝐏𝐫𝐞𝐦𝐢𝐮𝐦
┣➲ Unlock Fitur Premium
┣➲ limit didapat tiap hari dengan claim
┣➲ bisa invite bot ke grup
┗━━━•❅•°•❈

Contact person Owner:
https://wa.me/6282279425257 (Owner)

2022 - Zulfikar Bot
`.trim()

await conn.sendFile(m.chat, './media/28166c98e61cc90b93a5c.png', m)
conn.sendMessage(m.chat, { text: sewa, quoted: m })
} // Tambah sendiri kalo mau
handler.help = ['sewabot']
handler.tags = ['donasi']
handler.command = /^se(wa|wabot)$/i

module.exports = handler
