// Seleciona o elemento <form> do HTML
const form = document.querySelector('form');

// Captura o evento de envio do formulário
form.addEventListener('submit', function(event) {
  // Impede o envio padrão do formulário
  event.preventDefault();

  // Seleciona o valor dos campos de entrada do formulário
  const name = document.querySelector('#name').value;
  const email = document.querySelector('#email').value;
  const password = document.querySelector('#password').value;

  // Cria um objeto com as informações do usuário
  const user = {
    name,
    email,
    password
  };

  // Armazena as informações do usuário no armazenamento local do navegador
  localStorage.setItem(email, JSON.stringify(user));

  // Redireciona o usuário para a página de login
  window.location.href = 'login.html';
});
