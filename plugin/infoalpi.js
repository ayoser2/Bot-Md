let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI Hendra* ´ˎ˗
│ ✎ _Nama_ : Hendra
│ ✎ _Sekolah_ : 2 SMA KEPO KONTOL
│ ✎ _Umur_ : 16
│ ✎ _Asal_ : JABAR
│ ✎ _Status_ : Pelajar MAIN ML:V
│ ✎ _WhatsApp_ :
│    wa.me/6285794152433
╰──────────────
`.trim(), m)
}

handler.help = ['InfoHendra']
handler.tags = ['main', 'utama']
handler.command = /^(InfoHendra)$/i

handler.exp = 150

module.exports = handler
