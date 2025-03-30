function login() {
    var user = document.getElementById("username").value;

    // Verifica o setor digitado
    if (user.toLowerCase() === "coleta") {
        window.location.href = "coleta.html";  // Redireciona para a página de coleta
    } else if (user.toLowerCase() === "notas") {
        window.location.href = "notas.html";  // Redireciona para a página de notas
    } else {
        alert("Usuário não reconhecido!");  // Exibe um alerta caso o setor seja inválido
    }
}