let handler = async (m, { conn, text, isROwner, isOwner, isAdmin, usedPrefix, command }) => {
  if (text) {
    if (isROwner) global.conn.welcome = text
    else if ((isOwner || isAdmin)) conn.welcome = text
    global.db.data.chats[m.chat].sWelcome = text
    m.reply('Welcome berhasil diatur\n@user (Mention)\n@subject (Judul Grup)\n@desc (Deskripsi Grup)')
  } else throw `Teksnya mana?\n\nContoh penggunaan: ${prefix + command} Welcome @user\n\n- @user (Tag user)\n- @number (Nomor user)\n- @group (Nama group)\n- @bio (Bio user)\n- @members (Total member)\n- @day (Hari)\n- @date (Tanggal)\n- @time (Jam)\n- @desc (Deskripsi group)`
}
handler.help = ['setwelcome <teks>']
handler.tags = ['group']
handler.command = /^(setwelcome|setw)$/i
handler.group = true

module.exports = handler
