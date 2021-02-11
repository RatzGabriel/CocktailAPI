const cocktailData = async function () {
  console.log("test");
  const getData = await fetch(
    "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=blu"
  ).then((getData) => getData.json().then((getData) => console.log(getData)));

  return { getData };
};

export default cocktailData;
