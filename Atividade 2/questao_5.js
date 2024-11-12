async function chamadaAPI(status) {
  if (status === 200) {
    return { dados: "Dados da API recebidos com sucesso" };
  }
  throw new Error("Status diferente de 200 encontrado");
}
chamadaAPI(200)
  .then((dados) => console.log(dados.dados))
  .catch((erro) => console.error(erro.message));
