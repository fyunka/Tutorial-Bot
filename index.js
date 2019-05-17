const Discord = require("discord.js");
const client = new Discord.Client();

client.login("ВАШ_ТОКЕН");

client.on('message', (message) => {
    if(message.content == "привет, бот")
    // участник сервера отправляет сообщение боту, можете указать свой текст
    {
        message.channel.send("привет!"); // ответ бота, можете указать свой текст
    }
});