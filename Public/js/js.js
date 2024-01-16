// Variáveis - Relacionadas a botões
var botaoAbrirFormulario = document.getElementById("abrirFormulario").addEventListener("click", abrirFormulario);
var botaoFecharFormulario = document.getElementById("fecharFormulario").addEventListener("click", fecharFormulario);
var botaoCadastrarCard = document.getElementById("cadastrarCard").addEventListener("click", criarCard);

// Variáveis - Relacionadas a estilo e ao formulário
var formulario = document.getElementById("formulario");
var overlay = document.getElementById("overlay");
var containnerCard = document.querySelector(".containerCards");

// Adicionando ouvintes de eventos aos botões de cores apenas uma vez

function abrirFormulario() {
    overlay.style.display = "block";
    formulario.style.display = "block";
}

function fecharFormulario() {
    formulario.style.display = "none";
    overlay.style.display = "none";
}




function criarCard() {
    var card = document.createElement('div');
    var titulo = formulario.getElementById("titulo").value;
    var descricao = formulario.getElementById("descricao").value;


    card.classList.add("article", "containerCards", "card1");

    var conteudoHTML = `
    <div class="cabecalho">
                    <button class="naoConcluido" id="naoConcluido">
                        <img src="Public/assets/naoConcluido.png" alt="Icone não concluido">
                        <span>Não concluido</span>
                    </button>
                </div>
                <div class="corpo">
                    <div class="tituloCard">
                    <h1>${titulo}</h1>
                    </div>
                    <div class="paragrafo">
                    <p>${descricao} </p>
                    </div>
                </div>
                <div class="rodape">
                    <img src="Public/assets/arquivado.png" alt="Arquivado">
                </div>

        `;
    card.innerHTML = conteudoHTML;
    containnerCard.appendChild(card);
}