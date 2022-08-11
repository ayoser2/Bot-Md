let handler = async (m, { conn, usedPrefix }) => conn.sendButton(m.chat, `
┏──「 𝙗𝙤𝙩 • 𝙤𝙬𝙣𝙚𝙧 」─⬣
│ • 𝒏𝒖𝒎𝒃𝒆𝒓 : +94768678590
│ • 𝒐𝒘𝒏𝒆𝒓 : +94772496127
╰────────⬣
┏──「 *NOTE* 」─⬣
│ ⇝𝑰 𝒂𝒎 𝒃𝒐𝒕 𝒐𝒘𝒏𝒆𝒓
│ ⇝𝒅𝒐𝒏𝒕 𝒓𝒆𝒑𝒐𝒓𝒕 𝒎𝒆
│ ⇝𝒔𝒄𝒓𝒊𝒑𝒕 𝒃𝒐𝒕
│ ⇝24 𝒉𝒐𝒖𝒓 𝒃𝒐𝒕 
┗────────⬣
`.trim(), wm, 'Menu', usedPrefix + 'menu', m) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
