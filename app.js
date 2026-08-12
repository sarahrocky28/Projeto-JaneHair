const imagens = [
    "assets/creme.png",
    "assets/shampoo.png",
    "assets/perfume.png"
]
const imgElemento = document.getElementById("imagemCarrossel");

let indiceAtual = 0;

function mudarFoto() {
    indiceAtual = indiceAtual + 1;

    if (indiceAtual >= imagens.length) {
        indiceAtual = 0;
    }

    imgElemento.src = imagens[indiceAtual];


}

setInterval(mudarFoto, 3000)