//import db from '../lib/database.js'

let handler = async (m, { conn, isOwner, isAdmin, isROwner }) => {
  if (!(isAdmin || isOwner)) return dfail("admin", m, conn);
  global.db.data.chats[m.chat].isBanned = true;
  m.reply("💝 @м.ṡ.м/مِٰـصِٰـۛৣــــمِ🇸🇰༒ Bot 💝 mute this group");
};
handler.help = ["banchat"];
handler.tags = ["owner"];
handler.command = ["mute", "off"];

export default handler;
