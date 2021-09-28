(()=>{"use strict";const n=()=>location.hash.slice(1).toLocaleLowerCase().split("/")[1]||"/",e=()=>'\n        <div class="error404">\n            <h2>Error 404</h2>\n        </div>\n    ',t={"/":async()=>{const n=await(async()=>{try{const n=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=f2a7826c40b49efc70daf5944ea50b36");return await n.json()}catch(n){console.log("Fetch Error: ",n)}})(),e=await(async()=>{try{const n=await fetch("https://api.themoviedb.org/3/discover/movie?api_key=f2a7826c40b49efc70daf5944ea50b36&sort_by=vote_count.desc");return await n.json()}catch(n){console.log("Fetch Error: ",n)}})();return`\n        <div class="movies">\n            <article class="trending-movies">\n                <section class="section-title">\n                    <h2>Trending Top</h2>\n                </section>\n                <section class="section-movie">\n                    ${n.results.map((n=>`\n                        <div class="movie-item">\n                            <a href="#/${n.id}">\n                                <img src="https://image.tmdb.org/t/p/w500${n.backdrop_path}" alt=${n.original_title}>\n                                <h3>${n.original_title}</h3>\n                                <p>Puntuación: ${n.vote_average}</p>\n                            </a>\n                        </div>\n                       `)).join("")}\n                </section>\n            </article>\n\n            <article class="popularity-movies">\n                <section class="section-title">\n                    <h2>Most Popular</h2>\n                </section>\n                <section class="section-movie">\n                    ${e.results.map((n=>`\n                        <div class="movie-item">\n                            <a href="#/${n.id}">\n                                <img src="https://image.tmdb.org/t/p/w500${n.backdrop_path}" alt=${n.original_title}>\n                                <h3>${n.original_title}</h3>\n                                <p>Puntuación: ${n.vote_average}</p>\n                            </a>\n                        </div>\n                        `)).join("")}\n                </section>\n            </article>\n        </div>\n   `},"/:id":async()=>{const t=n(),a=await(async n=>{const t=n?`https://api.themoviedb.org/3/movie/${n}?api_key=f2a7826c40b49efc70daf5944ea50b36&language=es`:e;try{const n=await fetch(t);return await n.json()}catch(n){console.log("Fetch Error: ",n)}})(t),i=await(async n=>{const e=`https://api.themoviedb.org/3/movie/${n}/credits?api_key=f2a7826c40b49efc70daf5944ea50b36`;try{const n=await fetch(e);return await n.json()}catch(n){console.log("Fetch Error: ",n)}})(t);return`\n        <div class="movie-card">\n            <div class="movie-img">\n                <img class="poster-img" src="https://image.tmdb.org/t/p/w500${a.poster_path}" alt="img">\n            </div>\n            <div class="movie-info">\n                <h2>${a.original_title}</h2>\n                <p>${a.overview}</p><br>\n                <h3>Año: </h3>\n                <p>${a.release_date}</p><br>\n                <h3>Duración: </h3>\n                <p>${a.runtime} min.</p><br>\n                <h3>Puntuación: </h3>\n                <p>${a.vote_average}</p><br>\n                <h3>Géneros: </h3>\n                <p>${a.genres.map((n=>`${n.name}`)).join(", ")}</p><br>\n                <h3>Reparto: </h3>\n                <p id="cast">${i.cast.map((n=>`${n.name}; `)).join(" ")}</p>\n            </div>\n        </div>\n    `}},a=async()=>{const a=document.getElementById("header"),i=document.getElementById("movie-grid");a.innerHTML='\n        <div class="header-main">\n            <div class="header-nav">\n                <h1>\n                    <a href="#/">⚡MOVIESTORM⚡</a>\n                </h1>\n            </div>\n        </div>\n    \n    ';let o=n();console.log("Hash: ",o);let s=await(n=>n.length<=7?"/"===n?n:"/:id":`/${n}`)(o);console.log("Ruta: ",s);let c=t[s]?t[s]:e;i.innerHTML=await c()};window.addEventListener("load",a),window.addEventListener("hashchange",a)})();