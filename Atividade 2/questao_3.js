function esperarTempo(ms) {
  return new Promise((resolver) => {
    setTimeout(() => resolver(), ms);
  });
}
async function aguardarPromises(promises) {
  return Promise.all(promises);
}
const variasPromises = [esperarTempo(1000), esperarTempo(2000), esperarTempo(3000)];
aguardarPromises(variasPromises).then(() => console.log("Todas as Promises resolvidas"));
