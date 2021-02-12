const dom = (function () {
  const cards = function (result) {
    console.log(result);
    const cardDiv = document.querySelector(".cards");
    cardDiv.innerHTML = "";
    for (let elem of result.drinks) {
      const text = document.createElement("p");
      const image = document.createElement("img");
      image.src = elem.strDrinkThumb;
      text.innerText = elem.strDrink;

      image.addEventListener("click", function () {
        domSelected(elem);
      });

      cardDiv.appendChild(text);
      cardDiv.appendChild(image);
    }
  };

  const domSelected = function (elem) {
    const container = document.createElement("div");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const instr = document.createElement("p");
    const body = document.querySelector("body");
    body.innerHTML = "";
    img.src = elem.strDrinkThumb;
    title.innerText = elem.strDrink;
    instr.innerText = elem.strInstructions;

    for (let i = 1; i < 15; i++) {
      ingredient(elem, i, container);
    }

    function ingredient(elem, nr, container) {
      if (`elem.strIngredient${nr}` !== null) {
        const ingreditent = elem[`strIngredient${nr}`];
        const p = document.createElement("p");
        p.innerText = ingreditent;
        container.appendChild(p);
      }
    }

    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(instr);
    body.appendChild(container);
  };
  return { cards };
})();

export default dom;
