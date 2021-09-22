import Error404 from "../pages/Error404";

const apiKey = 'f2a7826c40b49efc70daf5944ea50b36';
const apiMovie = 'https://api.themoviedb.org/3/movie/';

const getMovie = async (id) => {
    const apiURL = id ? `${apiMovie}${id}?api_key=${apiKey}` : Error404;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getMovie;