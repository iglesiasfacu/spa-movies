import getTrending from "../utils/getTrending";
import getPopularity from "../utils/getPopularity";

const Home = async() => {
    const infoTrending = await getTrending();
    const infoPopularity = await getPopularity();
    const view = `
        <div class="movies">
            <article class="trending-movies">
                <section class="section-title">
                    <h2>Trending Top</h2>
                </section>
                <section class="section-movie">
                    ${infoTrending.results.map(movie => `
                        <div class="movie-item">
                            <a href="#/${movie.id}">
                                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt=${movie.original_title}>
                                <h3>${movie.original_title}</h3>
                                <p>Puntuación: ${movie.vote_average}</p>
                            </a>
                        </div>
                       `
                    ).join('')}
                </section>
            </article>

            <article class="popularity-movies">
                <section class="section-title">
                    <h2>Most Popular</h2>
                </section>
                <section class="section-movie">
                    ${infoPopularity.results.map(movie => `
                        <div class="movie-item">
                            <a href="#/${movie.id}">
                                <img src="https://image.tmdb.org/t/p/w500${movie.backdrop_path}" alt=${movie.original_title}>
                                <h3>${movie.original_title}</h3>
                                <p>Puntuación: ${movie.vote_average}</p>
                            </a>
                        </div>
                        `
                    ).join('')}
                </section>
            </article>
        </div>
   `;

   return view;
}

export default Home;