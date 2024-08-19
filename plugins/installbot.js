//prince lo9mane
const _0x3f3265 = _0xcf97;
(function (_0x5d84cb, _0x42c67b) {
  const _0xab2789 = _0xcf97,
    _0x3123c2 = _0x5d84cb();
  while (!![]) {
    try {
      const _0x54c040 =
        -parseInt(_0xab2789(0x1c9)) / 0x1 +
        -parseInt(_0xab2789(0x1ca)) / 0x2 +
        parseInt(_0xab2789(0x1d5)) / 0x3 +
        -parseInt(_0xab2789(0x1c8)) / 0x4 +
        (-parseInt(_0xab2789(0x1d9)) / 0x5) *
          (parseInt(_0xab2789(0x1cb)) / 0x6) +
        (parseInt(_0xab2789(0x1d0)) / 0x7) *
          (parseInt(_0xab2789(0x1ce)) / 0x8) +
        (parseInt(_0xab2789(0x1d1)) / 0x9) * (parseInt(_0xab2789(0x1d6)) / 0xa);
      if (_0x54c040 === _0x42c67b) break;
      else _0x3123c2["push"](_0x3123c2["shift"]());
    } catch (_0x5d8fd6) {
      _0x3123c2["push"](_0x3123c2["shift"]());
    }
  }
})(_0x5320, 0x81b2e);
function _0x5320() {
  const _0x375153 = [
    "command",
    "\x0a*—◉\x20𝚃𝚄𝚃𝙾𝚁𝙸𝙰𝙻\x20replit\x20𝙷𝙾𝚂𝚃*\x0a>\x20Tutorial:\x20\x0ahttps://youtu.be/KKcwhjsNSCw\x0a>\x20Pagina\x20Oficial:\x20https://replit.com\x0a>\x20Dashboard:\x20https://replit.com/@LihLobu/Prince-lo9mane\x20\x0a\x0a------------------------------------",
    "trim",
    "1063515OlrLZO",
    "1067550azTwXn",
    "key",
    "chat",
    "42235UNGEbm",
    "sender",
    "relayMessage",
    "951004Zhuclr",
    "1001878eIBpop",
    "2007406OcktQb",
    "18IoePDi",
    "jid",
    "user",
    "2192NNAFBx",
    "𝐏𝐫𝐢𝐧𝐜𝐞(𝑳𝒐9𝐦𝐚𝐧𝐞)!❤️𓂀.",
    "18837nEPUFU",
    "144dluVDQ",
  ];
  _0x5320 = function () {
    return _0x375153;
  };
  return _0x5320();
}
import { generateWAMessageFromContent } from "@adiwajshing/baileys";
let handler = async (_0x5ebc0c, { conn: _0x954120 }) => {
  const _0xf7a621 = _0xcf97;
  let _0x2470da = _0xf7a621(0x1d3),
    _0x2fb3c0 = {
      quoted: _0x5ebc0c,
      userJid: _0x954120[_0xf7a621(0x1cd)][_0xf7a621(0x1cc)],
    },
    _0x5aa592 = generateWAMessageFromContent(
      _0x5ebc0c["chat"],
      {
        extendedTextMessage: {
          text: ("" + _0x2470da)[_0xf7a621(0x1d4)](),
          contextInfo: {
            externalAdReply: {
              title: _0xf7a621(0x1cf),
              body: null,
              thumbnail: imagen1,
              sourceUrl: "https://replit.com/@LihLobu/Prince-lo9mane",
            },
            mentionedJid: [_0x5ebc0c[_0xf7a621(0x1c6)]],
          },
        },
      },
      _0x2fb3c0,
    );
  _0x954120[_0xf7a621(0x1c7)](
    _0x5ebc0c[_0xf7a621(0x1d8)],
    _0x5aa592["message"],
    {
      messageId: _0x5aa592[_0xf7a621(0x1d7)]["id"],
      mentions: [_0x5ebc0c[_0xf7a621(0x1c6)]],
    },
  );
};
function _0xcf97(_0x3a0675, _0x35a0f3) {
  const _0x53207b = _0x5320();
  return (
    (_0xcf97 = function (_0xcf97e6, _0x31e026) {
      _0xcf97e6 = _0xcf97e6 - 0x1c6;
      let _0xb155b3 = _0x53207b[_0xcf97e6];
      return _0xb155b3;
    }),
    _0xcf97(_0x3a0675, _0x35a0f3)
  );
}
handler[_0x3f3265(0x1d2)] = /^(installbot)/i;
export default handler;
