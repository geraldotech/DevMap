class BlogPost extends HTMLElement {
  constructor() {
    super();
    this.build();
  }

  build() {
    console.log(`build importada`);
    const shadow = this.attachShadow({ mode: "open" });

    shadow.appendChild(this.styles());

    const rater = this.createRater();
    this.stars = this.createStars();

    this.stars.forEach((star) => rater.appendChild(star));

    this.resetRating();

    shadow.appendChild(rater);
  }

  createRater() {
    const rater = document.createElement("div");
    rater.classList.add("start-rater");
    rater.addEventListener("mouseout", this.resetRating.bind(this));
    return rater;
  }

  createStars() {
    const createStar = (_, id) => {
      const star = document.createElement("span");
      star.classList.add("star");
      star.setAttribute("data-value", Number(id) + 1);
      star.innerHTML = "&#9733;";

      star.addEventListener("click", this.setRating.bind(this)); //bind - trazer de volta o this do obj principal
      star.addEventListener("mouseover", this.ratingHover.bind(this)); //bind - trazer de volta o this do obj principal
      return star;
    };
    return Array.from({ length: 5 }, createStar);
  }

  resetRating() {
    this.currentRatingValue = this.dataset.rating || 0;
    this.hightlighRating();
  }

  setRating(event) {
    this.setAttribute(
      "data-rating",
      event.currentTarget.getAttribute("data-value")
    );
  }

  ratingHover(event) {
    this.currentRatingValue = event.currentTarget.getAttribute("data-value");
    console.log(this.currentRatingValue);
    this.hightlighRating();
  }

  hightlighRating() {
    this.stars.forEach((star) => {
      star.style.color =
        this.currentRatingValue >= star.getAttribute("data-value")
          ? "yellow"
          : "gray";
    });
  }

  styles() {
    const style = document.createElement("style");
    style.textContent = `
    span{
        color: dodgerblue;
        font-size: 2rem;
    }
    .star {
        font-size: 5rem;
        cursor:pointer;
    }      
     h1{
         color: coral;
    }
    .active{
        color: yellow;
    }
    `;
    return style;
  }
}

customElements.define("mycomp-1", BlogPost);
