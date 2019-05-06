# Tutorial-Bot
a simple bot for tutorial purposes (простой бот для учебных целей)


### Создаем бота в Discord для сервера.

**Вам понадобятся**:
- Редактор кода > [Visual Studio Code](https://code.visualstudio.com/)
- [Node JS](https://nodejs.org/en/)
- [Библиотека Discord.js](https://discord.js.org/#/)

1. Открываем редактор кода (VSCode) и через **"Add workspace folder"** создаем папку для проекта.

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 15.29.16)

2. Открываем терминал в редакторе через **> Terminal > New Terminal и вводим команду >**

			`npm init` (нажимаем Enter)

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 15.35.27)

в конце на вопрос **Is this OK? (yes) >** набираем команду yes и нажимаем Enter

Теперь в рабочей папке появился файл **> package.json**

Открываем его в редакторе и в **"description"** прописываем описание вашего бота и по желанию в графе **"author"** (автор) свои инициалы. Сохраняем через команду **CMD + S** для **Mac OS** или **CTRL + S** для **Windows**.

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 15.38.29)

3. Возвращаемся в терминал и подключаем модуль Дискорда через **команду >**
                     
 		`npm install discord.js --save` и нажимаем Enter

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 15.44.23)

4. Переходи в файл **index.js** и прописываем две строки кода: 

		`const Discord = require("discord.js");`
		`const client = new Discord.Client();`

**NB:** Вместо **"Discord"** и **"client"** можно вставить свои названия.

5. Переходим на сайт [Discord Developer Portal](https://discordapp.com/developers/applications/) для регистрации бота в своем Дискорде через функцию **"New Application"**

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 15.49.21)

6. Далее копируем токен бота (предварительно создав его через функцию **"Add bot"**) и переходим в редактор, дописываем следующую строку кода:

		`client.login("ВАШ_ТОКЕН");`

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 15.50.53)

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 15.51.16)

7. Для добавления бота на сервер, переходим в раздел **"General Information"** и копируем **Client ID**.

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 15.50.37)

8. Далее переходим на страницу **Discord > Permissions Calculator**, тикаем все боксы и в нижней графе **Client ID** вставляем скопированный **ID-номер**. Далее переходим по ссылке для авторизации и добавления бота на сервер. 

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot_2019-05-06 Discord Permissions Calculator)

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 16.01.35)

9. Прописываем простую команду для бота в файле **index.js**:

```javascript

client.on('message', (message) => {
    if(message.content == "hello bot") // если содержимое сообщения "hello bot" (можете подставить свой текст)
    {
        message.channel.send("hi there!"); // бот отправит сообщение "hi there!" (можете подставить свой текст)
    }
});
```

![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 16.12.16)

10. Запускаем бота через терминал командой:
		`node .`


![](https://raw.githubusercontent.com/fyunka/Tutorial-Bot/images/Screenshot 2019-05-06 16.08.25)