import fetch from "node-fetch";
import translate from "@vitalets/google-translate-api";
const handler = async (m, { conn, usedPrefix, command, text }) => {
  if (m.isGroup) return;
  const aki = global.db.data.users[m.sender].akinator;
  if (text == "end") {
    if (!aki.sesi)
      return m.reply(
        "*[❗] 𝙰𝙲𝚃𝚄𝙰𝙻𝙼𝙴𝙽𝚃𝙴 𝙽𝙾 𝙴𝚂𝚃𝙰𝚂 𝙴𝙽 𝚄𝙽𝙰 𝚂𝙴𝚂𝙸𝙾𝙽 (𝙿𝙰𝚁𝚃𝙸𝙳𝙰) 𝙳𝙴 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁*",
      );
    aki.sesi = false;
    aki.soal = null;
    m.reply("*[❗] 𝚂𝙴 𝙴𝙻𝙸𝙼𝙸𝙽𝙾 𝙲𝙾𝙽 𝙴𝚇𝙸𝚃𝙾 𝙻𝙰 𝚂𝙴𝚂𝙸𝙾𝙽 (𝙿𝙰𝚁𝚃𝙸𝙳𝙰) 𝙳𝙴 𝙰𝙺𝙸𝙽𝙰𝚃𝙾𝚁*");
  } else {
    if (aki.sesi)
      return conn.reply(m.chat, "*[❗] Rak Ba9i dakhl f lo3ba*", aki.soal);
    try {
      const res = await fetch(
        `https://api.lolhuman.xyz/api/akinator/start?apikey=${lolkeysapi}`,
      );
      const anu = await res.json();
      if (anu.status !== 200) throw "*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*";
      const {
        server,
        frontaddr,
        session,
        signature,
        question,
        progression,
        step,
      } = anu.result;
      aki.sesi = true;
      aki.server = server;
      aki.frontaddr = frontaddr;
      aki.session = session;
      aki.signature = signature;
      aki.question = question;
      aki.progression = progression;
      aki.step = step;
      const resultes2 = await translate(question, {
        to: "es",
        autoCorrect: false,
      });
      let txt = `🎮 *𝐀𝐊𝐈𝐍𝐀𝐓𝐎𝐑* 🎮\n\n*لاعب: @${
        m.sender.split("@")[0]
      }*\n*سؤال: ${resultes2.text}*\n\n`;
      txt += "*0 - نعم*\n";
      txt += "*1 - لا*\n";
      txt += "*2 - لا أعرف*\n";
      txt += "*3 - ربما نعم*\n";
      txt += "*4 - على الاغلب لا*\n\n";
      txt += `*DIR HAD L COMMAND ${
        usedPrefix + command
      } "3AD KTB MORAH LJAWAB METAL : .akinator نعم"*`;
      const soal = await conn.sendMessage(
        m.chat,
        { text: txt, mentions: [m.sender] },
        { quoted: m },
      );
      aki.soal = soal;
    } catch {
      m.reply("*[❗] 𝙴𝚁𝚁𝙾𝚁, 𝙸𝙽𝚃𝙴𝙽𝚃𝙰𝙻𝙾 𝙼𝙰𝚂 𝚃𝙰𝚁𝙳𝙴*");
    }
  }
};
handler.menu = ["akinator"];
handler.tags = ["game"];
handler.command = /^(akinator)$/i;
export default handler;
