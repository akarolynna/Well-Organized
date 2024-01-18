// Variáveis - Relacionadas a botões
var botaoAbrirFormulario = document.getElementById("abrirFormulario").addEventListener("click", abrirFormulario);
var botaoFecharFormulario = document.getElementById("fecharFormulario").addEventListener("click", fecharFormulario);
var botaoCadastrarCard = document.getElementById("botaoCadastrarCard").addEventListener("click", cadastrarCard);

// Variáveis - Relacionadas mais com o estilo 
var formulario = document.getElementById("formulario");
var overlay = document.getElementById("overlay");

// Variáveis - Relacionadas aos dados do formulário
var botaoCoresCard = document.querySelectorAll('.botoesCores button');
var tituloCard, descricaoCard, corSelecionada;  // Inicializa sem valor

botaoCoresCard.forEach(function (botao) {
    botao.addEventListener('click', function () {
        corSelecionada = botao.id; // Armazena a cor selecionada na variável global
    });
});

// Funções do código
function abrirFormulario() {
    overlay.style.display = "block";
    formulario.style.display = "block";
}

function fecharFormulario() {
    formulario.style.display = "none";
    overlay.style.display = "none";
}

function limparFormulario() {
    document.getElementById("tituloCard").value = "";
    document.getElementById("descricaoCard").value = "";

}


function cadastrarCard(event) {
    if (event) {
        event.preventDefault();
    }
    // Obter os valores dos campos no momento do cadastro
    tituloCard = document.getElementById("tituloCard").value;
    descricaoCard = document.getElementById("descricaoCard").value;

    var card = document.createElement("div");
    var containerCards = document.getElementById("containerCards");

    // Adiciona classe da cor selecionada
    
    
    
    
    
    
    card.classList.add(corSelecionada);
    card.classList.add("card1");

    // card.classList.add(corSelecionada);
    var esqueleto = `
    <div class="cabecalho">
        <button class="naoConcluido" id="naoConcluido">
            <img src="Public/assets/naoConcluido.png" alt="Icone não concluído">
            <span>Não concluído</span>
        </button>
    </div>
    <div class="corpo">
        <div class="tituloCard">
            <h1>${tituloCard}</h1>
        </div>
        <div class="paragrafo">
            <p>${descricaoCard}</p>
        </div>
    </div>
    <div class="rodape">
        <img src="Public/assets/arquivado.png" alt="Arquivado">
    </div>
    `;

    card.innerHTML = esqueleto;
    containerCards.appendChild(card);
    fecharFormulario();
    limparFormulario();
}
