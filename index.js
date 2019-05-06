const Discord = require("discord.js");
const client = new Discord.Client();

client.login("ВАШ_ТОКЕН");

client.on('message', (message) => {
    if(message.content == "ас-саляму алейкум, бот") 
    // участник сервера отправляет сообщение боту, можете указать свой текст
    {
        message.channel.send("ва алейкум ас-салам!"); // ответ бота, можете указать свой текст
    }
});