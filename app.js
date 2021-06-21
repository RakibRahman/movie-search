const container = document.querySelector(".container");

const getMovies = (_) => {
  const apiKey = `ad9f02ffebc5b31308852e1de341f307`;
  const endPoint = `https://api.themoviedb.org`;
  const searchQuery = "batman";
  const url = `${endPoint}/3/search/movie?api_key=${apiKey}&query=${searchQuery}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      let markup = ``;
      const movieData = data.results;
      movieData.forEach((movie) => {
        markup += `
        
        
        <div class="movie__info">

        <img src='https://image.tmdb.org/t/p/w500${movie.poster_path}' alt="logo">
        <h3>${movie.original_title}</h3>
        <p>${movie.release_date}</p>
        <p>${movie.vote_average} / ${movie.vote_count}</p>
        <p>${movie.overview}</p>
      </div>
        
        `;
      });
      container.innerHTML = markup;
    });
};
getMovies();
