document.querySelector("button").onclick = function () {
  const p = document.createElement("p");
  p.textContent = `test`;
  document.body.appendChild(p);
};

document.querySelector("button[name='2']").onclick = function () {
  document.querySelector("p").remove();
};
