const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

let interval = null;

const initial = "MATRIX";
const final = "TRIMAN"

document.querySelector(".fancy").onmouseover = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return final[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= initial.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}

document.querySelector(".fancy").onmouseout = event => {
  let iteration = 0;

  clearInterval(interval);

  interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iteration) {
          return initial[index];
        }

        return letters[Math.floor(Math.random() * 26)]
      })
      .join("");

    if (iteration >= final.length) {
      clearInterval(interval);
    }

    iteration += 1 / 3;
  }, 30);
}