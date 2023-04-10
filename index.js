

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = "6179631862:AAF1jEQu7Igr6pAvbboDKygWb4EKEPkzkZs";

const bot = new TelegramBot(token, {polling: true});

const WebAppUrl = "https://polite-boba-b5f6a5.netlify.app/";

const app = express();


app.use(express.json());
app.use(cors());


bot.on('message', async (msg) => {
    const chatId = msg.chat.id;
    const text = msg.text;

    if (text === "/start") {
        await bot.sendMessage(chatId, "Приветствуем вас! мы сделали версию нашего каталога вилочных погрузчиков в телеграме и добавили возможность " +
            "выбора конфигурации прямо в приложении. Для того чтобы сделать заказ - нажмите на кнопку", {

            reply_markup: {
                inline_keyboard: [
                    [{text: "СДЕЛАТЬ ЗАКАЗ", web_app: {url: WebAppUrl}}]
                ]
            }


        })
        await bot.sendMessage(chatId, "Ниже появится кнопка, по которой можете заполнить форму", {
            reply_markup: {
                keyboard: [
                    [{text: "Заполнить форму", web_app: {url: WebAppUrl + './form'}}]
                ]
            }


        })

    }
    if(msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data)
            let media = [{
                "type" : "photo",
                "media": "img/FG20.jpg",
                "caption": "Новый бензиновый вилочный погрузчик MITSUBI FG20T✅\n" +
                    "\n" +
                    "➡️ Бесплатная доставка в радиусе 1200км от нас ⬅️\n" +
                    "\n" +
                    "____________________________________________________\n" +
                    "\n" +
                    "🚜Технические характеристики:\n" +
                    "\n" +
                    " Грузоподъемность 2000 кг\n" +
                    " Высота подъема 3м\n" +
                    " АКПП\n" +
                    " Вилы 1200 мм\n" +
                    "\n" +
                    "✨Возможные комплектации:\n" +
                    "\n" +
                    " Длинные вилы или удлинители вил\n" +
                    " Установка смещения каретки\n" +
                    " Установка дополнительных гидролиний\n" +
                    " Установка кабины с отопителем\n" +
                    "\n" +
                    "💸Форма оплаты:\n" +
                    "\n" +
                    " Лизинг с минимальным авансом (5%)\n" +
                    " Лизинг для ИП\n" +
                    " Лизинг для ООО (зарегистрированное от 3 мес)\n" +
                    " Кредит для юр.лиц и физ.лиц\n" +
                    " Безналичный расчет по банку\n" +
                    "___________________________________________________\n" +
                    "\n" +
                    "⭐️Техническая поддержка по всей территории РФ.\n" +
                    "\n" +
                    "✅Гарантия 5 лет или 5000 м.ч"
            }, {
                "type" : "photo",
                "media": "img/FG20.1.jpg",
            }, {
                "type" : "photo",
                "media": "img/FG20.2.jpg",
            }, {
                "type" : "photo",
                "media": "img/FG20.3.jpg",
            }, {
                "type" : "photo",
                "media": "img/FG20.4.jpg",
            }]

            await bot.sendMediaGroup(chatId, media);



        } catch (e) {
            console.log(e);
        }
    }
});


app.post('/web-data', async (req, res) => {
    const{queryId} = req.body;

    try {
        await bot.answerWebAppQuery(queryId, {
            type: 'article',
            id: queryId,
            title: 'Выбор конфигурации',
            input_message_content: {message_text: 'Ниже вы можете увидеть описание погрузчика '}
        })
        return res.status(200).json({});
    } catch (e) {
        await bot.answerWebAppQuery(queryId, {
            type: 'article',
            id: queryId,
            title: 'Не удалось посмотреть конфигурацию',
            input_message_content: {message_text: 'Не удалось посмотреть конфигурацию'}
        })
        return res.status(500).json({});
    }
})

const PORT = 8000;
app.listen(PORT, () => console.log('server started on Port ' + PORT))
