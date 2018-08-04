//Author Paulo Henrique
//Clean Memory Facebook

console.log("Facebook Memory Clean Started!");
conat intervalKey;

const stopMemotyCleaning = () => clearInterval(intervalKey);

const clearMemory = () => {
  intervalKey = setInterval(() => {
    console.log("Cleaning!");
    Array.from(document.querySelectorAll('div'))
      .filter(x => x.getAttribute('class') === '_4ikz')
      .filter((x, idx, items) => idx <= items.length - 3)
      .forEach(x => x.remove());
  }, 60000)
}

clearMemory();
