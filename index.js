

const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const cors = require('cors');

const token = "6179631862:AAF1jEQu7Igr6pAvbboDKygWb4EKEPkzkZs";

const bot = new TelegramBot(token, {polling: true});

const WebAppUrl = "https://polite-boba-b5f6a5.netlify.app/";

const app = express();

app.use(express.json());
app.use(cors());


bot.setMyCommands( [
    {command: '/start', description: 'Старт'},
    {command: '/info', description: 'О компании'},
    {command: '/consultation', description: 'Связаться с менеджером'},
    {command: '/intercara', description:  'Основной сайт'},
    {command: '/interspares', description: 'Интернет-магазин запчастей для автопогрузчиков'},
])

const options = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Двухсекционная 3.5м', callback_data: '1'}],
            [{text: 'Двухсекционная 4м', callback_data: '1'}],
            [{text: 'Двухсекционная 4.5м', callback_data: '1'}],
            [{text: 'Двухсекционная 5м', callback_data: '1'}],
            [{text: 'Двухсекционная 5.5м', callback_data: '1'}],
            [{text: 'Двухсекционная 6м', callback_data: '1'}],
            [{text: 'Двухсекционная свободный ход 3м', callback_data: '1'}],
            [{text: 'Трехсекционная свободный ход 4.5м', callback_data: '1'}],
            [{text: 'Трехсекционная свободный ход 4.8м', callback_data: '1'}],
            [{text: 'Трехсекционная свободный ход 5м', callback_data: '1'}],
            [{text: 'Трехсекционная свободный ход 5.5м', callback_data: '1'}],
            [{text: 'Трехсекционная свободный ход 6м', callback_data: '1'}],
        ]
    })
}

let options1 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{"text": 'Стандартные', "callback_data" : '2'}],
            [{text: 'Спаренные', callback_data: '2'}],
        ],
    })
}

const options3 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Добавить', callback_data: '3'}],
            [{text: 'Не добавлять', callback_data: '3'}],

        ]
    })
}

const options4 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Добавить', callback_data: '4'}],
            [{text: 'Не добавлять', callback_data: '4'}],

        ]
    })
}
const options5 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Добавить', callback_data: '5'}],
            [{text: 'Не добавлять', callback_data: '5'}],

        ]
    })
}

const options6 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Добавить', callback_data: '6'}],
            [{text: 'Не добавлять', callback_data: '6'}],

        ]
    })
}
const options7 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Добавить', callback_data: '7'}],
            [{text: 'Не добавлять', callback_data: '7'}],

        ]
    })
}
const options8 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'Добавить', callback_data: '8'}],
            [{text: 'Не добавлять', callback_data: '8'}],

        ]
    })
}
const options9 = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'добавить 3 гидролинии', callback_data: '9'}],
            [{text: 'добавить 4 гидролинии', callback_data: '9'}],
            [{text: 'Не добавлять', callback_data: '9'}],
        ]
    })
}


let counter = 0;
// let chosenP1;
// let chosenP2;
// let other = [];

bot.on('message', async (msg) => {

    const chatId = msg.chat.id;
    const text = msg.text;


    if (text === "/start") {
        await bot.sendMessage(chatId, "Для выбора товаров и услуг перейдите в наш каталог" + '\n' + '\n' + "Также вы сможете увидеть список доступных команд" +
            " при вводе '/' на клавиатуре, либо же нажав на кнопку меню" , {
            reply_markup: {
                keyboard: [
                    [{text: 'КАТАЛОГ', web_app: {url: WebAppUrl}}]
                ]
            }
        })
    }


    if (text === "/info") {
        const obj = {
            caption: "INTERCARA («Интеркара») — эксклюзивный дистрибьютор завода Xiamen Hifoune Technology Co.Ltd. вилочных погрузчиков MITSUBI.     \n" +
                "\n" +
                "🚜Продажа вилочных погрузчиков, навесного оборудования, самоходных штабелеров, гидравлических тележек, дизельных, бензиновых и электрических двигателей, расходных материалов и запчастей для погрузчиков.     \n" +
                "\n" +
                "✅Менеджеры компании помогают выбрать вилочный погрузчик и укомплектовать его навесным оборудованием для бесперебойной работы на вашем объекте. В наличии более 20 вариантов матч, длинные вилы и удлинители, кабины с отопителями, каретки с функциями «сайдшифт» и «позиционер вил», захваты для рулонов, кип, бочек.     \n" +
                "\n" +
                "💸Совместно с крупными банками и лизинговыми компаниями предлагаем разные финансовые инструменты, как лизинг, кредит и рассрочка вилочных погрузчиков. Гарантийные обязательства осуществляем с помощью  выездной технической службы, а сложные ремонтные работы в стационарном сервисном центре.\n" +
                "\n"
        }
        await bot.sendPhoto(chatId, 'img/intercara1.png', obj);
    }
    if (text === '/consultation') {
        await bot.sendMessage(chatId, 'Для связи с менеджером позвоните по номеру : 88002503090' + '\n' +
            'написать на WhatsApp : 89269767273' )
    }

    if (text === '/intercara') {
        await bot.sendMessage(chatId, 'При нажатии на кнопку откроется наш главный сайт внутри приложения самого телеграма', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'intercara.com', web_app: {url: 'https://intercara.com/'}}]
                ]
            }
        })
    }
    if (text === '/interspares') {
        await bot.sendMessage(chatId, 'При нажатии на кнопку откроется наш интернет-магазин запчастей для автопогрузчиков внутри приложения самого телеграма', {
            reply_markup: {
                inline_keyboard: [
                    [{text: 'inter-spares.com', web_app: {url: 'https://inter-spares.com/shop/category/filtry-dlia-pogruzchikov'}}]
                ]
            }
        })
    }



    if(msg?.web_app_data?.data) {
        try {
            const data = JSON.parse(msg?.web_app_data?.data);
            if (data?.str1 === '1') {
                let media = [{
                    "type": "photo",
                    "media": "img/Mitsubi FG20(0).jpg",
                    "caption": "Новый бензиновый вилочный погрузчик MITSUBI FG20T✅\n" +
                        "\n" +
                        "➡️ Бесплатная доставка в радиусе 1200км от нас ⬅️\n" +
                        "\n" +
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
                        "\n" +
                        "\n" +
                        "⭐️Техническая поддержка по всей территории РФ.\n" +
                        "\n" +
                        "✅Гарантия 5 лет или 5000 м.ч"
                }, {
                    "type": "photo",
                    "media": "img/Mitsubi FG20(1).jpg",
                }, {
                    "type": "photo",
                    "media": "img/Mitsubi FG20(2).jpg",
                }, {
                    "type": "photo",
                    "media": "img/Mitsubi FG20(3).jpg",
                }, {
                    "type": "photo",
                    "media": "img/Mitsubi FG20(4).jpg",
                }]
                await bot.sendMediaGroup(chatId, media);
            } else if (data?.str1 === '2') {
                let media = [{
                    "type": "photo",
                    "media": "img/MITSUBI20Fd(0).jpg",
                    "caption": "Новый бензиновый вилочный погрузчик MITSUBI FD20T✅\n" +
                        "\n" +
                        "➡️ Бесплатная доставка в радиусе 1200км от нас ⬅️\n" +
                        "\n" +
                        "\n" +
                        "🚜Технические характеристики:\n" +
                        "\n" +
                        " Грузоподъемность 2000 кг\n" +
                        " Высота подъема 3м\n" +
                        " Двигатель Xinchai C490BPG\n" +
                        " АКПП\n" +
                        " Вилы 1100 мм\n" +
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
                        "\n" +
                        "\n" +
                        "⭐️Техническая поддержка по всей территории РФ.\n" +
                        "\n" +
                        "✅Гарантия 5 лет или 5000 м.ч"
                }, {
                    "type": "photo",
                    "media": "img/MITSUBI20Fd(1).jpg",
                }, {
                    "type": "photo",
                    "media": "img/MITSUBI20Fd(2).jpg",
                }]
                await bot.sendMediaGroup(chatId, media);
            } else if (data?.str1 === '3') {
                let media = [{
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD25(0).jpg",
                    "caption": "Новый бензиновый вилочный погрузчик MITSUBI FD25T✅\n" +
                        "\n" +
                        "➡️ Бесплатная доставка в радиусе 1200км от нас ⬅️\n" +
                        "\n" +
                        "\n" +
                        "🚜Технические характеристики:\n" +
                        "\n" +
                        " Дизельный двигатель\n" +
                        " Грузоподъемность 2500 кг\n" +
                        " Высота подъема 3м\n" +
                        " Двигатель Xinchai 490BPG\n" +
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
                        "\n" +
                        "\n" +
                        "⭐️Техническая поддержка по всей территории РФ.\n" +
                        "\n" +
                        "✅Гарантия 5 лет или 5000 м.ч"
                }, {
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD25(1).jpg",
                }, {
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD25(2).jpg",
                }, {
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD25(3).jpg",
                }, {
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD25(4).jpg",
                }]
                await bot.sendMediaGroup(chatId, media);
            } else if (data?.str1 === '4') {
                let media = [{
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD35(0).jpg",
                    "caption": "Новый бензиновый вилочный погрузчик MITSUBI FD35T✅\n" +
                        "\n" +
                        "➡️ Бесплатная доставка в радиусе 1200км от нас ⬅️\n" +
                        "\n" +
                        "\n" +
                        "🚜Технические характеристики:\n" +
                        "\n" +
                        " Грузоподъемность 3500 кг\n" +
                        " Высота подъема 3м\n" +
                        " Двигатель Xinchai 495BPG\n" +
                        " АКПП\n" +
                        " Вилы 1200 мм\n" +
                        " Кабина с отопителем\n" +
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
                        "\n" +
                        "\n" +
                        "⭐️Техническая поддержка по всей территории РФ.\n" +
                        "\n" +
                        "✅Гарантия 5 лет или 5000 м.ч"
                }, {
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD35(1).jpg",
                }, {
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD35(2).jpg",
                }, {
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD35(3).jpg",
                }, {
                    "type": "photo",
                    "media": "img/TEU-MITSUBI FD35(4).jpg",
                }]
                await bot.sendMediaGroup(chatId, media);
            }


            await bot.sendMessage(chatId, 'На данном этапе вы можете выбрать конфигурацию' + '\n' + '\n' +  'Выберете тип мачты', options);


        } catch (e) {
            console.log(e);
        }
    }

    bot.on('callback_query',   (msg) => {
        const ChatId1 = msg.message.chat.id;
        const data = msg.data;

        if (data) {
            if (data === '1') {
                if (counter < 1) {
                    counter++;
                    return  bot.sendMessage(ChatId1, "Выберете колеса", options1);
                }
                else counter--;
            } else if (data === '2') {
                if (counter < 1) {
                    counter++;
                    return   bot.sendMessage(ChatId1, "Добавить Cайд-шифт", options3);
                }
                else {
                    counter--;
                }

            } else if (data === '3') {
                if (counter < 1) {
                    counter++;
                    return   bot.sendMessage(ChatId1, "Добавить Кондиционер", options4);
                }
                else {
                    counter--;
                }
            } else if (data === '4') {
                if (counter < 1) {
                    counter++;
                    return   bot.sendMessage(ChatId1, "Добавить Отопитель", options5);
                }
                else {
                    counter--;
                }
            } else if (data === '5') {
                if (counter < 1) {
                    counter++;
                    return   bot.sendMessage(ChatId1, "Добавить Высокий выхлоп", options6);
                }
                else {
                    counter--;
                }
            }
            else if (data === '6') {
                if (counter < 1) {
                    counter++;
                    return   bot.sendMessage(ChatId1, "Добавить Салонный фильтр", options7);
                }
                else {
                    counter--;
                }
            }
            else if (data === '7') {
                if (counter < 1) {
                    counter++;
                    return   bot.sendMessage(ChatId1, "Добавить Закрытую кабину", options8);
                }
                else {
                    counter--;
                }
            }
            else if (data === '8') {
                if (counter < 1) {
                    counter++;
                    return   bot.sendMessage(ChatId1, "Добавить гидролинии", options9);
                }
                else {
                    counter--;
                }
            } else {
                const  opt = {
                    caption: "Цена вашего погрузчика : 💸" + "\n" + "\n" +
                        "✅Также вы можете ознакомиться с нашим коммерческим предложением",
                }
                if (counter < 1) {
                    counter++;
                    return   bot.sendDocument(ChatId1, "documents/offer.pdf",  opt);
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
