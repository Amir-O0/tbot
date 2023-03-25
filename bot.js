require("dotenv").config();
const ytdl = require("ytdl-core");
const { Telegraf } = require("telegraf");


const bot = new Telegraf("5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w");
const downloadBaseUrl = "https://www.youtube.com/watch?v=";

bot.start((ctx) =>
  ctx.reply(
    "Welcome! Send me a YouTube video link, and I will download it for you."
  )
);

bot.on("message", async (ctx) => {
  const videoUrl = ctx.message.text;
  if (ytdl.validateURL(videoUrl)) {
    const videoId = ytdl.getURLVideoID(videoUrl);
    const videoInfo = await ytdl.getInfo(videoId);
    const videoTitle = videoInfo.videoDetails.title;
    const videoDownloadUrl = `${downloadBaseUrl}${videoId}`;
    await ctx.reply(`Downloading "${videoTitle}"...`);
    const videoStream = ytdl(videoDownloadUrl);
    ctx.replyWithVideo({ source: videoStream });
  } else {
    ctx.reply(
      "Sorry, I can only download videos from YouTube. Please send me a valid YouTube link."
    );
  }
});

bot.launch();
