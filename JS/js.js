const formulario = document.getElementById("formularioNotas");
const inputNotas = document.getElementById("anotacao");
const coresDisponiveis = document.querySelectorAll(".cor");
const notasRegistradas = document.querySelector(".notas_registradas");

const vetorNotas = [];
let corEscolhida;

let idCard = 1;


document.addEventListener("DOMContentLoaded", function () {
    const dados = pegarDadosLocalStorage();
    mostrarNotas(dados);
    procurandoQualCardFoiClicado();
});


function pegarDadosLocalStorage() {
    const dados = localStorage.getItem("notas"); //Notas é a chave que eu escolhi quando eu salvei no BD

    if (dados !== null) {
        return JSON.parse(dados); //Transforma a String que convertemos os dados para Objetos novamente
    } else {
        return []
    }
}


function mostrarNotas(dados) {

    for (let i = 0; i < dados.length; i++) {
        const cartaoNotas =
            `
         <div class="cardNotas ${dados[i].cor}" id="cardNotas" data-id="${dados[i].id}">
                <div class="cabecalhoCardNotas ">
                    <input type="checkbox" class="checkboxNotasRalizadas" id="checkboxNotasRalizadas">
                </div>
                <div class="corpoCardNotas ">
                    <p> ${dados[i].texto} </p>
                </div>
                <div class="rodapeCardNotas">
                    <p><i class="bi bi-calendar-event" id="diaDaSemanaCardNotas"></i> 22/09/2026</p>
                    <i class="bi bi-pencil editarCardNotas" id="editarCardNotas"></i>
                    <i class="bi bi-trash excluirCardNotas" id="excluirCardNotas"></i>
                </div>
            </div>
            `;
        notasRegistradas.innerHTML += cartaoNotas;
    }

}


coresDisponiveis.forEach(cor => {
    cor.addEventListener("click", () => {
        corEscolhida = cor.dataset.cor;
    })

});



formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(evento) { //evento vem automáticamente pelo navegador
    evento.preventDefault(); // faz com que o navegador não recarregue novamente a página.

    const notas = {
        id: idCard,
        texto: inputNotas.value,
        cor: corEscolhida
    }
    idCard++;
    vetorNotas.push(notas);
    salvandoNoLocalStorage(vetorNotas);
    mostrarNotas([notas]);
    formulario.reset();


}

function salvandoNoLocalStorage(vetorNotas) {
    localStorage.setItem("notas", JSON.stringify(vetorNotas)); //converte de Objeto para JSON em formato de String
}

function procurandoQualCardFoiClicado() {
    const botaoClicado = document.querySelectorAll(".excluirCardNotas, .editarCardNotas");

    botaoClicado.forEach(botao => {

        console.log("entro")
        botao.addEventListener("click", () => {
            const cardClicado = botao.closest(".cardNotas");
            const idAtual = cardClicado.dataset.id;

            if (botao.classList.contains("excluirCardNotas")) {
                console.log(`AÇÃO: Clique para Exclusão \nID: ${idAtual}`);
                excluirCard(idAtual, cardClicado);
            } else if (botao.classList.contains("editarCardNotas")) {
                console.log(`AÇÃO: Clique para Edição \nID: ${idAtual}`);
                editarCards(idAtual, cardClicado);
            }

        })
    })
}


function excluirCard(idAtual, cardClicado) {
    const dados = pegarDadosLocalStorage();
    cardClicado.remove()
    const novasNotas = dados.filter(function (nota) {
        return nota.id != idAtual;
    }); // esta parte faz com que as notas sejam atualizadas no Banco e isso é importante, pq sem ela quando dou F5 a tela recarrega com a nota excluida ainda
    salvandoNoLocalStorage(novasNotas);

}