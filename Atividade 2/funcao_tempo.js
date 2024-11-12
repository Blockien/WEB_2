function esperarTempo(ms) {
    return new Promise((resolver) => {
      setTimeout(() => resolver(), ms);
    });
  }
  
  module.exports = { esperarTempo };
  