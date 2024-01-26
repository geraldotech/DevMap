/* axios.get("menu.html").then((response) => {
  const results = response.data;
  document.getElementById("load").innerHTML = results;
}); */

include("mdenu.html", "root");

function include(path, id) {
  axios
    .get(path)
    .then((res) => {
      const results = res.data;
      console.log(res);
      document.getElementById(id).innerHTML = results;
    })
    .catch((erro) => console.error(erro));
}
