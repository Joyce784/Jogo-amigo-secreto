//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];

function adicionarAmigo() {
    let nome = document.getElementById('amigo').value;

    if (nome === '') {
        alert('Digite o nome do seu amigo.');
        return;
    }

    if (amigos.includes(nome)) {
        alert('Esse amigo já foi adicionado.');
        return;
    }

    amigos.push(nome);

    atualizarLista();

    document.getElementById('amigo').value = '';
}

function atualizarLista() {
    let listas = document.getElementById('listaAmigos');

    listas.innerHTML = '';

    amigos.forEach(function(amigo) {
        let li = document.createElement('li');
        li.textContent = amigo;
        listas.appendChild(li);
    });
}

function mostrarNome() {
    let nome = document.getElementById('amigo').value;
    let nomePreview = document.getElementById('nomePreview');

    nomePreview.textContent = nome;
}

document.getElementById('amigo').addEventListener('input', mostrarNome);

function sortearAmigo() {
    if (amigos.length < 2) {
        alert('É necessário pelo menos 2 amigos para sortear!');
        return;
    }

    let indiceSorteado = Math.floor(Math.random() * amigos.length);
    let amigoSorteado = amigos[indiceSorteado];
     
    let resultadoElemento = document.getElementById('resultado');
    resultadoElemento.textContent = `O amigo secreto sorteado é: ${amigoSorteado}`;
}



function exibirResultado(sorteios) {
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    
    sorteios.forEach(sorteio => {
        let li = document.createElement('li');
        li.textContent = sorteio;
        resultado.appendChild(li);
    });
}