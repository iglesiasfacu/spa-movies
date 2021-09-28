const apiKey = 'f2a7826c40b49efc70daf5944ea50b36';
const apiPopularity = 'https://api.themoviedb.org/3/discover/movie';

const getPopularity = async () => {
    const apiURL = `${apiPopularity}?api_key=${apiKey}&sort_by=vote_count.desc`;

    try{
        const response = await fetch (apiURL);
        const data = await response.json();
        return data   
    }catch(error){
        console.log('Fetch Error: ', error);
        
    };
};

export default getPopularity;