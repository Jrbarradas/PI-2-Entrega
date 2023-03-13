const loginBtn = document.querySelector("#login-btn");

loginBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const emailInput = document.querySelector("#email");
  const passwordInput = document.querySelector("#password");

  // TODO: validar as informações do formulário

  // Se as informações estiverem corretas, redireciona para a página de feed
  window.location.href = "feed.html";
});
