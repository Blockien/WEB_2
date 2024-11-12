function esperarTempo(ms) {
  return new Promise((resolver) => {
    setTimeout(() => resolver(), ms);
  });
}

esperarTempo(2000).then(() => console.log("Esperou por 2 segundos"));
