let handler = async (m, { conn, isOwner }) => {
let adv = Object.entries(global.db.data.users).filter(user => user[1].warn)
let warns = global.db.data.users.warn
let user = global.db.data.users

let caption = `โ ๏ธ ๐๐๐๐๐๐๐๐ ๐๐๐๐๐๐๐๐๐๐
*โโโโโโโโโโโโโโโโโโโโยทโข*
โ *Total : ${adv.length} Usuarios* ${adv ? '\n' + adv.map(([jid, user], i) => `
โ
โ *${i + 1}.* ${conn.getName(jid)  == undefined ? 'Sin Usuarios' : conn.getName(jid) + ` *(${user.warn}/4)*`}
โ ${isOwner ? '@' + jid.split`@`[0] : jid}\nโ - - - - - - - - -`.trim()).join('\n') : ''}
*โโโโโโโโโโโโโโโโโโโโยทโข*`
await conn.sendButton(m.chat, caption, `โ ๏ธ ๐๐๐ฉ๐๐ฅ๐ง๐๐ก๐๐๐ โข ${warns ? `*${warns}/4*` : '*0/4*'}\n${wm}`, null, [ 
['๐ ๐ ๐ ๐ ๐ ', '/menu']], m, { mentions: await conn.parseMention(caption) })}

handler.command = /^(listaadv|listadv|adv|advlist|advlista)$/i 

export default handler
