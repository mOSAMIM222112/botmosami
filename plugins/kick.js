const _0x267204 = _0x308c;
function _0x308c(_0x4aedcc, _0x140090) {
  const _0x5b24a2 = _0x5b24();
  return (
    (_0x308c = function (_0x308cf6, _0x236c8a) {
      _0x308cf6 = _0x308cf6 - 0x146;
      let _0x519277 = _0x5b24a2[_0x308cf6];
      return _0x519277;
    }),
    _0x308c(_0x4aedcc, _0x140090)
  );
}
(function (_0x147863, _0x7045a3) {
  const _0x893cb2 = _0x308c,
    _0x8b1661 = _0x147863();
  while (!![]) {
    try {
      const _0x37c157 =
        (-parseInt(_0x893cb2(0x14a)) / 0x1) *
          (parseInt(_0x893cb2(0x158)) / 0x2) +
        parseInt(_0x893cb2(0x153)) / 0x3 +
        -parseInt(_0x893cb2(0x159)) / 0x4 +
        parseInt(_0x893cb2(0x149)) / 0x5 +
        parseInt(_0x893cb2(0x14e)) / 0x6 +
        (parseInt(_0x893cb2(0x14f)) / 0x7) *
          (parseInt(_0x893cb2(0x147)) / 0x8) +
        -parseInt(_0x893cb2(0x155)) / 0x9;
      if (_0x37c157 === _0x7045a3) break;
      else _0x8b1661["push"](_0x8b1661["shift"]());
    } catch (_0x1b9a32) {
      _0x8b1661["push"](_0x8b1661["shift"]());
    }
  }
})(_0x5b24, 0x9678c);
let handler = async (
  _0x1a6524,
  {
    conn: _0x199b6b,
    participants: _0x5adde2,
    usedPrefix: _0x52b55e,
    command: _0x2b74d6,
  },
) => {
  const _0x24d5aa = _0x308c;
  let _0x6f7a8a =
    "Please\x20boza\x20,Use\x20Correct\x20Command\x20of\x20the\x20💝\x20Queen\x20Hentai\x20💝\x20WA\x20BOT\x0a" +
    (_0x52b55e + _0x2b74d6) +
    _0x24d5aa(0x154);
  if (!_0x1a6524[_0x24d5aa(0x157)][0x0] && !_0x1a6524[_0x24d5aa(0x151)])
    return _0x1a6524[_0x24d5aa(0x15a)](_0x6f7a8a, _0x1a6524["chat"], {
      mentions: _0x199b6b[_0x24d5aa(0x150)](_0x6f7a8a),
    });
  let _0x513911 = _0x1a6524["mentionedJid"][0x0]
      ? _0x1a6524[_0x24d5aa(0x157)][0x0]
      : _0x1a6524["quoted"]["sender"],
    _0x526473 = _0x1a6524[_0x24d5aa(0x14b)]["split"]`-`[0x0];
  await _0x199b6b["groupParticipantsUpdate"](
    _0x1a6524[_0x24d5aa(0x14b)],
    [_0x513911],
    _0x24d5aa(0x148),
  ),
    _0x1a6524[_0x24d5aa(0x15a)]("😁\x20User\x20kicked,වැඩේ\x20හරි");
};
(handler["help"] = [_0x267204(0x14c)]),
  (handler["tags"] = [_0x267204(0x156)]),
  (handler["command"] = [_0x267204(0x152), _0x267204(0x14d)]),
  (handler["admin"] = !![]),
  (handler["group"] = !![]),
  (handler[_0x267204(0x146)] = !![]);
export default handler;
function _0x5b24() {
  const _0x129b11 = [
    "group",
    "mentionedJid",
    "162AsBWRL",
    "674364QKypJf",
    "reply",
    "botAdmin",
    "120vvHzXl",
    "remove",
    "5046880pRfWfs",
    "4427AFuAqd",
    "chat",
    "kick\x20@user",
    "expulsar",
    "7295676XopgYM",
    "435197cNTFtx",
    "parseMention",
    "quoted",
    "kick",
    "3076707jOAhJu",
    "*\x20@tag",
    "27359514NIsMzd",
  ];
  _0x5b24 = function () {
    return _0x129b11;
  };
  return _0x5b24();
}
