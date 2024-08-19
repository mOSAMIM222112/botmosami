import fetch from "node-fetch";
import yts from "yt-search";
import ytdl from "ytdl-core";
import axios from "axios";
import { youtubedl, youtubedlv2 } from "@bochilteam/scraper";

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
  let q,
    v,
    yt,
    dl_url,
    ttl,
    size,
    lolhuman,
    lolh,
    n,
    n2,
    n3,
    n4,
    cap,
    qu,
    currentQuality;
  if (!text) throw `*Ex : ${usedPrefix + command}Billie Eilish - Bellyache*`;
  try {
    const yt_play = await search(args.join(" "));
    let additionalText = "";
    if ((command === "play", "yta")) {
      additionalText = "𝘼𝙐𝘿𝙄𝙊 🔊";
    }
    let captionvid = `*< DESCARGAS - PLAY />*\n\n▢ Title : ${yt_play[0].title}`;
    await conn.sendMessage(
      m.chat,
      {
        text: captionvid,
        contextInfo: {
          externalAdReply: {
            title: yt_play[0].title,
            body: packname,
            thumbnailUrl: yt_play[0].thumbnail,
            mediaType: 1,
            showAdAttribution: true,
            renderLargerThumbnail: true,
          },
        },
      },
      { quoted: m },
    );

    if (command == "play") {
      try {
        let q = "128kbps";
        let v = yt_play[0].url;
        const yt = await youtubedl(v).catch(async (_) => await youtubedlv2(v));
        const dl_url = await yt.audio[q].download();
        const ttl = await yt.title;
        const size = await yt.audio[q].fileSizeH;
        await conn.sendMessage(
          m.chat,
          {
            audio: { url: dl_url },
            mimetype: "audio/mpeg",
            contextInfo: {
              externalAdReply: {
                title: ttl,
                body: "",
                thumbnailUrl: yt_play[0].thumbnail,
                mediaType: 1,
                showAdAttribution: true,
                renderLargerThumbnail: true,
              },
            },
          },
          { quoted: m },
        );
      } catch {
        try {
          // ... (unchanged code)
        } catch {
          try {
            // ... (unchanged code)
          } catch {
            try {
              // ... (unchanged code)
            } catch {
              // ... (unchanged code)
            }
          }
        }
      }
    }
  } catch {
    handler.limit = 0;
  }
};

handler.command = ["play", "yta"];
export default handler;

async function search(query, options = {}) {
  const search = await yts.search({ query, hl: "es", gl: "ES", ...options });
  return search.videos;
}
