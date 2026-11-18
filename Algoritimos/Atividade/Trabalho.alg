Algoritmo "Atividade Final"

Var
    nome: vetor[0..2] de caractere
    idade: vetor[0..2] de inteiro
    app: inteiro
    resposta: caractere

Inicio
    Escreval("=== Cadastro de Clientes ===")
    Escreval("")

    para app de 0 ate 2 faca
        Escreval("Cliente ", (app+1), " de 3")
        Escreva("Nome: ")
        Leia(nome[app])
        Escreva("Idade: ")
        Leia(idade[app])
        Escreval("")
    fimpara


    repita
        Escreval("")
        Escreva("Deseja visualizar os usuários cadastrados? (S/N): ")
        Leia(resposta)

        se (resposta <> "S") e (resposta <> "N") entao
            Escreval("Resposta inválida! Tente novamente!")
        fimse
    ate (resposta = "S") ou (resposta = "N")


    se resposta = "S" entao
        limpatela
        Escreval("=== Dados Cadastrados ===")
        Escreval("")

        para app de 0 ate 2 faca
            Escreval("Cliente ", (app+1), ":")
            Escreval("Nome: ", nome[app])
            Escreval("Idade: ", idade[app], " anos")


            se idade[app] < 18 entao
                Escreval("Classificação: Menor de idade")
            senao
            se idade[app] >= 60 entao
                Escreval("Classificação: Idoso")
            senao
                Escreval("Classificação: Adulto")
            fimse
            fimse

            Escreval("-----------------------------")
        fimpara
    senao
        Escreval("")
        Escreval("Cadastro finalizado com sucesso!")
    fimse

fimalgoritmo

