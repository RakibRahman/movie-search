const container = document.querySelector(".container");
const searchDiv = document.forms.searchForm;
const searchValue = searchDiv.searchMovies;
const searchBtn = document.querySelector(".search-btn");
const topBtn = document.querySelector("#top-btn");

const getMovies = (searchQuery) => {
  const apiKey = `ad9f02ffebc5b31308852e1de341f307`;
  const endPoint = `https://api.themoviedb.org`;
  const imgPath = "https://image.tmdb.org/t/p/w500";
  const url = `${endPoint}/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      let markup = ``;
      const movieData = data.results;
      movieData.forEach((movie) => {
        markup += `
        <div class="movie__info">
        <img src='${imgPath}${movie.poster_path}' alt="logo">
        <h2>${movie.original_title}</h2>
        <p> <span>Release Date:</span> ${movie.release_date}</p>
        <p><span>⭐</span> ${movie.vote_average} / ${movie.vote_count}</p>
        <p> <span> synopsis: </span> ${movie.overview}</p>
      </div>
        
        `;
      });
      container.innerHTML = markup;
    });
};

const movieKeyWords = [
  "batman",
  "superman",
  "naruto",
  "one piece",
  "ninja",
  "horror",
  "action",
  "fight",
  1,
  7,
  3,
];
const getKeywords = (_) => {
  const random = Math.floor(Math.random() * movieKeyWords.length);
  return movieKeyWords[random];
};
console.log(getKeywords());
getMovies(getKeywords());
searchValue.focus();
searchDiv.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.matches(".search-btn")) {
    getMovies(searchValue.value);
    window.scrollTo(0, 0);
  }
});
topBtn.addEventListener("click", (_) => {
  window.scrollTo(0, 0);
});
