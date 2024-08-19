//prince lo9mane
import translate from "@vitalets/google-translate-api";
import fetch from "node-fetch";

const handler = async (m, { text, command, args, usedPrefix }) => {
  if (!text)
    throw `*[❗] Please send text to translate*\n\n*Example: ${
      usedPrefix + command
    } Hello bot*`;

  try {
    const api = await fetch(
      "https://api.simsimi.net/v2/?text=" + text + "&lc=ar",
    );
    const resSimi = await api.json();
    m.reply(resSimi.success);
  } catch {
    try {
      if (text.includes("Hello")) text = text.replace("Hello", "Hola");
      if (text.includes("hello")) text = text.replace("hello", "Hola");
      if (text.includes("HELLO")) text = text.replace("HELLO", "HOLA");
      const reis = await fetch(
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" +
          text,
      );
      const resu = await reis.json();
      const nama = m.pushName || "1";
      const api = await fetch(
        "http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" +
          nama +
          "&msg=" +
          resu[0][0][0],
      );
      const res = await api.json();
      const reis2 = await fetch(
        "https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" +
          res.cnt,
      );
      const resu2 = await reis2.json();
      m.reply(resu2[0][0][0]);
    } catch {
      throw `*[❗] Error, unable to process the request*`;
    }
  }
};

handler.help = ["simi", "bot"].map((v) => v + " <text>");
handler.tags = ["fun"];
handler.command = /^((sim)?simi|bot|alexa|cortana)$/i;
export default handler;
