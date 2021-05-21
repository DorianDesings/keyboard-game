const screenElement = document.getElementById('screen');
const regExp = / [a-z|A-Z|,|\.|\s]/;
const currentLetter = '';
const words = ['Nala'];
let selectedWord = '';
let letterCounter = 0;

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

const writeWord = () => {
  screenElement.innerHTML = '';
  const wordToWrite = getRandomWord();
  selectedWord = [...wordToWrite];
  console.log(selectedWord);
  const fragment = document.createDocumentFragment();
  wordToWrite.split('').forEach(letter => {
    const letterToWrite = document.createElement('span');
    letterToWrite.textContent = letter;
    fragment.appendChild(letterToWrite);
  });
  screenElement.appendChild(fragment);
};

writeWord();

window.addEventListener('keyup', e => {
  const key = document.querySelector(`[data-key="${e.key}"]`);
  if (regExp.test(key)) {
    if (key.classList) {
      key.classList.remove('key--active');
    }
    key.classList.add('key--pressed');
  }
});

window.addEventListener('keypress', e => {
  const key = document.querySelector(`[data-key="${e.key}"]`);
  if (e.key.classList) {
    key.classList.add('key--active');
  }
});
