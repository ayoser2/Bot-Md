let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, usedPrefix, text, isPrems, isOwner }) => {
  if (!text) throw `uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} i see your monster`
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Video/Audio Tidak ditemukan'
  let isVideo = /2$/.test(command)
  let yt = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'semua server gagal'
  if (yt2 === false) throw 'semua server gagal'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*𝙩𝙞𝙩𝙡𝙚:* ${title}
*𝙛𝙞𝙡𝙚 𝙖𝙪𝙙𝙞𝙤:* ${filesizeF}
*𝙛𝙞𝙡𝙚 𝙫𝙞𝙙𝙚𝙤:* ${yt2.filesizeF}
*𝙨𝙚𝙧𝙫𝙚𝙧:* ${usedServer}
 `.trim(), wm, `🎵 𝗔𝗨𝗗𝗜𝗢 ${filesizeF}`, usedPrefix + `yta ${vid.url}`, `📽 𝗩𝗜𝗗𝗘𝗢 ${yt2.filesizeF}`, usedPrefix + `yt ${vid.url}`, m)
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^(dj|musik|song|lagu|p(lay)?)$/i

handler.exp = 10
handler.limit = false
handler.register = false

module.exports = handler

