//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let novoAmigo = document.querySelector('input').value;
    if(novoAmigo == ''){
        alert('Por favor, insira um nome válido.');
    }else{
        amigos.push(novoAmigo);
        listaAmigos(amigos);
    }
    limparCampo();
}

function limparCampo(){
    document.querySelector('input').value = '';
}

function listaAmigos(amigos){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = "";

    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i];
        listaAmigos.appendChild(li);
    }
}

function amigoAleatorio(listaDeAmigos){
    return Math.floor(Math.random() * listaDeAmigos.length);
}

function sortearAmigo(){
    let amigoSorteado = document.getElementById('resultado');
    amigoSorteado.innerHTML = '';
    
    if(amigos.length > 0){
        let li = document.createElement('li');
        let amigoIndice = amigoAleatorio(amigos);
        li.textContent = `O amigo secreto sorteado é: ${amigos[amigoIndice]}`;
        limparListaAmigos();
        amigoSorteado.appendChild(li);
    }else{
        alert('Não existem amigos disponíveis para serem sorteados.');
    }
}

function limparListaAmigos(){
    document.getElementById('listaAmigos').innerHTML = '';
    amigos = [];
}