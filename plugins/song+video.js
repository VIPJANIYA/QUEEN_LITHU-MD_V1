const {cmd , commands} = require('../command')
const fg = require('api-dylux')
const yts = require('yt-search')

cmd({
    pattern: "song",
    desc: "download songs",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("*Please give me a url or title*")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
🎶 *_QUEEN-LITHUM-MD AUDIO DOWNLOADER_* 🎶

┌───────────────────
├ ℹ️ *Title:* ${deta.title}
├ 👤 *Author:* ${deta.author.name}
├ 👁️‍🗨️ *Views:* ${deta.views}
├ 🕘 *Duration:* ${deta.timestamp}
├ 📌 *Ago:* ${deta.ago}
└───────────────────

>  *Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ ᴛᴇᴀᴍ*
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod audio

let down = await fg.yta(url)
let downloadUrl = down.dl_url

//send audio message 
await conn.sendMessage(from,{audio:{url:downloadUrl},mimetype:"audio/mpeg",caption :"*Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ*"},{quoted:mek})
  

}catch(e){
console.log(e)
reply(`${e}`)
}
})

//========video dl=======

cmd({
    pattern: "video",
    desc: "download videos",
    category: "download",
    filename: __filename
},
async(conn, mek, m,{from, quoted, body, isCmd, command, args, q, isGroup, sender, senderNumber, botNumber2, botNumber, pushname, isMe, isOwner, groupMetadata, groupName, participants, groupAdmins, isBotAdmins, isAdmins, reply}) => {
try{

if(!q) return reply("*Please give me a url or title*")
const search = await yts(q)
const deta = search.videos[0];
const url = deta.url 

let desc= `
📽️ *_QUEEN-LITHUM-MD VIDEO DOWNLOADER_* 📽️

┌───────────────────
├ ℹ️ *Title:* ${deta.title}
├ 👤 *Author:* ${deta.author.name}
├ 👁️‍🗨️ *Views:* ${deta.views}
├ 🕘 *Duration:* ${deta.timestamp}
├ 📌 *Ago:* ${deta.ago}
└───────────────────

>  *Qᴜᴇᴇɴ ʟɪᴛʜᴜ ᴍᴅ*
`

await conn.sendMessage(from,{image :{ url: deta.thumbnail},caption:desc},{quoted:mek});

//downlod video 

let down = await fg.ytv(url)
let downloadUrl = down.dl_url

//send video  message 
await conn.sendMessage(from,{video:{url:downloadUrl},mimetype:"video/mp4",caption :"*Qᴜᴇᴇɴ ᴄʜᴏᴏᴛʏ ɴᴇʟᴜᴍɪ ᴍᴅ*"},{quoted:mek})

  

}catch(e){
console.log(e)
reply(`${e}`)
}
})
