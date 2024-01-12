var botaoAddTarefa = document.getElementById("addTarefa").addEventListener("click", abrirFormulario);
var botaoFecharFormulario = document.getElementById("fechar").addEventListener("click", fecharFormulario);

var formulario = document.getElementById("formulario");
var overlayF = document.getElementById("overlay");
function abrirFormulario() {
    overlay.style.display = "block";
    formulario.style.display = "block";
}

function fecharFormulario() {
    formulario.style.display = "none";
    overlay.style.display = "none";
}
