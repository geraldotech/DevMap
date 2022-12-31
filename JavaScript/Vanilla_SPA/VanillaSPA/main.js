const home = `<h1>Home Page</h1>`;
const about = `<h1>About Page</h1>`;
const contact = `<h1>Contact Page</h1>`;

const routes = {
  "/": home,
  "/contact": contact,
  "/about": about,
};

const rootDiv = document.getElementById("root");
rootDiv.innerHTML = routes[window.location.pathname];
console.log(window.location.pathname);

const onNavigate = (pathname) => {
  window.history.pushState({}, pathname, window.location.origin + pathname);
  rootDiv.innerHTML = routes[pathname];
};

window.onpopstate = () => {
  rootDiv.innerHTML = routes[window.location.pathname];
};
