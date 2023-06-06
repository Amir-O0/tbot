var Telegram = require("node-telegram-bot-api");
var bot = new Telegram("5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w", {
  polling: true,
});

bot.on("message", (msg) => {
  console.log(msg);
  console.log(msg.text);

  var owner = {
    id: 905259902,
    is_bot: false,
    first_name: "ᴬᵐⁱʳʰᵒˢˢᵉⁱⁿ",
    username: "Amiro_im",
  };

  var admin = {
    id: 5715913947,
    first_name: "𝕄𝕠𝕙𝕒𝕞𝕞𝕒𝕕",
    username: "Mohammad_hosseini_MH",
  };

  var ReplayOBJ = [
    msg.chat.type === "supergroup" &&
      msg.from.is_bot === false &&
      msg.reply_to_message === msg.reply_to_message,
  ];

  var OnlyOwner = msg.from.id === owner.id;

  //help

  if (
    msg.text === "/help" ||
    msg.text === "help" ||
    msg.text === "Help" ||
    msg.text === "راهنما"
  ) {
    bot.sendMessage(
      msg.chat.id,
      `
 لیست دستورات :


 💠💠💠
/ping
bot
Bot
پینگ
ربات
💠💠💠

💠💠💠
/report
report
Report
ریپورت
گزارش
💠💠💠

💠💠💠
/pin
pin
Pin
پین
سنجاق
💠💠💠

💠💠💠
/mute
mute
Mute
میوت
سکوت
💠💠💠

💠💠💠
/unmute
unmute
Unmute
UnMute
آن میوت
ان میوت
حذف میوت
لغو میوت
لغو سکوت
حذف سکوت
💠💠💠

💠💠💠
/ban
ban
Ban
بن
اخراج
💠💠💠

💠💠💠
/unban
unban
Unban
UnBan
آن بن
ان بن
حذف اخراج
لغو اخراج
حذف بن
لغو بن
💠💠💠
`
    );
  }

  // ping

  if (
    (ReplayOBJ && msg.text === "/ping") ||
    msg.text === "bot" ||
    msg.text === "Bot" ||
    msg.text === "پینگ" ||
    msg.text === "ربات"
  ) {
    bot.sendMessage(msg.chat.id, `Bot is online`, {
      reply_to_message_id: msg.message_id,
    });
  }

  //  new member joined

  if (
    msg.text === undefined &&
    msg.new_chat_member === msg.new_chat_member &&
    msg.chat.type === "supergroup"
  ) {
    bot.sendMessage(
      msg.chat.id,
      `💠Hello ${msg.new_chat_member.first_name}💠\n` +
        `Welcome To ${msg.chat.title} Group\n` +
        `Have fun time😎`,
      {
        reply_to_message_id: msg.message_id,
      }
    );
  } else if (
    msg.text === undefined &&
    msg.left_chat_member.id === msg.left_chat_member.id &&
    msg.chat.type === "supergroup"
  ) {
    return 0;
  }

  //  report to owner

  if (
    (ReplayOBJ && msg.text === "/report") ||
    msg.text === "report" ||
    msg.text === "Report" ||
    msg.text === "ریپورت" ||
    msg.text === "گزارش"
  ) {
    bot.sendMessage(
      msg.chat.id,
      `👤${msg.from.first_name} Your Report Send To Admin's✅`,
      {
        reply_to_message_id: msg.message_id,
      }
    ),
      bot.sendMessage(
        (msg.chat.id = owner.id),
        `🔰Report🔰\n` +
          `👤User : ${msg.from.first_name} | @${msg.from.username}\n` +
          `👤To User : ${msg.reply_to_message.from.first_name} | @${msg.reply_to_message.from.username}\n` +
          `👥Group info : ${msg.chat.title} | ${msg.chat.type}\n` +
          `✉️Message :\n ${msg.reply_to_message.text} \n\n` +
          `🔰End Report🔰`
      ),
      bot.sendMessage(
        (msg.chat.id = admin.id),
        `🔰Report🔰\n` +
          `👤User : ${msg.from.first_name} | @${msg.from.username}\n` +
          `👤To User : ${msg.reply_to_message.from.first_name} | @${msg.reply_to_message.from.username}\n` +
          `👥Group info : ${msg.chat.title} | ${msg.chat.type}\n` +
          `✉️Message :\n ${msg.reply_to_message.text} \n\n` +
          `🔰End Report🔰`
      );
  }

  // pin message

  if (
    (ReplayOBJ && OnlyOwner && msg.text === "/pin") ||
    msg.text === "pin" ||
    msg.text === "Pin" ||
    msg.text === "پین" ||
    msg.text === "سنجاق"
  ) {
    bot.pinChatMessage(
      msg.chat.id,
      (message_id = msg.reply_to_message.message_id)
    ),
      bot.sendMessage(msg.chat.id, `📌Message pined`, {
        reply_to_message_id: msg.message_id,
      });
  }

  //  mute user

  if (
    (ReplayOBJ && OnlyOwner && msg.text === "/mute") ||
    msg.text === "mute" ||
    msg.text === "Mute" ||
    msg.text === "میوت" ||
    msg.text === "سکوت"
  ) {
    const chat_id = msg.chat.id;
    const user_id = msg.reply_to_message.from.id;

    bot.restrictChatMember(chat_id, user_id, {
      can_send_messages: false,
      can_send_media_messages: false,
      can_send_polls: false,
      can_send_other_messages: false,
      can_add_web_page_previews: false,
      can_change_info: false,
      can_pin_messages: false,
      can_invite_users: false,
    });
    bot.sendMessage(
      msg.chat.id,
      `👤User : ${msg.reply_to_message.from.first_name} | @${msg.reply_to_message.from.username} \n` +
        `⛔️Mute By ${msg.from.first_name}`,
      {
        reply_to_message_id: msg.message_id,
      }
    );
  } else if (
    (ReplayOBJ && OnlyOwner && msg.text === "/unmute") ||
    msg.text === "unmute" ||
    msg.text === "Unmute" ||
    msg.text === "UnMute" ||
    msg.text === "آن میوت" ||
    msg.text === "ان میوت" ||
    msg.text === "حذف میوت" ||
    msg.text === "لغو میوت" ||
    msg.text === "لغو سکوت" ||
    msg.text === "حذف سکوت"
  ) {
    const chat_id = msg.chat.id;
    const user_id = msg.reply_to_message.from.id;

    bot.restrictChatMember(chat_id, user_id, {
      can_send_messages: true,
      can_send_media_messages: true,
      can_send_polls: true,
      can_send_other_messages: true,
      can_add_web_page_previews: true,
      can_change_info: true,
      can_pin_messages: true,
      can_invite_users: true,
    });
    bot.sendMessage(
      msg.chat.id,
      `👤User : ${msg.reply_to_message.from.first_name} | @${msg.reply_to_message.from.username} \n` +
        `✅UnMute By ${msg.from.first_name}`,
      {
        reply_to_message_id: msg.message_id,
      }
    );
  }

  // ban and unban

  if (
    (ReplayOBJ && OnlyOwner && msg.text === "/ban") ||
    msg.text === "ban" ||
    msg.text === "Ban" ||
    msg.text === "بن" ||
    msg.text === "اخراج"
  ) {
    bot.banChatMember(msg.chat.id, (user_id = msg.reply_to_message.from.id)),
      bot.sendMessage(
        msg.chat.id,
        `👤User : ${msg.reply_to_message.from.first_name} | @${msg.reply_to_message.from.username} \n` +
          `⛔️Ban By ${msg.from.first_name}`,
        {
          reply_to_message_id: msg.message_id,
        }
      );
  } else if (
    (ReplayOBJ && OnlyOwner && msg.text === "/unban") ||
    msg.text === "unban" ||
    msg.text === "Unban" ||
    msg.text === "UnBan" ||
    msg.text === "آن بن" ||
    msg.text === "ان بن" ||
    msg.text === "حذف اخراج" ||
    msg.text === "لغو اخراج" ||
    msg.text === "حذف بن" ||
    msg.text === "لغو بن"
  ) {
    bot.unbanChatMember(msg.chat.id, (user_id = msg.reply_to_message.from.id)),
      bot.sendMessage(
        msg.chat.id,
        `👤User : ${msg.reply_to_message.from.first_name} | @${msg.reply_to_message.from.username} \n` +
          `✅UnBan By ${msg.from.first_name}`,
        {
          reply_to_message_id: msg.message_id,
        }
      );
  }
});
