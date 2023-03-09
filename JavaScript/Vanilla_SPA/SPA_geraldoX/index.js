document.addEventListener("click", (e) => {
  const { target } = e;
  if (!target.matches("nav a ")) {
    return;
  }
  e.preventDefault();

  route();
});

const route = (event) => {
  event = event || window.event;
  event.preventDefault();
  //empurra o href para o browser
  const url = new URL(window.location);
  url.searchParams.set("page", ``);

  window.history.pushState({}, "", event.target.href, url);
  locationHandler();
};

const routes = {
  404: {
    template: "404 error",
    title: "404",
  },
  "/": {
    template: `<h1>Home Page</h1>`,
    title: "Home",
  },
  foo: {
    template: "foo page",
    title: "foo",
  },
  bar: {
    template: "bar page",
    title: "Bar",
  },
};

function locationHandler() {
  let location = window.location.hash.replace("#", "");

  //caso o location for vazio o location será /
  if (location.length == 0) {
    location = `/`;
  }
  /*  if (location == `bar`) {
    res.innerHTML = `Hello Bares`;
  }
  if (location == `bar`) {
    res.innerHTML = `Hello Bares`;
  } */
  //get templates dos objects se nao encontrar envia 404
  const route = routes[location] || routes["404"];
  //render results
  res.innerHTML = route.template;
  //title cada template
  document.title = route.title;
}

//show home => /home?page=bar
//history.pushState({}, "", "home/");

// window.onhashchange = locationHashChanged;

//default route
//window.location = "#foo";

window.addEventListener("hashchange", locationHandler);
//onload call fun
window.onload = locationHandler();
