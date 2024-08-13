// Seleciona os botões e os formulários apenas uma vez
const btnFinalizado = document.querySelector('.btn-finalizado');
const btnPausado = document.querySelector('.btn-pausado');
const btnEdit = document.querySelector('.btn-Edit');
const form1 = document.querySelector('#formActive');
const form2 = document.querySelector('#formPausado');
const inputConcluido = document.querySelector("#ativo");
const inputPausado = document.querySelector("#pendentes");
const text = document.querySelector('.title');

// Inicializa o estado de exibição dos formulários
let showForm1 = true; // Começa com o form1 ativo

function updateUI() {
  // Utilize a transição para garantir que o navegador não reflow repetidamente
  form1.classList.toggle('active', showForm1);
  form1.classList.toggle('off', !showForm1);
  form2.classList.toggle('active', !showForm1);
  form2.classList.toggle('off', showForm1);

  // Atualize o estado dos inputs
  inputConcluido.checked = showForm1;
  inputPausado.checked = !showForm1;
  text.textContent = showForm1 ? 'Formulário da Pauta Finalizada' : 'Formulário da Pauta Pausado';
}

function showFinalizado() {
  showForm1 = true;
  updateUI();
}

function showPausado() {
  showForm1 = false;
  updateUI();
}

btnFinalizado.addEventListener('click', showFinalizado);
btnPausado.addEventListener('click', showPausado);

// Inicializa a UI no carregamento
updateUI();

function editPautaView() {
  document.location.assign('/consulta');
}

btnEdit.addEventListener('click', editPautaView);
