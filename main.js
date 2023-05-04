function tocaSom (seletorAudio) { //função de seletor de audio que irá da play no audio existente no html.
    const elemento = document.querySelector(seletorAudio); 

    if (elemento && elemento.localName === 'audio') { // Se o elemento for diferente de nullo ou seja 'true'
        // E se o localName desse elemento  conter um 'audio' dentro ou seja  for um elemento de audio return true.
            elemento.play(); // Se for true return play no elemento audio.
        }
    else { // Se o elemento for igual a nullo ou seja não for um elemento de audio return false.
        console.log ("Elemento não encontrado ou seletor inválido");
    }
}

const listaDeTeclas = document.querySelectorAll('.tecla'); // minha lista de teclas.

for (let contador = 0; contador < listaDeTeclas.length; contador ++) { //loop de repetição for, contador que irei ultilizar no loop
        // cada vez que o contador for menor que o tamanho da minha lista repete e executa, contador incrementado a cada loop

            const tecla = listaDeTeclas[contador]; // criei uma constante que armazenara minhas listas de teclas 
            
            const instrumento = tecla.classList[1]; // Estou retornando uma lista com classes que estão na section botão dentro do html
        //com isso eu conseguirei ter acesso as classes que possuem tecla + o instrumento ex: tecla_pom assim por diante.  
            
            //template string
            const idAudio = `#som_${instrumento}`; // aqui eu criei um template string que irá juntar o inicio de id #som_ que está no meu html
        // com a lista que eu imprimir acima que contem ex: tecla_pom assim juntando os dois fica som_tecla_pom que e o nome do id   
        // que está armazenando o som das teclas dentro do html.
            
        tecla.onclick = function () {
            tocaSom(idAudio); //atribuo o valor da função tocaSom que está responsavel por da play no id elemento que eu passar que no caso será de todos os ids de audio.
        }

        tecla.onkeydown = function (event) { //Função para ser ativada ao usuario clicar no botao
        
            if (event.code === 'Space' || event.code === 'Enter') {
                tecla.classList.add('ativa') // Se o botao tiver precionado adiciona a class 'ativa'
    };
}
        
        tecla.onkeyup = function () { //Função para ser ativada quando o usuario soltar o botao
            tecla.classList.remove('ativa'); // Se o botao não tiver precionado remove a class 'ativa'
        }
}
