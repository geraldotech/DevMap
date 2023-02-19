function LoadObj(value) {
  render.setAttribute("data", value);
  //change url state, porém a página abre direct sem o menu
  window.history.pushState({}, value, value);
  //let url empty
  //window.history.replaceState(value, "", "");
}

//default home loaded
LoadObj("home.html");
