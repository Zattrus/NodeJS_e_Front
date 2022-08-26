const express = require('express');
const app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res) {
    const items = [
        {
            title: 'D',
            message: 'esenvolver aplicações/serviços de forma fácil'
        },
        {
            title: 'E',
            message: 'JS usa JavaScript para renderizar o HTML'
        },
        {
            title: 'M',
            message: 'uito fácil de usar'
        },
        {
            title: 'A',
            message: 'gora Vamos aprender juntos'
        },
        {
            title: 'I',
            message: 'ndo de bom para melhor e meu Fulturo e desenvolvedor fullstack'
        },
        {
            title: 'M',
            message: 'eu sonho e realizar minha pos em eng de software'
        }
    ];
    const subtitle = 'Uma linguagem de modelagem para criação de pagina em HTML'
    res.render("pages/index", {
        qualitys: items,
        subtitle: subtitle,
    });
})

app.get("/sobre", function (req, res) {
    res.render("pages/about");
})

app.listen(8080);
