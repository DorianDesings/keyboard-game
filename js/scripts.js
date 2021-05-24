const screenElement = document.getElementById('screen');
const regExp = / [a-z|A-Z|,|\.|\s]/;
const currentLetter = '';
const words = ['Nala', 'Anubis', 'Albert'];
let selectedWord = '';
let letterCounter = 0;

const getRandomWord = () => words[Math.floor(Math.random() * words.length)];

const writeWord = () => {
  screenElement.innerHTML = '';
  const wordToWrite = getRandomWord();
  selectedWord = [...wordToWrite];
  const fragment = document.createDocumentFragment();
  wordToWrite.split('').forEach(letter => {
    const letterToWrite = document.createElement('span');
    letterToWrite.textContent = letter;
    fragment.appendChild(letterToWrite);
  });
  screenElement.appendChild(fragment);
};

const checkWin = () => {
  writeWord();
  letterCounter = 0;
};

const checkLetter = letter => {
  if (letterCounter >= selectedWord.length - 1) {
    checkWin();
  } else {
    if (letter === selectedWord[letterCounter].toLowerCase()) {
      screenElement.children[letterCounter].classList.remove('letter-error');
      screenElement.children[letterCounter].classList.add('letter-ok');
      letterCounter = letterCounter + 1;
    } else {
      screenElement.children[letterCounter].classList.add('letter-error');
    }
  }
};

writeWord();

window.addEventListener('keyup', e => {
  const key = document.querySelector(`[data-key="${e.key}"]`);
  if (regExp.test(key)) {
    if (key.classList) {
      key.classList.remove('key--pressed');
    }

    checkLetter(e.key);
  }
});

window.addEventListener('keypress', e => {
  const key = document.querySelector(`[data-key="${e.key}"]`);
  key.classList.add('key--pressed');
});
