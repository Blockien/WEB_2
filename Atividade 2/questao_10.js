const fs = require('fs').promises;

async function lerConteudoDiretorio(caminho) {
  try {
    const conteudo = await fs.readdir(caminho);
    return conteudo;
  } catch (erro) {
    throw new Error("Erro ao ler diretório");
  }
}

lerConteudoDiretorio("./")
  .then((arquivos) => console.log("Arquivos encontrados:", arquivos))
  .catch((erro) => console.error(erro.message));
