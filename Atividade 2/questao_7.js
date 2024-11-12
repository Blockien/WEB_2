function rejeitarComTempo(ms) {
  return new Promise((_, rejeitar) => {
    setTimeout(() => rejeitar(new Error("Timeout alcançado")), ms);
  });
}

rejeitarComTempo(2000).catch((erro) => console.error(erro.message));
