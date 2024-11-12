function esperarTempo(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function obterPrimeiraResolvida(listaPromises) {
  return Promise.race(listaPromises);
}
const listaDePromises = [esperarTempo(3000), esperarTempo(1000), esperarTempo(2000)];
obterPrimeiraResolvida(listaDePromises).then(() => console.log("Primeira Promise foi concluída"));
