const handler = async (m, { conn }) => {
  const who = m.quoted
    ? m.quoted.sender
    : m.mentionedJid && m.mentionedJid[0]
      ? m.mentionedJid[0]
      : m.fromMe
        ? conn.user.jid
        : m.sender;
  conn.sendFile(
    m.chat,
    global.API("https://some-random-api.com", "/canvas/horny", {
      avatar: await conn
        .profilePictureUrl(who, "image")
        .catch((_) => "https://telegra.ph/file/24fa902ead26340f3df2c.png"),
    }),
    "hornycard.png",
    "*A7777 3la HADA 🥵🔥*",
    m,
  );
};
handler.help = ["hornycard", "hornylicense"];
handler.tags = ["maker"];
handler.command = /^(hornycard|hornylicense)$/i;
export default handler;
