const apiKey = 'f2a7826c40b49efc70daf5944ea50b36';
const apiCast = 'https://api.themoviedb.org/3/movie/';

const getCast = async (id) => {
    const apiURL = `${apiCast}${id}/credits?api_key=${apiKey}`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getCast;
