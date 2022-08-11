let handler = async (m, { conn }) => {
	
	// Link Script jgn di ganti ya pliss
    // Kalo mau masukin github kamu tinggal add aja link githubnya tapi jangan di hapus sumber script!
    // Jangan Ngeyell..
    // Kalo ngeyel gk bakal gw up sc lgi.
    
    let txt = `
Bot script is testing

Script in soon
Script original By Family-Garfield
`
     conn.reply(m.chat, txt, m)
}
handler.help = ['sourcecode']
handler.tags = ['info']
handler.command = /^(sc(ript(bot)?)?|sourcecode)$/i

module.exports = handler


