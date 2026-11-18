'use strict'
new Splide('.splide').mount();
const opcoes = {
    type: 'loop',
    autoplay: true,
    interval: 1000,
    pagination: false,

    //Design responsivo
    perPage: 3,
    gap: "1rem",
    breakpoints:{
        800: { perPage: 2 },
        600: { perPage: 1 },
    }
};

//Criando e guardando o slider em memoria
const slider = new Splide('.splide', opcoes);

//ativando
slider.mount();