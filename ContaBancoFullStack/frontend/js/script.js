document.getElementById("form-conta").addEventListener("submit", async function (event) {
    event.preventDefault();

    const dados = {
        numero: document.getElementById("numero").value,
        agencia: document.getElementById("agencia").value,
        nomeCliente: document.getElementById("nomeCliente").value,
        saldo: parseFloat(document.getElementById("saldo").value)
    };

    try {
        const resposta = await fetch("http://localhost:8080/criar-conta", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(dados)
        });

        const mensagem = await resposta.text();
        document.getElementById("mensagem").innerText = mensagem;
    } catch (error) {
        console.error("Erro ao enviar os dados:", error);
        document.getElementById("mensagem").innerText = "Erro ao criar conta. Tente novamente.";
        document.getElementById("mensagem").style.color = "red";
    }
});
