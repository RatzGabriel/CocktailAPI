import cocktailData from "./getData";
import getElement from "./utils";
import dom from "./dom";

window.onload = function () {
  cocktailData("blue");
  const searchBar = document.getElementById("search");
  searchBar.addEventListener("keydown", async function () {
    await cocktailData(searchBar.value).then((result) => dom.cards(result));
  });
};
