const texts = {
  'ru-RU': {

  },
  'uk': {

  },
  'en': {
    
  }
};

export let curLanguage = 'uk';

export const t = (phrase) => {
  return texts[curLanguage][phrase];
};
