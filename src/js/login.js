document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('login-form');
    const usuarioInput = form.querySelector('input[name="usuario"]');
    const senhaInput = form.querySelector('input[name="senha"]');
    const submitButton = form.querySelector('input[type="submit"]');
    
    // Função para verificar se ambos os campos estão preenchidos
    function checkInputs() {
      const usuarioValue = usuarioInput.value.trim();
      const senhaValue = senhaInput.value.trim();
  
      if (usuarioValue !== '' && senhaValue !== '') {
        submitButton.disabled = false;
        submitButton.classList.add('active');
      } else {
  
        submitButton.disabled = true;
        submitButton.classList.remove('active');
      }
    }
  
    // Adiciona eventos para verificar os campos de entrada
    usuarioInput.addEventListener('input', checkInputs);
    senhaInput.addEventListener('input', checkInputs);
  
    // // Obtendo as dimensões da tela
    // const larguraTela = window.screen.width;
    // const alturaTela = window.screen.height;
  
    // // Exibindo as dimensões no console
    // document.getElementById('largura').innerText = `Largura da tela: ${larguraTela}px`;
    // document.getElementById('altura').innerText = `Altura da tela: ${alturaTela}px`;
  
  });