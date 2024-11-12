function pausar(ms) {
  return new Promise((resolver) => setTimeout(resolver, ms));
}

(async function() {
  console.log("Começo da pausa");
  await pausar(2000);
  console.log("Fim da pausa");
})();
