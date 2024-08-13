const tagData = document.querySelector("#data");

function DataScript() {
    let data = new Date().toLocaleDateString('pt-BR');
    tagData.textContent = `${data}`;
}


document.addEventListener("DOMContentLoaded", DataScript);