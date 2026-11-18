'use strict';

/* Funções/Metodos de seleção de elementos:
getElementById, getElementsByClassName, getElementsByTagName */

/* Exemplo 01 */
const pValor = document.querySelector("#valor");
const botaoSomar = document.querySelector("#somar");
const botaoSubtrair = document.querySelector("#subtrair");



//Monitorar o evento de clique nos botões
//Toda vez que acontecer o clique em um botão, alguma ação será feita

//Variavel para receber a contagem a cada clique

let contador = 0;

//Iniciando o botão subtrair com estado desabilitado
botaoSubtrair.disabled =true; //LIGADO
botaoSomar.addEventListener("click", function(){
    // Incrementando a contagem
    contador++;

    //Acessa o elemento selecionado e mostra o valor de contador
    pValor.textContent = contador;
    
    //Habilitando o botão subtrair (disable false)
    botaoSubtrair.disabled = false; //DESLIGADO
});

botaoSubtrair.addEventListener("click", function(){


    if(contador <= 1) {
        botaoSubtrair.disabled = true;
    }
    /* 1) Como impedir que o contador fique negativo */
    contador--; // Decrementando a contagem
    pValor.textContent = contador; //Acessa e mostra
    
    /* 2) COmo desatiar o botão subtrair quando a contagem for ZERO */
});

/* Exemplo 02 */

//Selecionando o elemento atraves do seletor de classe
const imgfoto = document.querySelector(".foto");

//Selecionando todos os botões do exemplo
const botoesDeFoto = document.querySelectorAll("[data-foto]");

//Percorrer os elementos do array de botões (Nodelist)
for(const botao of botoesDeFoto){
    //Para cada botão, monitorar o event ode clique
    botao.addEventListener("click", function(){
        // console.log(botao.textContent);

        //lendo o valor do atributo data- usando dataset
        const imagem = botao.dataset.foto;
        const texto = botao.dataset.texto;

        //Adicionando ao img a imagem e o texto selcionados
        imgfoto.src = imagem;
        imgfoto.alt = texto;

    });
}

/*Exemplo 03  */
const textareaMensagem = document.querySelector("#mensagem");
const spanContadorCaracteres = document.querySelector("#contador");
const spanContadorRegressivo = document.querySelector("#regressivo");

//Evento "Input" :Captura de que é digitado em tempo real
textareaMensagem.addEventListener("input", function(){
    // console.log(textareaMensagem.value);
    let totalCaracteres = textareaMensagem.value.length;

    console.log(totalCaracteres);

    spanContadorCaracteres.textContent = totalCaracteres;

    //Contagem regressiva
    const limiteMaximo = 100;
    const contagemRegressiva = limiteMaximo - totalCaracteres;
    spanContadorRegressivo.textContent = contagemRegressiva;

    if(totalCaracteres >= 100){
        //Então aplicamos a classe excesso (negrito/vermelho)
        spanContadorCaracteres.classList.add("excesso");
        textareaMensagem.style.background = "pink";
        
    } else {
        //senão, remove a classe
        spanContadorCaracteres.classList.remove("excesso");
        textareaMensagem.style.background = "transparent";

    }

    // spanContadorCaracteres.classList.cla( totalCaracteres)
});

/* Exemplo 04 */
const kbdTeclaPressionada = document.querySelector("#tecla kbd");
const pagina = document.body;

//Monitoramento de eventos de teclado sempre a partir do document
document.addEventListener("keypress", function(event){
    //Capturando a recla usada a partir do evento.key
    const teclaUsada = event.key;

    //Exibindo a tecla no HTML
    kbdTeclaPressionada.textContent = teclaUsada;

    if(teclaUsada === "a"){
        kbdTeclaPressionada.style.background = "yellow";
        pagina.style.background = "darkblue";
        pagina.style.transition = "3s";
    }

    if(teclaUsada === "r") {
        kbdTeclaPressionada.style.background = "transparent";
        pagina.style.background = "white";
    }
});

/* Exemplo 05 */

const inputTarfe = document.querySelector("#tarefa");
const botaoAdicionar =document.querySelector("#adicionar");
const listaTarefas =document.querySelector("#lista");

botaoAdicionar.addEventListener("click", function(){
    //Capturar a tarefa digitada no input
    const tarefaDigitada = inputTarfe.value;

    //Se não for digitada nenhuma tarefa, interromoa a função
    if (tarefaDigitada === "") return;

    //Criar o elemento<li>
    const item =document.createElement("li");

    // Adicionando o conteudo (tarefa digitada) ao novo item <li>
    item.textContent = tarefaDigitada;

    //Inserindo o novo <li> na lista
    listaTarefas.appendChild(item);

    inputTarfe.value = ""; //reset
    inputTarfe.focus(); //devolvendo o foco (cursor)
    item.addEventListener("click", function(){
        item.classList.toggle("feito");
    });
});

inputTarfe.addEventListener("keyup", function (event){
    if(event.key === "Enter") botaoAdicionar.click();
});

/*Exemplo 06  */
const formExemplo06 = document.querySelector("#exemplo06");
// Substituindo o "document" pelo "formExemplo06" na hora da procura a maquina pesquisa diretamente no Exemplo06 oa inves de procurar na pagina toda menos no pSaida
const inputNome =document.querySelector("#nome");
const inputIdade =document.querySelector("#idade");
const pSaida =document.querySelector("#saida");

// Detectar o acionamento do formulario: Evento submit
formExemplo06.addEventListener("submit", function(event){
    //Anulando o comportamento padrão do Formulario
    event.preventDefault();

    console.log("formulario acionado!");

    //CapTurando os dados digitados
    const nome = inputNome.value.trim(); // removendo espaços no inicio/fim
    const idade = Number(inputIdade.value); // garantindo que a idade seja tratada como numero

    /* Validações dos campos */

    //Se o nome estiver vazio, avise o usuario
    if(nome ===""){
        pSaida.textContent = "Por favor, preencha o nome";
        pSaida.style.color= "red";
        return; //pare tudo (enquanto essa validação não for atendida)
    }

    //Se idade NÃO É Numero OU se é abaixo de zero Ou se é acima de 120 Ou se é vazia
    if(isNaN(idade) || idade < 0 || idade >120 || idade ==""){
        pSaida.textContent ="Por favor, preencha idade entre 0 e 120";
        pSaida.style.color = "purple";
        return;

        
    }
    //nenhuma das condiçôes ateriores deu true? Então significa que tudo deu certo!
    //Portanto, avisamos o usuario:
    pSaida.textContent = `Ola ${nome}, você tem ${idade} anos! Seus dados foram evniados!`;
    pSaida.style.color= "blue";

    formExemplo06.reset(); //(reset limpeza) dis campos
    inputNome.focus(); //devolvendo o cursor (foco) ao primeiro campo
});

/* Exemplo 07 */
const inputSenha = document.querySelector("#senha");
const botaoMostrar =document.querySelector("#mostrar");

//Ao pressionar botão
botaoMostrar.addEventListener("pointerdown", function(){
    inputSenha.type = "text";
    botaoMostrar.textContent = "🥶 oculatar senha"
});

// Ao "soltar" ou liberar o botão
botaoMostrar.addEventListener("pointerup", function(){
    inputSenha.type = "password";
    botaoMostrar.textContent = "👁️ Mostrar senha";
});