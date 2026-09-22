const formulario = document.getElementById("formularioNotas");
const inputNotas = document.getElementById("anotacao");
const coresDisponiveis = document.querySelectorAll(".cor");
const notasRegistradas = document.querySelector(".notas_registradas");

const vetorNotas =[];
let corEscolhida;



document.addEventListener("DOMContentLoaded", function(){
    const dados = pegarDadosLocalStorage();
    mostrarNotas(dados);
});


function pegarDadosLocalStorage(){
    const dados = localStorage.getItem("notas"); //Notas é a chave que eu escolhi quando eu salvei no BD
    
    if(dados){
    return JSON.parse(dados); //Transforma a String que convertemos os dados para Objetos novamente
    }
    return []
}


function mostrarNotas(dados){
    
    for(let i = 0; i < dados.length; i++){
        const cartaoNotas = 
        `
         <div class="cardNotas ${dados[i].cor}" id="cardNotas">
                <div class="cabecalhoCardNotas ">
                    <input type="checkbox" class="checkboxNotasRalizadas" id="checkboxNotasRalizadas">
                </div>
                <div class="corpoCardNotas ">
                    <p> ${dados[i].texto} </p>
                </div>
                <div class="rodapeCardNotas">
                    <p><i class="bi bi-calendar-event" id="diaDaSemanaCardNotas"></i> 22/09/2026</p>
                    <i class="bi bi-pencil" id="editarCardNotas"></i>
                    <i class="bi bi-trash" id="excluirCardNotas"></i>
                </div>
            </div>
            `;
             notasRegistradas.innerHTML += cartaoNotas;
    }
   
}


coresDisponiveis.forEach(cor => {
    cor.addEventListener("click",()=> {
        corEscolhida = cor.dataset.cor;
    })
    
});



formulario.addEventListener("submit", enviarFormulario);

function enviarFormulario(evento){ //evento vem automáticamente pelo navegador
    evento.preventDefault(); // faz com que o navegador não recarregue novamente a página.
    
    const notas ={
        texto: inputNotas.value,
        cor: corEscolhida
    }
    vetorNotas.push(notas);
    salvandoNoLocalStorage(vetorNotas);
    mostrarNotas([notas]);
    formulario.reset();
    
    
}

function salvandoNoLocalStorage(vetorNotas){
    localStorage.setItem("notas", JSON.stringify(vetorNotas)); //converte de Objeto para JSON em formato de String
}
