let fs = require('fs') 
let chalk = require('chalk')

global.owner = [
  ['6282279425257'],
  ['6282279425257', 'Muhammad Zulfikar Putra', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
global.ext = {
	title: 'Sabar, sedang di proses',
	body: 'Zulfikar Bot',
	thum: 'https://scontent.fcgk35-1.fna.fbcdn.net/v/t1.6435-9/88248395_108584750748698_3424284829900865536_n.png?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrlxN0Nof4XOLWra5O0m0Lm73WbR0T1zKbvdZtHRPXMslW31ZjSV85Ofs57zUxQNy0-7V1MN6dbme03SsuOi-q&_nc_ohc=TCDTb_4B7AwAX9hSrE-&_nc_ht=scontent.fcgk35-1.fna&oh=00_AT8NA8jVXqerOPzv_eUO53wdEQ6u3-jdV2I6oPId279FeA&oe=630B65B4'
}
global.mess = {
	wait: '*❏ Mohon tunggu sebentar*',
	error: '❏ Maaf fitur ini sedang *Error*',
}
global.thumnail = ext.thum // It's hard to change if you don't get an error
global.thum = ext.thum // Same as above
global.mods = [] // Want some help?
global.prems = [] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com',
  alphabot: 'https://api-alphabot.herokuapp.com'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': '524e9d1f64f72f79',
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': '0fWgL9ID',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA',
  'https://api-alphabot.herokuapp.com': 'N7axnIq3'
}


global.useMulti = false //Bug?
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = '▶️ Zulfikar Bot'
  var sticker_author = 'Muhammad Zulfikar Putra'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

// Sticker WM
global.packname = sticker_name
global.author = sticker_author
global.wm = 'Zulfikar Bot'

global.multiplier = 7777777 // The higher, The harder levelup

global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
