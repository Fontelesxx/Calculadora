const tela = document.getElementById("tela") // Criou uma variável para o input da calculadora

function adicionarValor(valor){ // Função que adiciona na tela o valor que o usuário clicar
    tela.value += valor
}

function limpar(){ //limpa a tela
    tela.value = ""
}

function del(){ //Apaga um número por vez
    tela.value = tela.value.slice(0,-1) // slice é uma sub-string ela deleta a string anterior  (0, -1(quantas strings deve tirar))
}

function helo(){
    tela.value = "Hello Word!"
}


function resultado(){
    try{  // tentativa
        tela.value = eval(tela.value) // avalia a expressão textual (ex: "2+3*4") e coloca o resultado na tela
        // ATENÇÃO: eval executa código JavaScript - funciona para expressões matemáticas simples, mas requer cuidado com a entrada do usuário
    }
    
    catch(erro){ //Caso a tentativa não der certo
        tela.value = "Erro"
    }
}


//Adicionando evento do teclado

document.addEventListener(
    'keydown', function(evento){ // keydown é um evento onde eu aperto a tecla
        const tecla = evento.key
        if("0123456789+-*/.".includes(tecla)){ // Verificar se estes caracteres estão incluidos na tela
            adicionarValor(tecla)
        }
        if(tecla === "Enter" || tecla === "="){ // se o usuario digitar = ou enter vai dar o resultado
            resultado()
        }
        if(tecla === "Backspace"){ // se o ususario digitar backspace ele apaga um caractere por vez
            del()
        }
        if(tecla === "Escape"){ // se o usuario digitar o esc apaga tudo
            limpar()
        }
    }
) 