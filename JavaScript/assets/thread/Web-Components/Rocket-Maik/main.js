class BlogPost extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {
    console.log(`build importada`);
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.styles(), this.createRater());
  }

  createRater() {
    const rater = document.createElement("div");
    rater.classList.add("start-rater");
    return rater;
  }

  createStars(_, id) {
    const createStar = () => {
      const star = document.createElement("span");
      star.classList("star");
      star.setAttribute("data-value", Number(id) + 1);
    };
    return Array.from({ length: 5 }, createStar);
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
        .start-rater {
            background-color: #f00;
        }      
        h1{
            color: coral;
        }
    `;
    return style;
  }
}

customElements.define("mycomp-1", BlogPost);

const Bye = document.querySelector("#bye");

console.log(Bye.dataset);
console.log(Bye.dataset.test);

Bye.dataset.forca = "1";

const attr = document.querySelector("span[data-test='2']");
console.log(attr);
