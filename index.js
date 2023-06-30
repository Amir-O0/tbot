const Telegram = require(`node-telegram-bot-api`);

const bot = new Telegram(`5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w`, {
  polling: true,
});

// member join message
bot.on(`new_chat_members`, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `💠Hello <a href='tg://user?id=${msg.new_chat_member.id}'>${msg.new_chat_member.first_name}</a>💠\n` +
      `🫡Welcome To ${msg.chat.title} Group\n` +
      `Have fun time😎`,
    {
      parse_mode: `HTML`,
      reply_to_message_id: msg.message_id,
    }
  );
});

// member left message
bot.on(`left_chat_member`, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `💠Bye <a href='tg://user?id=${msg.left_chat_member.id}'>${msg.left_chat_member.first_name}</a>💠\n` +
      `🫡<a href='tg://user?id=${msg.left_chat_member.id}'>${msg.left_chat_member.first_name}</a> left from ${msg.chat.title}\n`,
    {
      parse_mode: `HTML`,
      reply_to_message_id: msg.message_id,
    }
  );
});

// delete chat title cheng message
bot.on(`new_chat_title`, (msg) => {
  bot.deleteMessage(msg.chat.id, msg.message_id).catch((er) => {
    return;
  });
});

// set title
bot.onText(/\/settitle/, (msg) => {
  titleName = msg.text.split(" ")[1];
  bot.setChatTitle(msg.chat.id, titleName);
});

// mute
// mute or unmute
bot.onText(/\/idmute/, (msg) => {
  const uid = msg.text.split(" ")[1];
  if (msg.text.split(" ")[2] === "") {
    resion = "";
  } else {
    resion = `Resion : ${msg.text.split(" ")[2]}`;
  }

  bot.getChat((msg.from.id = uid)).then((fullInformation) => {
    bot.restrictChatMember(msg.chat.id, uid, {
      can_send_messages: false,
      can_send_media_messages: false,
      can_send_polls: false,
      can_send_other_messages: false,
      can_add_web_page_previews: false,
      can_change_info: false,
      can_pin_messages: false,
      can_invite_users: false,
    }),
      bot.sendMessage(
        msg.chat.id,
        `👤User :  <a href='tg://user?id=${fullInformation.id}'> ${fullInformation.first_name}\n</a>` +
          `⛔️Mute By <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>` +
          `\n ${resion}`,
        {
          parse_mode: `HTML`,
          reply_to_message_id: msg.message_id,
        }
      );
  });
});

// mute or unmute
bot.onText(/\/mute/, (msg) => {
  uId = msg.reply_to_message.from.id;
  if (msg.text.split(" ")[1] === "") {
    resion = "";
  } else {
    resion = `Resion : ${msg.text.split(" ")[1]}`;
  }
  bot.restrictChatMember(msg.chat.id, uId, {
    can_send_messages: false,
    can_send_media_messages: false,
    can_send_polls: false,
    can_send_other_messages: false,
    can_add_web_page_previews: false,
    can_change_info: false,
    can_pin_messages: false,
    can_invite_users: false,
  }),
    bot.sendMessage(
      msg.chat.id,
      `👤User : <a href='tg://user?id=${msg.reply_to_message.from.id}'>${msg.reply_to_message.from.first_name}</a>\n` +
        `⛔️Mute By <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>` +
        `\n ${resion}`,
      {
        parse_mode: `HTML`,
        reply_to_message_id: msg.message_id,
      }
    );
});

// mute or unmute
bot.onText(/\/idunmute/, (msg) => {
  const uid = msg.text.split(" ")[1];

  bot.getChat((msg.from.id = uid)).then((fullInformation) => {
    bot.restrictChatMember(msg.chat.id, uid, {
      can_send_messages: true,
      can_send_media_messages: true,
      can_send_polls: true,
      can_send_other_messages: true,
      can_add_web_page_previews: true,
      can_change_info: true,
      can_pin_messages: true,
      can_invite_users: true,
    }),
      bot.sendMessage(
        msg.chat.id,
        `👤User :  <a href='tg://user?id=${fullInformation.id}'> ${fullInformation.first_name}</a>\n` +
          `✅UnMute By <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>`,
        {
          parse_mode: `HTML`,
          reply_to_message_id: msg.message_id,
        }
      );
  });
});

// mute or unmute
bot.onText(/\/unmute/, (msg) => {
  uId = msg.reply_to_message.from.id;
  bot.restrictChatMember(msg.chat.id, uId, {
    can_send_messages: true,
    can_send_media_messages: true,
    can_send_polls: true,
    can_send_other_messages: true,
    can_add_web_page_previews: true,
    can_change_info: true,
    can_pin_messages: true,
    can_invite_users: true,
  }),
    bot.sendMessage(
      msg.chat.id,
      `👤User : <a href='tg://user?id=${msg.reply_to_message.from.id}'> ${msg.reply_to_message.from.first_name}</a>\n` +
        `✅UnMute By <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>`,
      {
        parse_mode: `HTML`,
        reply_to_message_id: msg.message_id,
      }
    );
});

// ban
// ban and unban
bot.onText(/\/idban/, (msg) => {
  const uid = msg.text.split(" ")[1];

  bot.getChat((msg.from.id = uid)).then((fullInformation) => {
    bot.banChatMember(msg.chat.id, uid),
      bot.sendMessage(
        msg.chat.id,
        `👤User :  <a href='tg://user?id=${fullInformation.id}'> ${fullInformation.first_name}\n</a>` +
          `⛔️Ban By <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>` +
          `\n Resion : ${msg.text.split(" ")[2]}`,
        {
          parse_mode: `HTML`,
          reply_to_message_id: msg.message_id,
        }
      );
  });
});

// ban and unban
bot.onText(/\/ban/, (msg) => {
  if (msg.text.split(" ")[1] === "") {
    resion = "";
  } else {
    resion = `Resion : ${msg.text.split(" ")[1]}`;
  }
  bot.banChatMember(msg.chat.id, msg.reply_to_message.from.id),
    bot.sendMessage(
      msg.chat.id,
      `👤User : <a href='tg://user?id=${msg.reply_to_message.from.id}'>${msg.reply_to_message.from.first_name}</a> \n` +
        `⛔️Ban By <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>` +
        `\n ${resion}`,
      {
        parse_mode: `HTML`,
        reply_to_message_id: msg.message_id,
      }
    );
});

// ban and unban
bot.onText(/\/idunban/, (msg) => {
  const uid = msg.text.split(" ")[1];

  bot.getChat((msg.from.id = uid)).then((fullInformation) => {
    bot.unbanChatMember(msg.chat.id, uid),
      bot.sendMessage(
        msg.chat.id,
        `👤User :  <a href='tg://user?id=${fullInformation.id}'> ${fullInformation.first_name}</a>\n` +
          `✅UnBan By <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>`,
        {
          parse_mode: `HTML`,
          reply_to_message_id: msg.message_id,
        }
      );
  });
});

// ban and unban
bot.onText(/\/unban/, (msg) => {
  bot.unbanChatMember(msg.chat.id, msg.reply_to_message.from.id),
    bot.sendMessage(
      msg.chat.id,
      `👤User : <a href='tg://user?id=${msg.reply_to_message.from.id}'> ${msg.reply_to_message.from.first_name}</a>\n` +
        `✅UnBan By <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>`,
      {
        parse_mode: `HTML`,
        reply_to_message_id: msg.message_id,
      }
    );
});

// report
bot.onText(/\/report/, (msg) => {
  bot.sendMessage(
    msg.chat.id,
    `👤<a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a> Your Report Send To Admin's✅`,
    {
      parse_mode: `HTML`,
      reply_to_message_id: msg.message_id,
    }
  ),
    bot.getChat(msg.chat.id).then((ChatLink) => {
      console.log(ChatLink);
      InviteChatLink = ChatLink.invite_link;
      bot.sendMessage(
        (msg.chat.id = `905259902`),
        `🔰Report🔰\n` +
          `👤User : <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a> \n` +
          `👤To User : <a href='tg://user?id=${msg.reply_to_message.from.id}'>${msg.reply_to_message.from.first_name}</a>\n` +
          `👥Group info :<a href='${InviteChatLink}'>${msg.reply_to_message.chat.title}</a> | ${msg.chat.type}\n` +
          `✉️Message :\n ${msg.reply_to_message.text} \n\n` +
          `🔰End Report🔰`,
        { parse_mode: `HTML` }
      );
    });
});

// user info's
bot.onText(/\/idinfo/, (msg) => {
  uid = msg.text.split(" ")[1];

  bot.getChat((msg.from.id = uid)).then((fullInformation) => {
    bot.getUserProfilePhotos((msg.from.id = uid)).then((data) => {
      if ((data.total_count = data.total_count)) {
        newProfilePicture = data.photos[data.total_count - data.total_count][0];
        bot.sendPhoto(msg.chat.id, (media = newProfilePicture.file_id), {
          reply_to_message_id: msg.message_id,
          parse_mode: `HTML`,
          caption:
            `\n Message Number: ${msg.message_id}` +
            `\n👥Group Name: <code>${msg.chat.title}</code>` +
            `\n🆔Group ID: <code>${msg.chat.id}</code>` +
            `\n\n ` +
            `~♾️ User Information ♾️~` +
            `\n` +
            `\n🆔User Name: <a href='tg://user?id=${(msg.from.id = uid)}'>${
              fullInformation.first_name
            }</a>` +
            `\n🆔User ID: <code>${(msg.from.id = uid)}</code>` +
            `\n🆔User Username: <code>@${fullInformation.username}</code>` +
            `\n🆔User Bio: <code>${fullInformation.bio}</code>` +
            `\n`,
        });
      } else {
        bot.sendMessage(
          msg.chat.id,
          `\n Message Number: ${msg.message_id}` +
            `\n👥Group Name: <code>${msg.chat.title}</code>` +
            `\n🆔Group ID: <code>${msg.chat.id}</code>` +
            `\n\n ` +
            `~♾️ User Information ♾️~` +
            `\n` +
            `\n🆔User Name: <a href='tg://user?id=${(msg.from.id = uid)}'>${
              fullInformation.first_name
            }</a>` +
            `\n🆔User ID: <code>${(msg.from.id = uid)}</code>` +
            `\n🆔User Username: <code>@${fullInformation.username}</code>` +
            `\n🆔User Bio: <code>${fullInformation.bio}</code>` +
            `\n`,
          {
            parse_mode: `HTML`,
            reply_to_message_id: msg.message_id,
          }
        );
      }
    });
  });
});

// user info's

bot.onText(/\/uinfo/, (msg) => {
  bot.getChat(msg.reply_to_message.from.id).then((fullInformation) => {
    bot.getUserProfilePhotos(msg.reply_to_message.from.id).then((data) => {
      if ((data.total_count = data.total_count)) {
        newProfilePicture = data.photos[data.total_count - data.total_count][0];
        bot.sendPhoto(msg.chat.id, (media = newProfilePicture.file_id), {
          reply_to_message_id: msg.message_id,
          parse_mode: `HTML`,
          caption:
            `\n Message Number: ${msg.message_id}` +
            `\n👥Group Name: <code>${msg.chat.title}</code>` +
            `\n🆔Group ID: <code>${msg.chat.id}</code>` +
            `\n\n ` +
            `~♾️ User Information ♾️~` +
            `\n` +
            `\n🆔User Name: <a href='tg://user?id=${msg.reply_to_message.from.id}'>${msg.reply_to_message.from.first_name}</a>` +
            `\n🆔User ID: <code>${msg.reply_to_message.from.id}</code>` +
            `\n🆔User Username: <code>@${msg.reply_to_message.from.username}</code>` +
            `\n🆔User Bio: <code>${fullInformation.bio}</code>` +
            `\n`,
        });
      } else {
        bot.sendMessage(
          msg.chat.id,
          `\n Message Number: ${msg.message_id}` +
            `\n👥Group Name: <code>${msg.chat.title}</code>` +
            `\n🆔Group ID: <code>${msg.chat.id}</code>` +
            `\n\n ` +
            `~♾️ User Information ♾️~` +
            `\n` +
            `\n🆔User Name: <a href='tg://user?id=${msg.reply_to_message.from.id}'>${msg.reply_to_message.from.first_name}</a>` +
            `\n🆔User ID: <code>${msg.reply_to_message.from.id}</code>` +
            `\n🆔User Username: <code>@${msg.reply_to_message.from.username}</code>` +
            `\n🆔User Bio: <code>${fullInformation.bio}</code>` +
            `\n`,
          {
            parse_mode: `HTML`,
            reply_to_message_id: msg.message_id,
          }
        );
      }
    });
  });
});

// user info's

bot.onText(/\/info/, (msg) => {
  bot.getChat(msg.from.id).then((fullInformation) => {
    bot.getUserProfilePhotos(msg.from.id).then((data) => {
      if ((data.total_count = data.total_count)) {
        newProfilePicture = data.photos[data.total_count - data.total_count][0];
        bot.sendPhoto(msg.chat.id, (media = newProfilePicture.file_id), {
          reply_to_message_id: msg.message_id,
          parse_mode: `HTML`,
          caption:
            `\n Message Number: ${msg.message_id}` +
            `\n👥Group Name: <code>${msg.chat.title}</code>` +
            `\n🆔Group ID: <code>${msg.chat.id}</code>` +
            `\n\n ` +
            `~♾️ User Information ♾️~` +
            `\n` +
            `\n🆔Your Name: <a href='tg://user?id=${msg.from.id}'>${msg.from.first_name}</a>` +
            `\n🆔Your ID: <code>${msg.from.id}</code>` +
            `\n🆔Your Username: <code>@${msg.from.username}</code>` +
            `\n🆔Your Bio: <code>${fullInformation.bio}</code>` +
            `\n`,
        });
      } else {
        bot.sendMessage(
          msg.chat.id,
          `\n Message Number: ${msg.message_id}` +
            `\n👥Group Name: <code>${msg.chat.title}</code>` +
            `\n🆔Group ID: <code>${msg.chat.id}</code>` +
            `\n\n ` +
            `~♾️ User Information ♾️~` +
            `\n` +
            `\n🆔Your Name: <a href='tg://user?id=${msg.from.id}'>${msg.reply_to_message.from.first_name}</a>` +
            `\n🆔Your ID: <code>${msg.from.id}</code>` +
            `\n🆔Your Username: <code>@${msg.from.username}</code>` +
            `\n🆔Your Bio: <code>${fullInformation.bio}</code>` +
            `\n`,
          {
            parse_mode: `HTML`,
            reply_to_message_id: msg.message_id,
          }
        );
      }
    });
  });
});

// photo's of profile
bot.onText(/\/firstphoto/, (msg) => {
  bot.getUserProfilePhotos(msg.reply_to_message.from.id).then((data) => {
    if (data.total_count === 0) {
      bot.sendMessage(msg.chat.id, `user dont have profile picture❌`, {
        reply_to_message_id: msg.message_id,
      });
    } else {
      newProfilePicture = data.photos[data.total_count - data.total_count][0];
      bot.sendPhoto(msg.chat.id, (media = newProfilePicture.file_id), {
        reply_to_message_id: msg.message_id,
      });
    }
  });
});

// photo's of profile

bot.onText(/\/allprofiles/, (msg) => {
  bot.getUserProfilePhotos(msg.reply_to_message.from.id).then((data) => {
    if (data.total_count === 0) {
      bot.sendMessage(msg.chat.id, `user dont have profile picture❌`, {
        reply_to_message_id: msg.message_id,
      });
    } else {
      for (let i = 0; i < data.total_count; i++) {
        allProfilePicture = data.photos[i][0];
        bot.sendPhoto(msg.chat.id, (media = allProfilePicture.file_id), {
          reply_to_message_id: msg.message_id,
        });
      }
    }
  });
});

// bot.getChatMember(msg.chat.id, msg.from.id).then(function (data) {
//   if (data.status == "creator" || data.status == "administrator") {
//   } else if (data.status == "creator") {
//   } else if (data.status == "administrator") {
//   }
//   // console.log(userStatus);
// });

bot.onText(/\/titletime/, (msg) => {
  var GetDate = Date(msg.date * 1000);
  GetTime = GetDate.split(" ")[4];
  var ChatTitle = msg.chat.title;
  bot.setChatTitle(msg.chat.id, `${GetTime} | ${ChatTitle}`);

  function time() {
    var GetDateTIME = Date(msg.date * 1000);
    GetTimeTIME = GetDateTIME.split(" ")[4];

    bot.setChatTitle(msg.chat.id, `${GetTimeTIME} | ${ChatTitle}`);
  }

  setInterval(time, 5000);
});

bot.onText(/\/orginalname/, (msg) => {
  setTimeout(time(), 500);
  var ChatTitle = msg.chat.title.split(" | ")[1];
  bot.setChatTitle(msg.chat.id, ChatTitle);
});
