const dom = (function () {
  const cards = function (result) {
    const cardDiv = document.querySelector(".cards");
    cardDiv.innerHTML = "";
    if (result.drinks == null) {
      const p = document.createElement("h3");
      p.innerText = "OUPS COULDNT FIND WHAT YOUR LOOKING FOR";
      const cardDiv = document.querySelector(".cards");
      cardDiv.appendChild(p);
    }
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
    const searchbar = document.querySelector(".searchbar");
    searchbar.classList.add("notvis");
    const container = document.createElement("div");
    const containerAllIng = document.createElement("div");
    containerAllIng.classList.add("containerAllIng");

    container.classList.add("containerIng");
    const img = document.createElement("img");
    const title = document.createElement("h3");
    const instr = document.createElement("p");
    const body = document.querySelector("body");
    const btnHome = document.createElement("button");
    const cards = document.querySelector(".cards");
    cards.innerHTML = "";
    btnHome.innerText = "Home";
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

    btnHome.addEventListener("click", async function () {
      const searchbar = document.querySelector(".searchbar");
      const container = document.querySelector(".containerAllIng");
      container.remove();
      container.innerHTML = "";
      searchbar.classList.remove("notvis");
    });
    container.appendChild(title);
    container.appendChild(img);
    container.appendChild(instr);
    container.appendChild(btnHome);
    containerAllIng.appendChild(container);
    body.appendChild(containerAllIng);
  };
  return { cards };
})();

export default dom;
