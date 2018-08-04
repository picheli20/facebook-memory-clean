//Author Paulo Henrique
//Clean Memory Facebook

console.log("Facebook Memory Clean Started!");

const clearMemory = () => {
  setTimeout(() => {
    console.log("Cleaning!");
    Array.from(document.querySelectorAll('div'))
      .filter(x => x.getAttribute('class') === '_4ikz')
      .filter((x, idx, items) => idx <= items.length - 3)
      .forEach(x => x.remove());
    clearMemory();
  }, 60000)
}

clearMemory();