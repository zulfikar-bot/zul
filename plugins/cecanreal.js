let handler = async (m, { conn }) => {
    conn.sendButtonImg(m.chat, ('https://api.zacros.my.id/asupan/cecan'), 'Nih kak, 2022 - Zulfikar Bot.', wm, 'NEXT', '.cevanvietnam', m)
}

handler.help = ['cecansantuy']
handler.tags = ['asupan']
handler.command = /^(cecansantuy)$/i
handler.limit = 3

module.exports = handler