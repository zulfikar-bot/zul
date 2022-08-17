const crypto = require('crypto')

const xp_first_time = 2500
const xp_link_creator = 15000
const xp_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

const limit_first_time = 25
const limit_link_creator = 100
const limit_bonus = {
    5: 4000,
   10: 10000,
   20: 25000,
   50: 1000000,
  100: 10000000,
}

const bank_first_time = 25000
const bank_link_creator = 150000
const bank_bonus = {
    5: 400000,
   10: 1000000,
   20: 2500000,
   50: 10000000,
  100: 100000000,
}

const money_first_time = 25000
const money_link_creator = 150000
const money_bonus = {
    5: 400000,
   10: 1000000,
   20: 2500000,
   50: 10000000,
  100: 100000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw 'Kode referal tidak valid'
	users[m.sender].ref_count = 0
    let count = users[link_creator].ref_count++
    let extra = xp_bonus[count] || 0 //xp
    users[link_creator].exp += xp_link_creator + extra
    users[m.sender].exp += xp_first_time
	let extral = limit_bonus[count] || 0 //limit
    users[link_creator].limit += limit_link_creator + extral
    users[m.sender].limit += limit_first_time
	let extrab = bank_bonus[count] || 0 //bank
    users[link_creator].bank += bank_link_creator + extrab
    users[m.sender].bank += bank_first_time
	let extram = money_bonus[count] || 0 //money
    users[link_creator].money += money_link_creator + extram
    users[m.sender].money += money_first_time
    m.reply(`
*SELAMAT!*\n\nKamu telah mendapatkan\n
+${xp_first_time} XP
+${limit_first_time} Limit
+${bank_first_time} Saving Money
+${money_first_time} Money
`.trim())
    m.reply(`
*SELAMAT!*\n\nSeseorang telah menggunakan kode referal kamu
+${xp_link_creator + extra} XP
+${limit_link_creator + extra} Limit
+${bank_link_creator + extra} Saving Money
+${money_link_creator + extra} Money
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `https://wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Dapatkan hadiah berikut untuk kalian yang menggunakan link/kode referal dibawah ini!

${xp_first_time} XP
${limit_first_time} Limit
${bank_first_time} Saving Money
${money_first_time} Money

Referal Code: *${code}*

Gunakan dan kirim kode di sini, di bawah ini!
${command_link}
`.trim()
    m.reply(`
Dapatkan hadiah berikut untuk setiap pengguna baru yang menggunakan kode referal kamu

${xp_link_creator} XP
${limit_link_creator} Limit
${bank_link_creator} Saving Money
${money_link_creator} Money

${users[m.sender].ref_count} orang telah menggunakan kode referal kamu

Kode referal kamu: ${code}

Bagikan link kepada teman: ${command_link}

atau kirim pesan kepada teman https://wa.me/?text=${encodeURIComponent(share_text)}

*[ Keuntungan Referal ]*

~ XP ~
${Object.entries(xp_bonus).map(([count, xp]) => `${count} Orang = Bonus ${xp} XP`).join('\n')}

~ Limit ~
${Object.entries(limit_bonus).map(([count, limit]) => `${count} Orang = Bonus ${limit} Limit`).join('\n')}

~ Saving Money ~
${Object.entries(bank_bonus).map(([count, bank]) => `${count} Orang = Bonus ${bank} Saving Money`).join('\n')}

~ Money ~
${Object.entries(money_bonus).map(([count, money]) => `${count} Orang = Bonus ${money} Money`).join('\n')}
`.trim())
  }
}
handler.help = ['ref']
handler.tags = ['main']

handler.command = ['ref']

handler.register = true

module.exports = handler
