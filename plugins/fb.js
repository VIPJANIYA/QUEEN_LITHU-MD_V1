const { fetchJson } = require('../lib/functions')
const config = require('../config')
const { cmd, commands } = require('../command')
const baseUrl = "https://prabath-md-api.up.railway.app";

async function socialMediaDownload(url) {
    let endpoint;
    if (url.includes("facebook.com") || url.includes("fb.watch")) {
        endpoint = `${baseUrl}/api/fdown?url=${encodeURIComponent(url)}`;
        } else {
        throw new Error("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗");
    }
    const response = await axios.get(endpoint);
    return response.data;
}

cmd(
    {
        pattern: "fb",
        alias: ["facebook"],
        react: "🔎",
        desc: "Download Facebook videos",
        category: "download",
        use: ".fb <facebook link>",
        filename: __filename,
    },
    async (
        conn,
        mek,
        m,
        { from, quoted, args, q, isGroup, sender, pushname, reply },
    ) => {
        try {
            const senderNumber = m.sender;
            const isGroup = m.isGroup || false;

            // Check access permissions
            if (!checkAccess(senderNumber, isGroup)) {
                if (blacklistedJIDs.includes(senderNumber)) {
                    return reply("*🚫 You are blacklisted. Access denied.*");
                } else {
                    return reply(
                        "*😢 Access denied. You don't have permission to use this command.🎁 Change Bot Mode!*",
                    );
                }
            }

            if (!q)
                return await reply("𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗");


            const response = await socialMediaDownload(q);

            if (response.status === "success ✅" && response.data) {
                const { hd, sd, audio } = response.data;

                if (hd || sd) {

                    // Prompt user to select HD or SD
                    const videoMessage = `* DARK DEW-MD FB DOWNLOADER*

🎬 𝖳𝖺𝗍𝗂𝗅𝖾 : Undifended
🖇️ 𝖡𝖺𝗌𝖾 𝖴𝗋𝗅 : www.facebook.com

* REPLY THE DOWNLOAD OPTION*

1️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖧𝖣 𝖳𝗒𝗉𝖾.
2️⃣  𝖣𝗈𝗐𝗇𝗅𝗈𝖺𝖽 : 𝖵𝗂𝖽𝖾𝗈 𝖲𝖣 𝖳𝗒𝗉𝖾.

> ʙʏ ᴅᴀʀᴋ ᴅᴇᴡ-ᴍᴅ‎*`;

                    const sentMessage = await conn.sendMessage(
                        from,
                        {
                            text: videoMessage,
                            contextInfo: {
                                forwardingScore: 999,
                                isForwarded: true,
                                forwardedNewsletterMessageInfo: {
                                    newsletterName: "DARK DEW MD",
                                    newsletterJid: "120363270086174844@newsletter",
                                },
                                    externalAdReply: {
                                          title: `DEW-MD FB Downloader`,
                                          body: `Undifended : Powerd By DARK DEW-MD FB Information Search Engine`,
                                          thumbnailUrl: `https://pomf2.lain.la/f/9ggi67rj.jpg`,
                                          sourceUrl:  ``,
                                          mediaType: 1,
                                          renderLargerThumbnail: true
                                },
                            },
                        },
                        { quoted: mek },
                    );

                    conn.ev.on("messages.upsert", async (messageUpsert) => {
                        const msg = messageUpsert.messages[0];
                        if (!msg.message || !msg.message.extendedTextMessage)
                            return;

                        const userReply =
                            msg.message.extendedTextMessage.text.trim();
                        const messageContext =
                            msg.message.extendedTextMessage.contextInfo;

                        if (
                            messageContext &&
                            messageContext.stanzaId === sentMessage.key.id
                        ) {
                            // Send the selected video quality
                            if (userReply === "1" && hd) {
                                await conn.sendMessage( 
                                    from,
                                    {

                                        video: { url: hd },
                                        caption: `‎ ‎𝖥 𝖡  𝖧 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 7 2 0 𝗉 )
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴅᴇᴡ-ᴍᴅ*`,

                                    },
                                    { quoted: mek },
                                );
                            } else if (userReply === "2" && sd) {
                                await conn.sendMessage(
                                    from,
                                    {
                                        video: { url: sd },
                                        caption: `‎ ‎𝖥 𝖡  𝖲 𝖣  𝖵 𝖨 𝖣 𝖤 𝖮  ( 4 8 0 𝗉 )
‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎
> *©ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴅᴀʀᴋ ᴅᴇᴡ-ᴍᴅ*`,
                                    },
                                    { quoted: mek },





                                );
                            } else {
                                reply(
                                    "𝖯𝗅𝖾𝖺𝗌𝖾 𝖤𝗇𝗍𝖾𝗋 𝖵𝖺𝗅𝗂𝖽 𝖮𝗉𝗍𝗂𝗈𝗇 `1 𝖮𝗋 2` ❗",
                                );
                            }
                        }
                    });
                } else {
                    reply("No Video URL Found in the Response.");


                }
            } else {
                reply("Failed to Fetch Video Data.");
                }



        } catch (e) {
            console.error("Detailed Error:", e);
            reply(
                "𝖯𝗅𝖾𝖺𝗌𝖾 𝖦𝗂𝗏𝖾 𝖬𝖾 𝖯𝗋𝗈𝗏𝗂𝖽𝖾 `𝖥𝖺𝖼𝖾𝖻𝗈𝗈𝗄 𝖴𝗋𝗅` ❗",
            );
        }
    },
);
