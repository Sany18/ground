// function importAll(r) {
//   // let images = {}; r.keys().map(item => { images[item.replace('./', '')] = r(item); });
//   let images = []; r.keys().map(item => images.push(r(item))); images = images.slice(images.length / 2);
//   return images;
// }

// const images = importAll(require.context('assets/images/pirate', false, /\.(png|jpe?g|svg)$/));
