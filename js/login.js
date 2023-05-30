document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
  
    // Simulando lógica de autenticação
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    var user = users.find(function(user) {
      return user.username === username && user.password === password;
    });
  
    if (user) {
      window.location.href = "dashboard.html"; // Redireciona para o dashboard após o login
    } else {
      alert("Usuário ou senha inválidos!");
    }
  });
  