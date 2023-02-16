var Telegram = require("node-telegram-bot-api");
var bot = new Telegram("6029156425:AAF17qBdzWbrgFiC_9VCZH7XPC8CX-TOJlM", {
  polling: true,
});

bot.on("message", (msg) => {
  console.log(msg);
  console.log(msg.text);
  function delete50sec(a, b) {
    for (let i = 0; i < 10; i++) {
      bot.deleteMessage(msg.chat.id, msg.message_id - i).catch((er) => {
        return;
      });
    }
  }
  setTimeout(delete50sec, 5000);

  if (msg.text === "/info" || msg.text === "clr" || msg.text === "/start") {
    bot.onText(/\/start/, (msg) => {
      if (msg.chat.type === "private") {
        bot.sendMessage(
          msg.chat.id,
          "سلام " + msg.from.first_name + " عزیز ! \n به ربات من خوش اومدی",
          {
            reply_markup: {
              inline_keyboard: [
                [
                  { text: "پروژه ها", callback_data: "projects" },
                  { text: "ارسال پیام", callback_data: "send_msg" },
                ],
                [{ text: "من", url: "https://t.me/Amiro_im" }],
              ],
            },
            reply_to_message_id: msg.message_id,
          }
        );
      } else {
        bot.sendMessage(
          msg.chat.id,
          "AmiroBot" + "\n" + msg.from.first_name + " انتخاب کنید:",
          {
            reply_markup: {
              inline_keyboard: [
                [{ text: "ارسال پیام", callback_data: "sec_msg" }],
                [
                  {
                    text: "اطلاعات اکانت شما",
                    callback_data: "Project/UserInformation",
                  },
                ],
              ],
            },
            reply_to_message_id: msg.message_id,
          }
        );
      }
    });

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
            "سلام " + msg.from.first_name + " عزیز به ربات من خوش اومدی",
            {
              reply_markup: {
                inline_keyboard: [
                  [
                    { text: "پروژه ها", callback_data: "projects" },
                    { text: "ارسال پیام", callback_data: "sec_msg" },
                  ],
                  [{ text: "من", url: "https://t.me/Amiro_im" }],
                ],
              },
              reply_to_message_id: msg.message_id,
            }
          );
        } else {
          bot.sendMessage(
            msg.chat.id,
            "AmiroBot" + "\n" + msg.from.first_name + " انتخاب کنیذ:",
            {
              reply_markup: {
                inline_keyboard: [
                  [{ text: "ارسال پیام", callback_data: "sec_msg" }],
                  [
                    {
                      text: "اطلاعات اکانت شما",
                      callback_data: "Project/UserInformation",
                    },
                  ],
                ],
              },
              reply_to_message_id: msg.message_id,
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
            "سلام " + msg.from.first_name + " عزیز به ربات من خوش اومدی",
            {
              reply_markup: {
                inline_keyboard: [
                  [
                    { text: "پروژه ها", callback_data: "projects" },
                    { text: "ارسال پیام", callback_data: "send_msg" },
                  ],
                  [{ text: "من", url: "https://t.me/Amiro_im" }],
                ],
              },
            }
          );
        } else {
          bot.sendMessage(msg.chat.id, "پیام شماارسال شد!", {
            reply_markup: {
              inline_keyboard: [
                [{ text: "ارسال پیام", callback_data: "send_msg" }],
                [
                  {
                    text: "اطلاعات اکانت شما",
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
          " پیام خود را ارسال کنید \n" +
            "( لطفا از ارسال گیف و عکس یا فیلم خودداری کنید! )  ",
          {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "🔙برگشت به منوی اصلی",
                    callback_data: "BackToHome",
                  },
                ],
                [{ text: "ارسال!", callback_data: "sended_msg" }],
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
              [{ text: "سایت ما", url: "https://Aho-amiro.ir" }],
              [{ text: "Chat app", callback_data: "Project/ChatAppReact" }],
              [
                {
                  text: "Second Chat app",
                  callback_data: "Project/ChatAppPhp",
                },
              ],
              [
                {
                  text: "اطلاعات اکانت شما",
                  callback_data: "Project/UserInformation",
                },
              ],
              [{ text: "🔙برگشت به منوی اصلی", callback_data: "BackToHome" }],
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
          "در این سایت شما میتوانید با ثبت نام اکانت خود را بسازید و با دوستان یا افرادی که اکانت آنها در لیست وجود دارد حرف بزنید",
          {
            reply_markup: {
              inline_keyboard: [
                [
                  {
                    text: "رفتن به صفحه➡️",
                    url: "https://chat.Aho-amiro.ir",
                  },
                ],
                [
                  {
                    text: "🔙برگشت به منوی پروژه ها",
                    callback_data: "projects",
                  },
                ],
                [
                  {
                    text: "🔙برگشت به منوی اصلی",
                    callback_data: "BackToHome",
                  },
                ],
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
                [{ text: "Visit➡️", url: "https://chat2.Aho-amiro.ir" }],
                [
                  {
                    text: "🔙برگشت به منوی پروژه ها",
                    callback_data: "projects",
                  },
                ],
                [
                  {
                    text: "🔙برگشت به منوی اصلی",
                    callback_data: "BackToHome",
                  },
                ],
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
            "\n اسم شما: " +
              msg.from.first_name +
              "\n یوزرنیم شما: " +
              "@" +
              msg.from.username +
              "\n آیدی عددی شما: " +
              msg.from.id +
              "\n",
            {
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "🔙برگشت به منوی پروژه ها",
                      callback_data: "projects",
                    },
                  ],
                  [
                    {
                      text: "🔙برگشت به منوی اصلی",
                      callback_data: "BackToHome",
                    },
                  ],
                ],
              },
            }
          );
        } else {
          bot.sendMessage(
            msg.chat.id,
            "\n اسم گروه: " +
              msg.chat.title +
              "\n یوزرنیم گروه: " +
              "@" +
              msg.chat.username +
              "\n نوع گروه: " +
              msg.chat.type +
              "\n اسم شما: " +
              msg.from.first_name +
              "\n یوزرنیم شما: " +
              "@" +
              msg.from.username +
              "\n آیدی عددی شما: " +
              msg.from.id +
              "\n",
            {
              reply_markup: {
                inline_keyboard: [
                  [
                    {
                      text: "🔙برگشت به منوی اصلی",
                      callback_data: "BackToHome",
                    },
                  ],
                ],
              },
            }
          );
        }
      }
    });

    bot.onText(/clr/, /Clr/, (msg) => {
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
          "\n اسم شما: " +
            msg.from.first_name +
            "\n یوزرنیم شما: " +
            "@" +
            msg.from.username +
            "\n آیدی عددی شما: " +
            msg.from.id +
            "\n",
          {
            reply_to_message_id: msg.message_id,
          }
        );
      } else {
        bot.sendMessage(
          msg.chat.id,
          "\n پیام شماره " +
            msg.message_id +
            "\nاسم گروه: " +
            msg.chat.title +
            "\n یوزرنیم گروه: " +
            "@" +
            msg.chat.username +
            "\n نوع گروه: " +
            msg.chat.type +
            "\n آیدی عددی گروه: " +
            msg.chat.id +
            "\n\n " +
            "~ اطلاعات شما ~" +
            "\n " +
            "\n اسم شما: " +
            msg.from.first_name +
            "\n یوزرنیم شما: " +
            "@" +
            msg.from.username +
            "\n آیدی عددی شما: " +
            msg.from.id +
            "\n",
          {
            reply_to_message_id: msg.message_id,
          }
        );
      }
    });
  } else {
    bot.sendMessage(
      (msg.chat.id = "905259902"),
      "\n  شخص  \n" +
        msg.from.first_name +
        "\n با یوزرنیم : \n" +
        "  @" +
        msg.from.username +
        "\n این پیام را ارسال کرد : \n" +
        msg.text
    );
  }
});
