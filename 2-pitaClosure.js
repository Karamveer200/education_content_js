const bacha = [];
const pita = {
  andar: 'Bikhara h',
  bahar: 'Muskurahra h',
  paisa: 0,
  farz: () => {
    pita.paisa++;
    bacha.push(pita.paisa);

    if (pita.paisa > 2) pita.andar = 'Muskarah h';
  },
};

Object.defineProperty(pita, 'paisa', {
  writable: false,
});

pita.farz(); // bacha length: 1
pita.farz(); // bacha length: 2
pita.farz(); // bacha length: 3

console.log('Bacha - ', bacha);
console.log('pita andar se -', pita.andar);
