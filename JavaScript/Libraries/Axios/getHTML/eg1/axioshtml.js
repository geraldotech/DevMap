axios.get("menu.html").then((response) => {
  const results = response.data;
  document.getElementById("load").innerHTML = results;
});
