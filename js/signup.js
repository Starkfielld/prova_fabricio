document.getElementById("signupForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita o envio do formulário
  
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;
  
    // Simulando lógica de criação de usuário
    var users = JSON.parse(localStorage.getItem("users")) || [];
  
    var existingUser = users.find(function(user) {
      return user.username === newUsername;
    });
  
    if (existingUser) {
      alert("Usuário já existe!");
    } else {
      var newUser = {
        username: newUsername,
        password: newPassword
      };
  
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));
      alert("Usuário cadastrado com sucesso!");
      window.location.href = "login.html"; // Redireciona para a página de login após o cadastro
    }
  });
  