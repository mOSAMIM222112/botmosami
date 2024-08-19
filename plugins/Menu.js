import fetch from "node-fetch";
const handler = async (
  m,
  { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems },
) => {
  if (usedPrefix == "a" || usedPrefix == "A") return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = "./Menu3.png";
    const d = new Date(new Date() + 3600000);
    const locale = "es";
    const week = d.toLocaleDateString(locale, { weekday: "long" });
    const date = d.toLocaleDateString(locale, {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const { money, joincount } = global.db.data.users[m.sender];
    const { exp, limit, level, role } = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter(
      (user) => user.registered == true,
    ).length;
    const rtotal = Object.entries(global.db.data.users).length || "0";
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = "@" + m.sender.split("@s.whatsapp.net")[0];
    const doc = [
      "pdf",
      "zip",
      "vnd.openxmlformats-officedocument.presentationml.presentation",
      "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "vnd.openxmlformats-officedocument.wordprocessingml.document",
    ];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `┏━━━━━━━━━━━━━━━┓
┣ *hello, ${taguser}*
┗━━━━━━━━━━━━━━━┛
┏━━━━━━━━━━━━━━━┓

    By : *@м.ṡ.м / مِٰـصِٰـۛৣــــمِٰمِٰ🇸🇰༒*
    

*_https://wa.me/+212620986991?text=Wassup.MSM❤️_*


        WELCOME TO BEST BOT EVER

      *وقت عمل البوت : 12صباح حتال 11ليل*

*مهام هذا البوت هو جعلك تستفيذ من اشتراك* (6*) *لتحصل على كل مزايا الانترنت كاملة*
                       
       
       *⚠️للتعامل مع البوت يجب كتابة نقطة . قبل الامر⚠️* 

      

Admin🇸🇰:

┣ ඬ⃟ 🔰 _${usedPrefix}Owner_

Download⏯️:

┣ ඬ⃟ 🔰 _${usedPrefix}gpt_
┣ ඬ⃟ 🔰 _${usedPrefix}play_
┣ ඬ⃟ 🔰 _${usedPrefix}apk_
┣ ඬ⃟ 🔰 _${usedPrefix}sticker_
┣ ඬ⃟ 🔰 _${usedPrefix}tiktok_
┣ ඬ⃟ 🔰 _${usedPrefix}wm_
┣ ඬ⃟ 🔰 _${usedPrefix}yta_
┣ ඬ⃟ 🔰 _${usedPrefix}ytv_
┣ ඬ⃟ 🔰 _${usedPrefix}yts_
┣ ඬ⃟ 🔰 _${usedPrefix}trt_
┣ ඬ⃟ 🔰 _${usedPrefix}Modapk_
┣ ඬ⃟ 🔰 _${usedPrefix}Pinterest_
┣ ඬ⃟ 🔰 _${usedPrefix}Topdf_
┣ ඬ⃟ 🔰 _${usedPrefix}Cleartmp_
┣ ඬ⃟ 🔰 _${usedPrefix}Mediafire_
┣ ඬ⃟ 🔰 _${usedPrefix}Drive_
┣ ඬ⃟ 🔰 _${usedPrefix}Google_
┣ ඬ⃟ 🔰 _${usedPrefix}Facebook_
┣ ඬ⃟ 🔰 _${usedPrefix}Instagram_


GRoups❤️‍🩹:

_*(Ila Bghiti Dkhl Lbot Flgroup.Ktb (.owner) W 9olha Lih)*_

┣ ඬ⃟ 🔰 _${usedPrefix}Warning_
┣ ඬ⃟ 🔰 _${usedPrefix}Tourl_
┣ ඬ⃟ 🔰 _${usedPrefix}InfoGroup_
┣ ඬ⃟ 🔰 _${usedPrefix}Add_
┣ ඬ⃟ 🔰 _${usedPrefix}Kick_
┣ ඬ⃟ 🔰 _${usedPrefix}Tagall_
┣ ඬ⃟ 🔰 _${usedPrefix}SetBye_
┣ ඬ⃟ 🔰 _${usedPrefix}SetWelcome_
┣ ඬ⃟ 🔰 _${usedPrefix}Mute_
┣ ඬ⃟ 🔰 _${usedPrefix}Img_
┣ ඬ⃟ 🔰 _${usedPrefix}Attp_
┣ ඬ⃟ 🔰 _${usedPrefix}Spotify_
┣ ඬ⃟ 🔰 _${usedPrefix}Spotifys_
   
COOL STUFF'S 🎁:
┣ ඬ⃟ 🔰 _${usedPrefix}Style(Smitk)_
┣ ඬ⃟ 🔰 _${usedPrefix}character_
┣ ඬ⃟ 🔰 _${usedPrefix}Gay_
┣ ඬ⃟ 🔰 _${usedPrefix}truth_
┣ ඬ⃟ 🔰 _${usedPrefix}Waste_
┣ ඬ⃟ 🔰 _${usedPrefix}Blur_
┣ ඬ⃟ 🔰 _${usedPrefix}Gay2_
┣ ඬ⃟ 🔰 _${usedPrefix}Hornycard_
┣ ඬ⃟ 🔰 _${usedPrefix}ItsSoStupid-
┣ ඬ⃟ 🔰 _${usedPrefix}YtComment_
┣ ඬ⃟ 🔰 _${usedPrefix}Simpcard_
┣ ඬ⃟ 🔰 _${usedPrefix}Lolice_
┣ ඬ⃟ 🔰 _${usedPrefix}TicTacToe_
┣ ඬ⃟ 🔰 _${usedPrefix}Ship_
┣ ඬ⃟ 🔰 _${usedPrefix}Meme_
┣ ඬ⃟ 🔰 _${usedPrefix}emojimix_
┣ ඬ⃟ 🔰 _${usedPrefix}Hd_
┣ ඬ⃟ 🔰 _${usedPrefix}couplepp_
┣ ඬ⃟ 🔰 _${usedPrefix}qr_
┣ ඬ⃟ 🔰 _${usedPrefix}readqr_
┣ ඬ⃟ 🔰 _${usedPrefix}Lyrics_
┣ ඬ⃟ 🔰 _${usedPrefix}Dehaze_
┣ ඬ⃟ 🔰 _${usedPrefix}Recolor_
┣ ඬ⃟ 🔰 _${usedPrefix}Drawing_
┣ ඬ⃟ 🔰 _${usedPrefix}Dalle2_
┣ ඬ⃟ 🔰 _${usedPrefix}Logos_
┣ ඬ⃟ 🔰 _${usedPrefix}Lg1_
┣ ඬ⃟ 🔰 _${usedPrefix}Lg2_
┣ ඬ⃟ 🔰 _${usedPrefix}Lg3_
┣ ඬ⃟ 🔰 _${usedPrefix}Logo(1-4)_
┣ ඬ⃟ 🔰 _${usedPrefix}Wallpaper_
┣ ඬ⃟ 🔰 _${usedPrefix}Tomp3_
┣ ඬ⃟ 🔰 _${usedPrefix}ToGif_
┣ ඬ⃟ 🔰 _${usedPrefix}Tovideo_
┣ ඬ⃟ 🔰 _${usedPrefix}ToImg_
┣ ඬ⃟ 🔰 _${usedPrefix}Tovn_
┣ ඬ⃟ 🔰 _${usedPrefix}Toanime_



┗━━━━━━━━━━━━━━┛`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {
        key: {
          participants: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
          fromMe: false,
          id: "Halo",
        },
        message: {
          contactMessage: {
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${
              m.sender.split("@")[0]
            }:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          },
        },
        participant: "0@s.whatsapp.net",
      };
      conn.sendMessage(
        m.chat,
        {
          image: pp,
          caption: str.trim(),
          mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(
            (v) => v[1] + "@s.whatsapp.net",
          ),
        },
        { quoted: m },
      );
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {
        key: {
          participants: "0@s.whatsapp.net",
          remoteJid: "status@broadcast",
          fromMe: false,
          id: "Halo",
        },
        message: {
          contactMessage: {
            vcard: `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${
              m.sender.split("@")[0]
            }:${m.sender.split("@")[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`,
          },
        },
        participant: "0@s.whatsapp.net",
      };
      conn.sendMessage(
        m.chat,
        {
          image: pp,
          caption: str.trim(),
          mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map(
            (v) => v[1] + "@s.whatsapp.net",
          ),
        },
        { quoted: fkontak2 },
      );
    }
  } catch {
    conn.reply(
      m.chat,
      "*[❗𝐈𝐍𝐅𝐎❗] 𝙴𝙻 𝙼𝙴𝙽𝚄 𝚃𝙸𝙴𝙽𝙴 𝚄𝙽 𝙴𝚁𝚁𝙾𝚁 𝚈 𝙽𝙾 𝙵𝚄𝙴 𝙿𝙾𝚂𝙸𝙱𝙻𝙴 𝙴𝙽𝚅𝙸𝙰𝚁𝙻𝙾, 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙿𝚁𝙾𝙿𝙸𝙴𝚃𝙰𝚁𝙸𝙾 𝙳𝙴𝙻 𝙱𝙾𝚃*",
      m,
    );
  }
};
handler.command =
  /^(menu|menú|memu|memú|help|info|comandos|allmenu|2help|menu1.2|ayuda|commands|commandos|cmd)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
}
