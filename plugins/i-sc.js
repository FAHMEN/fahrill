let handler  = async (m, { conn, args }) => {
   m.reply(`Bot Ini Menggunakan Script : wa.me/6285876902829`)
}
 
handler.help = ['sc']
handler.tags = ['info']
handler.command = /^(sc)$/i

module.exports = handler