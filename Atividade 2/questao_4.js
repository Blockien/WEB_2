async function simularBusca(dado) {
  if (dado === "erro") {
    throw new Error("Dado inválido detectado!");
  }
  return "Resultado da busca";
}
async function executarComTratamento() {
  try {
    await simularBusca("erro");
  } catch (erro) {
    console.error("Erro ocorrido:", erro.message);
  }
}

executarComTratamento();
