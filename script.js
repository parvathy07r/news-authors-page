//select html element with id #author-container
const authorContainer = document.getElementById("author-container");
//select html element with id #load-more-btn
const loadMoreBtn = document.getElementById("load-more-btn");

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

//to make a get request to the url
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
    .then((res) => {
        console.log(res.json());
    })
    .then((data) => {
        authorDataArr = data;
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    })
    .catch((err) => {
        console.log(`There was an error: ${err}`);
    });

//function to populate UI with author's data
const displayAuthors = (authors) => {
    authors.forEach(({ author, image, url, bio }, index) => {
        authorContainer.innerHTML += `
        <div id="${index}" class="user-card">
        <h2 class="author-name">${author}</h2>
        <img class="user-img" src="${image}" alt="${author} avatar">
        <p class="bio">${bio}</p>
        <a class="author-link" href="${url}" target="_blank">${author}'s author page </a>
        </div>
        `;
    });
}


