axios.get("https://swapi.dev/api/films/").then((response) => {
  const results = response.data.results;
  results.map((val) => {
    console.log(val);
    document.body.append(val.title);
  });
});
