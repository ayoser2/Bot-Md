let handler  = async (m, { conn, usedPrefix }) => { 
conn.reply(m.chat, `
╭─˗ˏˋ *INFORMASI OWNER* ´ˎ˗
│ ✎ _Nama_ : Hendra
│ ✎ _Hobi_ : Main ml
│ ✎ _Umur_ : 16
│ ✎ _Asal_ : Jawa bara
│ ✎ _Status_ : Sibuk main ml
│ ✎ _Official Grup 1_ :
│    https://chat.whatsapp.com/IqZke0cAG6G3iVsnB9myfL
│ ✎ _Official Grup 2_ :
│    
│ ✎ _Youtube _:
│    
│ ✎ _Instagram_ : 
│    
│ ✎ _WhatsApp_ :
│    wa.me/6285794152433
╰───────────────────
`.trim(), m)
}

handler.help = ['infoHendra']
handler.tags = ['main', 'utama']
handler.command = /^(infoHendra)$/i

handler.exp = 150

module.exports = handler
