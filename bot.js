var Telegram = require("node-telegram-bot-api");
var bot = new Telegram("5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w", {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
  if (msg.chat.type === "private") {
    bot.sendMessage(
      msg.chat.id,
      "Hello Dear " + msg.from.first_name + " Welcome To My Bot",
      {
        reply_markup: {
          inline_keyboard: [
            [
              { text: "Projects", callback_data: "projects" },
              { text: "Send Messag", callback_data: "send_msg" },
            ],
            [{ text: "Me", url: "https://t.me/Amiro_im" }],
          ],
        },
      }
    );
  } else {
    bot.sendMessage(
      msg.chat.id,
      "AmiroBot" + "\n" + msg.from.first_name + " Chose:",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Send Secret Message🔐", callback_data: "sec_msg" }],
            [
              {
                text: "Your accont informations",
                callback_data: "Project/UserInformation",
              },
            ],
          ],
        },
      }
    );
  }
});

// Handle callback queries
bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;
  const message_id = callbackQuery.message.message_id;

  if (action === "BackToHome") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });

    if (msg.chat.type === "private") {
      bot.sendMessage(
        msg.chat.id,
        "Hello Dear " + msg.from.first_name + " Welcome To My Bot",
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Projects", callback_data: "projects" },
                { text: "Send Messag", callback_data: "sec_msg" },
              ],
              [{ text: "Me", url: "https://t.me/Amiro_im" }],
            ],
          },
        }
      );
    } else {
      bot.sendMessage(
        msg.chat.id,
        "AmiroBot" + "\n" + msg.from.first_name + " Chose:",
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "Send Secret Message🔐", callback_data: "sec_msg" }],
              [
                {
                  text: "Your accont informations",
                  callback_data: "Project/UserInformation",
                },
              ],
            ],
          },
        }
      );
    }
  }

  if (action === "sended_msg") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });
    if (msg.chat.type === "private") {
      bot.sendMessage(
        msg.chat.id,
        "Hello Dear " + msg.from.first_name + " Welcome To My Bot",
        {
          reply_markup: {
            inline_keyboard: [
              [
                { text: "Projects", callback_data: "projects" },
                { text: "Send Messag", callback_data: "send_msg" },
              ],
              [{ text: "Me", url: "https://t.me/Amiro_im" }],
            ],
          },
        }
      );
    } else {
      bot.sendMessage(msg.chat.id, "Your Message sended", {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Send Secret Message🔐", callback_data: "send_msg" }],
            [
              {
                text: "Your accont informations",
                callback_data: "Project/UserInformation",
              },
            ],
          ],
        },
      });
    }
  }

  if (action === "send_msg") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });

    bot.sendMessage(
      msg.chat.id,
      "Send your message \n" + "( Please dont send Gif - Image - Video !)  ",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "🔙Back to main menu", callback_data: "BackToHome" }],
            [{ text: "Send!", callback_data: "sended_msg" }],
          ],
        },
      }
    );
  }

  if (action === "projects") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });

    bot.sendMessage(msg.chat.id, "They are my Projects", {
      reply_markup: {
        inline_keyboard: [
          [{ text: "My own Site", url: "https://Aho-amiro.ir" }],
          [{ text: "Chat app", callback_data: "Project/ChatAppReact" }],
          [{ text: "Second Chat app", callback_data: "Project/ChatAppPhp" }],
          [
            {
              text: "Your accont informations",
              callback_data: "Project/UserInformation",
            },
          ],
          [{ text: "🔙Back to main menu", callback_data: "BackToHome" }],
        ],
      },
    });
  }

  if (action === "Project/ChatAppReact") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });

    bot.sendMessage(
      msg.chat.id,
      "in this site you can Chat , Make Groups or invite your Friends to chat Here [Comming Soon!]",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Visit➡️", url: "https://RChat.Aho-amiro.ir" }],
            [{ text: "🔙Back to Projects menu", callback_data: "projects" }],
            [{ text: "🔙Back to main menu", callback_data: "BackToHome" }],
          ],
        },
      }
    );
  }

  if (action === "Project/ChatAppPhp") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });

    bot.sendMessage(
      msg.chat.id,
      "in this site you can Chat , Make Groups or invite your Friends to chat Here [Comming Soon!]",
      {
        reply_markup: {
          inline_keyboard: [
            [{ text: "Visit➡️", url: "https://PChat.Aho-amiro.ir" }],
            [{ text: "🔙Back to Projects menu", callback_data: "projects" }],
            [{ text: "🔙Back to main menu", callback_data: "BackToHome" }],
          ],
        },
      }
    );
  }

  if (action === "Project/UserInformation") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });

    if (msg.chat.type === "private") {
      bot.sendMessage(
        msg.chat.id,
        "\n Your name: " +
          msg.from.first_name +
          "\n Your Username: " +
          "@" +
          msg.from.username +
          "\n Your idNumber: " +
          msg.from.id,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "🔙Back to Projects menu", callback_data: "projects" }],
              [{ text: "🔙Back to main menu", callback_data: "BackToHome" }],
            ],
          },
        }
      );
    } else {
      bot.sendMessage(
        msg.chat.id,
        "\n Group name: " +
          msg.chat.title +
          "\n Group UserName: " +
          "@" +
          msg.chat.username +
          "\n Group type: " +
          msg.chat.type +
          "\n Your full name: " +
          msg.from.first_name +
          "\n Your Username: " +
          "@" +
          msg.from.username +
          "\n Your idNumber: " +
          msg.from.id,
        {
          reply_markup: {
            inline_keyboard: [
              [{ text: "🔙Back to main menu", callback_data: "BackToHome" }],
            ],
          },
        }
      );
    }
  }
});

bot.onText(/clr/, (msg) => {
  for (let i = 0; i < 99; i++) {
    bot.deleteMessage(msg.chat.id, msg.message_id - i).catch((er) => {
      return;
    });
    //if there isn't any messages to delete bot simply return
  }
});

bot.onText(/\/info/, (msg) => {
  if (msg.chat.type === "private") {
    bot.sendMessage(
      msg.chat.id,
      "\n Your name: " +
        msg.from.first_name +
        "\n Your Username: " +
        "@" +
        msg.from.username +
        "\n Your idNumber: " +
        msg.from.id
    );
  } else {
    bot.sendMessage(
      msg.chat.id,
      "\n Messege Number " +
        msg.message_id +
        "\n Group name: " +
        msg.chat.title +
        "\n Group UserName: " +
        "@" +
        msg.chat.username +
        "\n Group type: " +
        msg.chat.type +
        "\n Group ID: " +
        msg.chat.id +
        "\n\n " +
        "~ Your Informations ~" +
        "\n " +
        "\n Your name: " +
        msg.from.first_name +
        "\n Your Username: " +
        "@" +
        msg.from.username +
        "\n Your idNumber: " +
        msg.from.id
    );
  }
});

bot.on("message", (msg) => {
  console.log(msg);
  console.log(msg.text);
  
    
  
});
