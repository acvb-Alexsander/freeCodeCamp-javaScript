const personagens = {

    goku:{

        nome:"Goku",

        imagem:"img/goku.webp",

        descricao:"O Saiyajin criado na Terra e defensor do universo.",

        poder:"95%",

        feitos:[
            "Derrotou Freeza em Namekusei",
            "Primeiro Super Saiyajin da nova geração",
            "Derrotou Kid Boo",
            "Salvou o Universo diversas vezes",
            "Dominou o Ultra Instinct",
            
            
        ]

    },

    vegeta:{

        nome:"Vegeta",

        imagem:"img/vegeta.jpeg",

        descricao:"Príncipe dos Saiyajins.",

        poder:"92%",

        feitos:[
            "Derrotou Toppo",
            "Desenvolveu o Ultra Ego",
            "Superou seus limites contra Moro",
            "Ajudou Goku contra Kid Boo",
            "Protegeu Bulma e Trunks"
        ]

    },

    gohan:{

        nome:"Gohan",

        imagem:"img/gohan.jpg",

        descricao:"Filho de Goku.",

        poder:"90%",

        feitos:[
            "Derrotou Cell",
            "Primeiro Super Saiyajin 2",
            "Despertou Beast Gohan",
            "Venceu Cell Max",
            "Foi o guerreiro mais forte da Terra durante a Saga Cell"
        ]

    },

    piccolo:{

        nome:"Piccolo",

        imagem:"img/piccolo.jpg",

        descricao:"O guerreiro Namekuseijin.",

        poder:"87%",

        feitos:[
            "Fundiu-se com Kami",
            "Treinou Gohan",
            "Derrotou diversos Androides",
            "Despertou Orange Piccolo",
            "Protegeu Gohan inúmeras vezes"
        ]

    },

    broly:{

        nome:"Broly",

        imagem:"img/broly.jpeg",

        descricao:"O lendário Super Saiyajin.",

        poder:"99%",

        feitos:[
            "Enfrentou Goku e Vegeta ao mesmo tempo",
            "Obrigou Gogeta a lutar sério",
            "Sobreviveu à destruição de Vegeta",
            "Possui poder que cresce durante a batalha",
            "Considerado um dos Saiyajins mais fortes"
        ]

    }

}

function trocarPersonagem(nome){

    document.getElementById("imagem").src = personagens[nome].imagem;

    document.getElementById("nome").innerHTML = personagens[nome].nome;

    document.getElementById("descricao").innerHTML = personagens[nome].descricao;

    document.getElementById("power").style.width = personagens[nome].poder;

    const lista = document.getElementById("lista-feitos");

    lista.innerHTML = "";

    personagens[nome].feitos.forEach(feito=>{

        lista.innerHTML += `<li>${feito}</li>`;

    });

}