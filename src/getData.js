const cocktailData = async function (selection) {
  const getData = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${selection}`
  ).then((data) => data.json());
  return getData;
};

export default cocktailData;
