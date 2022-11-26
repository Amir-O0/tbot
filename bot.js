var Telegram=require('node-telegram-bot-api')
var bot=new Telegram('5696293826:AAGNv2K-XTrFxNkmjbB9EnMr46g27dxbU3w',{polling:true})

// const uFirstName = msg.chat.first_name
// const uLastName = msg.chat.last_name
// const uName = msg.chat.username
// const uNumberId = msg.chat.id


bot.onText(/\/start/ , msg=>{
    bot.sendMessage(
        msg.chat.id ,
            'Hello Dear' +
        msg.chat.first_name +
            'Welcome To My Bot',
            {
                reply_markup : {
                    'keyboard' : [
                        ['WebSite','My Project'],
                        ['Send Me Message (Soon!)']
                    ]
                }
            }
        )
    }
)



bot.onText(/\/me/ , msg=>{
    var userInfo = (
        '\n Your full name:'+
        msg.chat.first_name +
        '\n Your Username:' +
        '@'+
        msg.chat.username +
        '\n Your idNumber: '+
        msg.chat.id);


        bot.sendMessage(
            msg.chat.id , userInfo
        )
    }

)


bot.on('message',async (msg) =>
    {

        

        
        console.log(msg);
        console.log(msg.text);
        

        switch(msg.text){
            case 'WebSite' :
                bot.sendMessage(
                    msg.chat.id , 'WebSite : Aho-amiro.ir'
                )
            break;

            case 'My Project' :
                bot.sendMessage(
                    msg.chat.id , 
                    'ChatAPP : aho-amiro.ir \n \n' +
                    'your info : /me'

                )
            break;
            
            case 'Send Me Message' :
                bot.sendMessage(
                    msg.chat.id , 'Send Your Message \n'+'( Please Dont Send Gif - Image - Video !)  '
                )
            break;
        }
    }
)
