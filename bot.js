var Telegram = require("node-telegram-bot-api");
var bot = new Telegram("5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w", {
  polling: true,
});


// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


// Matches "/profile" 
bot.onText(/\/profile/, (msg) => {

  const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, `Hi ${msg.from.first_name}, here is your profile information:`);

  // send user profile information (name, age, etc.) as a reply to the same chat 
  bot.sendMessage(chatId, `Name: ${msg.from.first_name} ${msg.from.last_name} \nAge: ${msg.from.age} \nGender: ${msg.from.gender}`);

  // send user profile image as a reply to the same chat  
  bot.sendPhoto(chatId, msg.from.photo);  
});
