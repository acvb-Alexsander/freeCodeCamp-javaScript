function validar() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("age").value;
  if (idade >= 21) {
    let validade = (document.getElementById("validade").innerText =
      `${nome} Pode Entrar`);
  } else {
    let validade = (document.getElementById("validade").innerText =
      `${nome} não pode Entrar`);
  }
}
