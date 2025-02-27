//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];

function adicionarAmigo(){
    let novoAmigo = document.querySelector('input').value;
    if(novoAmigo == ''){
        alert('Por favor, insira um nome válido.');
    }else{
        amigos.push(novoAmigo);
        console.log(amigos)
        listaAmigos(amigos)
    }
    limparCampo();
}

function limparCampo(){
    document.querySelector('input').value = '';
}

function listaAmigos(amigos){
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = ""

    for(let i = 0; i < amigos.length; i++){
        let li = document.createElement('li');
        li.textContent = amigos[i]
        listaAmigos.appendChild(li)
    }
}
