//boa pratica usar try and catch(err)
const url = "./src/menu.html";
async function fetchHTML(el) {
  try {
    const data = await fetch(el);
    document.getElementById("res").innerHTML = await data.text();
  } catch (err) {
    console.log(err);
  }
}

fetchHTML(url);

//shorthand
async function getPage(el) {
  const data = await fetch("./src/footer.html")
    .then((res) => res.text())
    .then((data) => (document.getElementsByTagName("foo")[0].innerHTML = data));
}
getPage();
