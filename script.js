//select html element with id #author-container
const authorContainer = document.getElementById("author-container");
//select html element with id #load-more-btn
const loadMoreBtn = document.getElementById("load-more-btn");

//to make a get request to the url
fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
.then((res) => {
    console.log(res.json());
})
.then((data) => {
    console.log(data);
})
.catch((err) => {
    console.log(`There was an error: ${err}`);
});