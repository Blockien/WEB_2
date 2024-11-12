async function simularBusca(dado) {
  if (dado === "erro") {
    throw new Error("Dado inválido detectado!");
  }
  return "Resultado da busca";
}

simularBusca("erro")
  .then((resposta) => console.log(resposta))
  .catch((erro) => console.error(erro.message));
