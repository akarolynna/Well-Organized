var botaoAddTarefa = document.getElementById("addTarefa").addEventListener("click", formulario);
var formulario = document.getElementById("formulario");
var botaoFecharFormulario = document.getElementById("fechar").addEventListener("click",fecharFormulario);

function formulario() {
    formulario.style.display = "block";
 }

function fecharFormulario() {
    formulario.style.display = "none";   
}
