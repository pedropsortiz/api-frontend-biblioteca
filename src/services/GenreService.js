import axios from 'axios';

const GENRE_API_BASE_URL = "http://localhost:8080/genre/list";

class GenreService{
    getAllGenres(){
        return axios.get(GENRE_API_BASE_URL);
    }
}

export default new GenreService();