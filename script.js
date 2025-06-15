const botaoSim = document.querySelector("#botao1");
const botaoNao = document.querySelector("#botao2");

const textos = [
    "Pq não?",
    ":(",
    "Tem certeza?",
    "???????????????",
    "Eu vou ficar muito triste",
    "Não faz isso eu vou ficar triste",
    "Pq vc é assimmm",
    "Aceita por favooooooooooor",
    "Por mimmmmmmm aceita",
    "Aff desisto"
];

let indice = 0;

function clickBotaoNao() {

    botaoNao.textContent = textos[indice];
    indice = (indice + 1) % textos.length;

    const tamanhoAtual = parseFloat(window.getComputedStyle(botaoSim).fontSize);
    botaoSim.style.fontSize = `${tamanhoAtual * 1.5}px`;

}

function clickBotaoSim() {
    window.location.href = "pagina_sim.html";
}