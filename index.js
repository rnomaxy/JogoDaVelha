const circulo = "/img/circulo.png";
const x = "/img/x.png";
let tipo_jogada = "x";
let jogadas = 0;
let partidaExistindo = 1;

const formasDeGanhar = [
    {input: document.getElementById("input-1"), segundoInput: document.getElementById("input-2"), terceiroInput: document.getElementById("input-3")},
    {input: document.getElementById("input-4"), segundoInput: document.getElementById("input-5"), terceiroInput: document.getElementById("input-6")},
    {input: document.getElementById("input-7"), segundoInput: document.getElementById("input-8"), terceiroInput: document.getElementById("input-9")},
    {input: document.getElementById("input-1"), segundoInput: document.getElementById("input-4"), terceiroInput: document.getElementById("input-7")},
    {input: document.getElementById("input-2"), segundoInput: document.getElementById("input-5"), terceiroInput: document.getElementById("input-8")},
    {input: document.getElementById("input-3"), segundoInput: document.getElementById("input-6"), terceiroInput: document.getElementById("input-9")},
    {input: document.getElementById("input-1"), segundoInput: document.getElementById("input-5"), terceiroInput: document.getElementById("input-9")},
    {input: document.getElementById("input-3"), segundoInput: document.getElementById("input-5"), terceiroInput: document.getElementById("input-7")}
];

function jogada(id) {
    if(!document.getElementById(id).querySelector("img")){
        if(partidaExistindo) {
            let imagem = document.createElement("img");
            document.getElementById(id).append(imagem);
    
            if(tipo_jogada == "x"){
                imagem.setAttribute("src", x);
    
                document.getElementById("input-" + id).value = "x";
    
                tipo_jogada= "circulo";
    
                if(verificaVencedor("x")) {
                    document.getElementById("status-p").textContent = "X VENCEU A PARTIDA";
                    partidaExistindo = 0;
                }
            }
            else {
                imagem.setAttribute("src", circulo);
    
                document.getElementById("input-" + id).value = "circulo";
    
                tipo_jogada= "x";
    
                if(verificaVencedor("circulo")) {
                    document.getElementById("status-p").textContent = "CÍRCULO VENCEU A PARTIDA";
                    partidaExistindo = 0;
                }
            }   
    
            if(jogadas++ == 9) {
                document.getElementById("status-p").textContent = "DEU VELHA"
            }
        }
        else {
            alert("Jogo finalizado!")
        }
    }   
}

function verificaVencedor(vez) {
    if(vez=="x") {
        for(let i = 0; i < formasDeGanhar.length; i++) {
            if(formasDeGanhar[i].input.value == "x" && formasDeGanhar[i].segundoInput.value == "x" && formasDeGanhar[i].terceiroInput.value == "x") {
                return true;
            }
        }
    }
    else if(vez == "circulo") {
        for(let i = 0; i < formasDeGanhar.length; i++) {
            if(formasDeGanhar[i].input.value == "circulo" && formasDeGanhar[i].segundoInput.value == "circulo" && formasDeGanhar[i].terceiroInput.value == "circulo") {
                return true;
            }
        }
    }

    return false;
}

function limparTabuleiro() {
    const inputs = [
        document.getElementById("input-1"), document.getElementById("input-2"), document.getElementById("input-3"),
        document.getElementById("input-4"), document.getElementById("input-5"), document.getElementById("input-6"),
        document.getElementById("input-7"), document.getElementById("input-8"), document.getElementById("input-9")
    ]

    for(let i = 0; i < inputs.length; i++) {
        if(inputs[i].value != "empty") {
            inputs[i].value = "empty";
            tipo_jogada = "x";
            document.getElementById("status-p").textContent = "PARTIDA EM ANDAMENTO";
            jogadas = 0;
            partidaExistindo = 1;
        }
    }

    removeAllImages();
}

function removeAllImages() {
    const images = document.querySelectorAll("img");
    images.forEach(img => img.remove());
}