export default function SmartLoader(link) {
  let script = document.createElement("script");
  script.src = link;
  script.setAttribute("type", "text/javascript");
  script.async = false;
  document.head.appendChild(script);

  script.addEventListener("load", function () {
    console.log("script loaded", link);
  });
  //return document.querySelector("body").appendChild(script);
}
