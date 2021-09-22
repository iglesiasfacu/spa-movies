const apiKey = 'f2a7826c40b49efc70daf5944ea50b36';
const apiTrending = 'https://api.themoviedb.org/3/trending/movie/week';

const getTrending = async (id) => {
    const apiURL = `${apiTrending}?api_key=${apiKey}`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getTrending;