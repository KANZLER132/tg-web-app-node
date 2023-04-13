

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

    const options = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Двухсекционная 2м', callback_data: '1'}, {text: 'Двухсекционная 3м', callback_data: '1'}],
                [{text: 'Двухсекционная 3.5м', callback_data: '1'}, {text: 'Двухсекционная 4м', callback_data: '1'}],
            ]
        })
    }

    const options1 = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Стандартные', callback_data: '2'}],
                [{text: 'Спаренные', callback_data: '2'}],
            ]
        })
    }

    const options3 = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Сайд-шифт', callback_data: '3'}],

            ]
        })
    }
    const options4 = {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Кондиционер', callback_data: '4'}],

            ]
        })
    }


    if (text === "/start") {
        await bot.sendMessage(chatId, "Приветствуем вас! мы сделали версию нашего каталога вилочных погрузчиков в телеграме и добавили возможность " +
            "выбора конфигурации прямо в приложении. Для того чтобы сделать заказ - нажмите на кнопку", {
            reply_markup: {
                keyboard: [
                    [{text: 'СДЕЛАТЬ ЗАКАЗ', web_app: {url: WebAppUrl}}]
                ]
            }
        })
    }




    if(msg?.web_app_data?.data) {
        try {
            // const data = JSON.parse(msg?.web_app_data?.data)
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
            await bot.sendMessage(chatId, 'Выберете тип мачты', options);


        } catch (e) {
            console.log(e);
        }
    }
    bot.on('callback_query',  msg => {
        const data = msg.data
        if (data) {
            let counter = 0;
            if (data === '1') {
                if (counter < 1) {
                    counter++;
                    return bot.sendMessage(chatId, "Выберете колеса", options1);
                }
                else {
                    counter--;
                }
            } else if (data === '2') {
                if (counter < 1) {
                    counter++;
                    return  bot.sendMessage(chatId, "Дополнительно", options3);
                }
                else {
                    counter--;
                }

            } else if (data === '3') {
                if (counter < 1) {
                    counter++;
                    return  bot.sendMessage(chatId, "Дополнительно", options4);
                }
                else {
                    counter--;
                }
            }
            else {
                const  opt = {
                    caption: "Цена вашего погрузчика : 💸" + "\n" +
                        "✅Также вы можете ознакомиться с нашим коммерческим предложением",
                }
                if (counter < 1) {
                    counter++;
                    return  bot.sendDocument(chatId, "documents/offer.pdf",  opt);
                }
                else {
                    counter--;
                }

            }
        }
    })

});




const PORT = 8000;
app.listen(PORT, () => console.log('server started on Port ' + PORT))
