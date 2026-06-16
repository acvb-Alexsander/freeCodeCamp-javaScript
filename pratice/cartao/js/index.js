function validarIdade() {
  let nome = document.getElementById("nome").value;
  let idade = document.getElementById("idade").value;
  if (idade == 100) {
    document.getElementById("carta").innerText =
      `Aqui está sua carta do Rei, senhor ${nome}`;
  } else if (idade > 100) {
    document.getElementById("carta").innerText =
      `Já recebeu a carta do Rei, senhor ${nome}`;
  } else {
    document.getElementById("carta").innerText =
      `Ainda está muito jovem para receber a carta do Rei, senhor ${nome}`;
  }
}
