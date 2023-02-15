var Telegram = require("node-telegram-bot-api");
var bot = new Telegram("5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w", {
  polling: true,
});


const bot = new TelegramBot(token, {
        polling: true
    });
    // Matches "/echo [whatever]"    
    bot.onText(/\/echo (.+)/, (msg, match) => {
        // 'msg' is the received Message from Telegram    
        // 'match' is the result of executing the regexp above on the text content    
        // of the message    

        const chatId = msg.chat.id;
        const resp = match[1]; // the captured "whatever"    

        // send back the matched "whatever" to the chat    
        bot.sendMessage(chatId, resp);
    });
    // Listen for any kind of message. There are different kinds of  
    // messages.  
    bot.on('message', (msg) => {
        const chatId = msg.chat.id;
        var user_profile = bot.getUserProfilePhotos(msg.from.id);
        user_profile.then(function (res) {
            var file_id = res.photos[0][0].file_id;
            var file = bot.getFile(file_id);
            file.then(function (result) {
                var file_path = result.file_path;
                var photo_url = `https://api.telegram.org/file/bot${token}/${file_path}`
                bot.sendMessage(chatId, photo_url);
            });
        });
    });.
