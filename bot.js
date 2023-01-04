var Telegram = require("node-telegram-bot-api");
var bot = new Telegram("5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w", {
  polling: true,
});

bot.onText(/\/start/, (msg) => {
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
});

// Handle callback queries
bot.on("callback_query", function onCallbackQuery(callbackQuery) {
  const action = callbackQuery.data;
  const msg = callbackQuery.message;

  if (action === "BackToHome") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });

    bot.sendMessage(
      msg.chat.id,
      "Hello Dear" + msg.from.first_name + " Welcome To My Bot",
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
  }

  if (action === "send_msg") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });

    bot.sendMessage(
      msg.chat.id,
      "Send your message \n" + "( Please dont send Gif - Image - Video !)  "
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

  if (action === "Project/UserInformation") {
    bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
      return;
    });


    if(msg.chat.type==='private'){
      bot.sendMessage(msg.chat.id, 
      "\n Your name: " +
      msg.from.first_name +
      "\n Your Username: " +
      "@" +
      msg.from.username +
      "\n Your idNumber: " +
      msg.from.id
      ,
      {
     reply_markup: {
       inline_keyboard: [
         [{ text: "🔙Back to Projects menu", callback_data: "projects" }],
         [{ text: "🔙Back to main menu", callback_data: "BackToHome" }],
       ],
     },
   });
    }else{
      bot.sendMessage(msg.chat.id, 
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
      msg.from.id
      ,
      {
     reply_markup: {
       inline_keyboard: [
         [{ text: "🔙Back to Projects menu", callback_data: "projects" }],
         [{ text: "🔙Back to main menu", callback_data: "BackToHome" }],
       ],
     },
   });
    }
    
  }
}
);

bot.onText(/clr/, (msg) => {
  for (let i = 0; i < 99; i++) {
    bot.deleteMessage(msg.chat.id, msg.message_id - i).catch((er) => {
      return;
    });
    //if there isn't any messages to delete bot simply return
  }
});






bot.onText(/\/info/, (msg) => {
  if(msg.chat.type==='private'){
    bot.sendMessage(msg.chat.id, 
    "\n Your name: " +
    msg.from.first_name +
    "\n Your Username: " +
    "@" +
    msg.from.username +
    "\n Your idNumber: " +
    msg.from.id
    );
  }else{
    bot.sendMessage(msg.chat.id, 
    "\n Messege Number "+
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





bot.on("message", async (msg) => {
  console.log(msg);
  console.log(msg.text);
});
