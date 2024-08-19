import { pinterest } from "@bochilteam/scraper";

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text)
    throw `@м.ṡ.м/مِٰـصِٰـۛৣــــمِ🇸🇰༒ printerest\n\n✔ Ex: ${
      usedPrefix + command
    } පියුමි අක්කි`;
  const json = await pinterest(text);
  conn.sendFile(
    m.chat,
    json.getRandom(),
    "pinterest.jpg",
    `
*🇸🇰  Pinterest:*  ${text}
`.trim(),
    m,
  );
};
handler.help = ["pinterest", "pins"];
handler.tags = ["img"];
handler.command = ["pinterest"];

export default handler;
