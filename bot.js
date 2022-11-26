var Telegram=require('node-telegram-bot-api')
var bot=new Telegram('5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w',{polling:true})



bot.onText(/\/start/ , msg=>{
    bot.sendMessage(
        msg.chat.id ,
            'سلام  ' +
        msg.chat.first_name +
            ' به ربات من خوش نیآمدی ',
            {
                reply_markup : {
                    'keyboard' : [
                        ['WebSite','My Project'],
                        ['Send Me Message']
                    ]
                }
            }
        )
    }
)
bot.on('message',async (msg) =>
    {
        console.log(msg.text);
        
        switch(msg.text){
            case 'WebSite' :
                bot.sendMessage(
                    msg.chat.id , 'WebSite : Aho-amiro.ir'
                )
            break;

            case 'My Project' :
                bot.sendMessage(
                    msg.chat.id , 'ChatAPP : chat.aho-amiro.ir'
                )
            break;
            
            case 'Send Me Message' :
                bot.sendMessage(
                    msg.chat.id , 'Send Your Message'
                )
            break;
        }
    }
)
