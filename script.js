//... - оператор spread;
const whiteKeys = [...document.querySelectorAll("path.white-keys")];
const blackKeys = [...document.querySelectorAll("path.black-keys")];
const keys = [...whiteKeys, ...blackKeys];

let audio;

//currentTime;
const playSound = (keyPlayedNow) => {
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }

  //API (Audio);
  audio = new Audio(`audio/key-${keyPlayedNow}.mp3`);
  audio.play();
  console.log(audio);
};

//global-attributes, API (dataset);
keys.forEach((key, i) => {
  //налаштовуємо дата-аттрибути
  key.dataset.index = i + 1;

  // слухаємо та реагуємо на конкретну клавішу
  key.addEventListener("click", (e) => {
    const specificKey = e.target.dataset.index;
    playSound(specificKey);
  });
});
