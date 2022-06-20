function importAll(r) {
  // let images = {}; r.keys().map(item => { images[item.replace('./', '')] = r(item); });
  let images = []; r.keys().map(item => { images.push(r(item)) }); images = images.slice(images.length / 2);
  return images;
}

const pirateImages = importAll(require.context('assets/images/pirate', false, /\.(png|jpe?g|svg)$/));
const cloneImages = importAll(require.context('assets/images/clone', false, /\.(png|jpe?g|svg)$/));

const stubData = [
  {
    id: 1,
    title: 'Металошукач Pirat з li-ion акумулятором',
    describe: 'Імпульсний металошукач "Пірат", початкового рівня, для пошуку великих металевих предметів на глибині до пів метра.',
    characteristics: [
      ['Монета', '10-15 см.'],
      ['Лопата', '40-50 см.'],
      ['Акумулятор', 'Li-ion (до 30 годин на одному заряді)'],
      ['Контроль заряду/розряду', 'Мікропроцесор Microchip. (подовжує строк служби акумулятора)'],
      ['Електронний блок', '1 шт.'],
      ['Зарядний пристрій', '1 шт.'],
      ['Вага', '1 кг.'],
      ['Гарантія', '1 рік.']
    ],
    price: 1400,
    currency: 'грн.',
    images: pirateImages
  },
  {
    id: 2,
    title: 'Металошукач ClonePi AVR',
    describe: 'Металошукач ClonePi AVR з посиленим корпусом та вологостійкістю.',
    characteristics: [
      ['Корпус', 'Текстоліт'],
      ['Метали не розрізняє', ''],
      ['Чутливість з датчиком 25 см:', ''],
      ['5 коп СССР:', '20-25 см'],
      ['Лопата:', '60-70 см'],
      ['Габаритні предмети', 'до 1 м.'],
      ['Чутливість з датчиком 50х50 см (в комплект не входить):', 'до 2х метрів'],
      ['Чутливість з рамкою 1х1 метр (в комплект не входить)', 'до 3х метрів'],
      ['Акумулятор', 'Li-ion (9-12 годин на одному заряді)'],
      ['Комплектація:', ''],
      ['Електронний блок', '1 шт.'],
      ['Складна штанга (метал, пластик)', '1 шт.'],
      ['Датчик 25 см.', '1 шт.'],
      ['Зарядний пристрій', '1 шт.'],
      ['Гарантія', '1 рік.'],
      ['Вага', '1 кг.'],
    ],
    price: 2300,
    currency: 'грн.',
    images: cloneImages
  }
]

export const getProducts = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(stubData)
  }, 0);
})
