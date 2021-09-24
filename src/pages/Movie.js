import getHash from "../utils/getHash";
import getMovie from "../utils/getMovie";
import getCast from "../utils/getCast";

const Movie = async () => {
    const id = getHash();
    const movie = await getMovie(id);
    const cast = await getCast(id);
    const view = `
        <div class ="movie-card">
            <div class = "movie-img">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="img" id="card">
            </div>
            <div class="movie-info">
                <h2>${movie.original_title}</h2>
                <p>${movie.overview}</p><br>
                <h3>Year: </h3>
                <p>${movie.release_date}</p><br>
                <h3>Duration: </h3>
                <p>${movie.runtime} min.</p><br>
                <h3>Vote Average: </h3>
                <p>${movie.vote_average}</p><br>
                <h3>Genres: </h3>
                <p>${movie.genres.map(gen => `${gen.name}` ).join(', ')}</p><br>
                <h3>Cast: </h3>
                <p id="cast">${cast.cast.map(act => `${act.name}; `).join(' ')}</p>
            </div>
        </div>
    `;
    return view;
}

export default Movie;