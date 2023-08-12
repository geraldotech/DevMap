/* Simulando um blog posts */

const blog = [
  {
    id: 1,
    published: true,
    article: "my article one",
    slug: "one",
    author: "geraldox",
  },
  {
    id: 2,
    published: true,
    article: "my article two",
    slug: "two",
    author: "geraldox",
  },
  {
    id: 3,
    published: true,
    article: "my article three",
    slug: "three",
    author: "geraldox",
  },
  {
    id: 4,
    published: true,
    article: "my article four",
    slug: "four",
    author: "geraldox",
  },
  {
    id: 5,
    published: true,
    article: "my article five",
    slug: "five",
    author: "geraldox",
  },
  {
    id: 6,
    published: true,
    article: "my article six",
    slug: "six",
    author: "geraldox",
  },
  {
    id: 7,
    published: true,
    article: "my article seven",
    slug: "seven",
    author: "geraldox",
  },
  {
    id: 8,
    published: true,
    article: "my article eigth",
    slug: "eigth",
    author: "geraldox",
  },
];

function getPosts(n) {
  //filter and verifica object are publicados
  let published = blog.filter((val) => val.published).slice(0, n);

  return (post.innerHTML = published
    .map((val) => {
      return ` 
    <p>ID: ${val.id} - Article: ${val.article} - Author: ${val.author}</p>
    `;
    })
    .join(""));
}

// default DOM Show Post
post.innerHTML = getPosts(2);

// Button controllers
const btn = document.querySelector("button[value='5']");
btn.onclick = function (e) {
  getPosts(e.target.value);
};

document.querySelector("button[value='100']").onclick = (e) => {
  getPosts(e.target.value);
};
document.querySelector("button[value='1']").onclick = (e) => {
  getPosts(e.target.value);
};
