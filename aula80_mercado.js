//Atividade - Lista de JavaScript - Debug I

// Introdução
// Esta é uma atividade de debug. Os códigos estão parcialmente criados, ou totalmente criados, mas funcionando incorretamente.
// Investigue o código, teste e corrija o que achar necessário.

// Contexto
// Um mercado te pediu um sistema para ajudar organizar as seções e seus respectivos itens, além de algumas funcionalidades administrativas, como serviço de login e ponto.
// A equipe de TI anterior começou a desenvolver, mas não estava dando muito certo. O seu trabalho é fazer com que o sistema funcione.

// Funções
// Conforme a equipe anterior, as funções abaixo já foram desenvolvidas, porém, nenhuma delas funciona da forma que deveria.

// 1) adicionarSecaoAoMercado()
// Esta função recebe uma seção (lista de itens) como parâmetro.
// Esta função deve ter a funcionalidade de inserir uma nova seção de itens ao mercado.
// Erros: Existe um erro na construção da estrutura.

// 2) adicionarItemASecao()
// Esta função recebe um item (string) como parâmetro e a seção (lista) para a inserção.
// Esta função deve ter a funcionalidade de inserir novos itens à seção de itens.
// Erros: Existe um erro na forma de inserir o elemento.

// 3) retornarItemDaSecao()
// Esta função recebe como parâmetro o nome de um item da lista.
// Esta função deve ter a funcionalidade de buscar e retornar o item pelo nome na lista.
// Erros: Existe erro de sintaxe, verifique a função do método.

// 4) retornaUltimoItemDaSecao()
// Esta função recebe um parâmetro a seção (lista).
// Esta função deve ter a funcionalidade de retornar o último item da lista, independente do tamanho da lista.
// Erros: Existe erro de lógica na captura do último elemento.
// ⁠Caso de uso:
// Entrada: secao
// Saída: undefined
// Saída esperada: o último item da lista

// 5) consultaSecoesMercado()
// Esta função recebe a lista de seções do mercado como parâmetro.
// Esta função deve ter a funcionalidade de imprimir todas seções no console.
// Erros: Existem erros de lógica na comparação e no retorno.
// ⁠Caso de uso:
// Entrada: secoesMercado
// Saída: apenas o elemento do índice 0
// Saída esperada: Todos os elementos da lista.

// 6) somaItens()
// Esta função recebe dois valores como parâmetro.
// Esta função deve ter a funcionalidade de retornar a soma dos dois valores.
// Erros: Existe erro de lógica.
// ⁠Caso de uso:
// Entrada: "1", "1"
// Saída: 11
// Saída esperada: 2

// 7) baterPonto()
// Esta função recebe como parâmetro o nome de um funcionário.
// Esta função deve ter a funcionalidade de registrar o ponto, caso o funcionário esteja registrado.
// Erros: Existe erro de lógica.
// ⁠Caso de uso:
// Entrada: "sonia", 0
// Saída: Funcionario não cadastrado
// Saída esperada: Turno processado.

// 8) loginSistema()
// Esta função recebe como parâmetro um nome de usuário e uma senha.
// Esta função tem a funcionalidade de realizar o login de um funcionário.
// Erros: Existem erros de sintaxe e de lógica, corrija primeiro os erros de sintaxe
// Caso de uso:
// Entrada: "luffy123", 326541
// Saída: Acesso liberado.
// Saída esperada: Acesso negado.


let secoesMercado = {
        
    hortifruti : [],
    açougue : [],
    padaria : [],
    adegaEBebidas : [],
    laticiniosEFrios : [],
    };


console.log(secoesMercado);

// //1) ADICIONANDO SEÇÃO AO MERCADO

function adicionarSecaoAoMercado(secao){
    
secoesMercado[secao] = [];
return secoesMercado;
}
console.log((adicionarSecaoAoMercado("materiaisDeLimpeza")));

// // 2) ADICIONAR ÍTEM A UMA SEÇÃO

function adicionarItemASecao(secao, novoItem){
confere = secoesMercado.hasOwnProperty([secao]);

//Validação da seção do mercado
if (confere !== true){
    return "SEÇÃO INVÁLIDA. Digite uma seção existente";
}
secoesMercado[secao].push(novoItem);
}

console.log(adicionarItemASecao("padaria", "coxinha"));
console.log(adicionarItemASecao("padaria", "mussarela"));
console.log(adicionarItemASecao("adegaEBebidas", "vinho"));


// // 3) RETORNAR UM ÍTEM PELO NOME DA SEÇÃO

// // Transformando dados do objeto, "cheve e valor" em um array
let dados = Object.entries(secoesMercado);
    console.log(dados);

    function retornarItemDaSecao(valor, dados){
    for (let i=0; i <dados.length; i++){
        for (let j=0; j< dados[i].length; j++){
            for (let k=0; k< dados[i][j].length; k++){
                if (dados [i][j][k].includes(valor)){
                    return `o item ${valor} está na seção ${dados[i][0]}`;
                }
            }
        }
    }
    return "item não encontrado";
    }
    console.log(retornarItemDaSecao("coxinha", dados));


//      //4) RETORNAR ÚLTIMO ÍTEM DA SEÇÃO

     function retornaUtlimoItemDaSecao(secao){
        //Validação da seção do mercado

        let confere = secoesMercado.hasOwnProperty([secao]);
        if (confere !== true){
        return "SEÇÃO INVÁLIDA. Digite uma seção existente";
        }
        
        let secaoDeBusca = [];
        for (let i in secoesMercado){
            if ( i == secao){
                secaoDeBusca = secoesMercado[i];
            }          
        }
        console.log(secaoDeBusca);
        
        let ultimaPosicao = (secaoDeBusca.length) -1;
        
        return `ultimo item da secão ${secao} é ${secaoDeBusca[ultimaPosicao]}`;
    }  

    console.log(retornaUtlimoItemDaSecao("padaria"));

      //5) CONSULTANDO TODAS AS SEÇÕES DO MERCADO

      function consultaSecoesMercado (){
        let consulta = [];
         consulta = Object.keys(secoesMercado);
        return consulta;
    }

    console.log(consultaSecoesMercado());

       // 6) SOMA ITENS

       function somaItens(totalA, totalB){
        if(totalA != 0 && totalB != 0){
    
            return totalA + totalB
        }
    }
    console.log(somaItens(10,20));

        // 7) BATER PONTO
        function baterPonto(nome, numeroFicha){

            const funcionarios = ["Sônia", "Cage", "Alex", "Liu Ken"]
    
            //Validação do funcionário
            let funcionarioEncontrado = false;
            for (let i =0; i< funcionarios.length; i++){
                if (nome == funcionarios[i]){
                    funcionarioEncontrado = true;
                }
            }
            if (funcionarioEncontrado == false){
                return "Funcionário não encontrado";
            }
    
                //Validação do número da ficha
                if (numeroFicha <0 || numeroFicha>= funcionarios.length || nome !=funcionarios[numeroFicha]){
                    return "Número de ficha incorreto";
                }
    
            //Processando turno do funcionário
                    return "Turno Processado";
                }
    
        console.log(baterPonto("Sônia", 0));

          // 8) LOGIN SISTEMA

    function loginSistema(nomeUsuario, senhaUsuario){
    
        const listaUsuarios = ["luffy123", "acer321", "nami"]
    
        const listaSenhas = [123, 456, 789];

        //validação de usuário
        let validaUsuario = false;
        for (let i=0; i< listaUsuarios.length; i++){
            if (nomeUsuario == listaUsuarios[i]){
                validaUsuario =true;
            }
        }

        if (validaUsuario == false){
            return "Usuário Inválido";
        }

        //validação da senha
        let validaSenha = false;
        for (let j=0; j<listaSenhas.length; j++){
            if (senhaUsuario == listaSenhas[j]){
                validaSenha = true;
            }
        }

        if (validaSenha == false){
            return "Senha Inválida"
        }

        //validando login
        let posicaox = listaUsuarios.indexOf(nomeUsuario);
        let posicaoy = listaSenhas.indexOf(senhaUsuario);
        
        if (posicaox !== posicaoy){
            return "Usuário e Senha não correspondentes"
        }

        return "Login Efetuado com sucesso";
    }
    console.log(loginSistema("acer321", 123));
