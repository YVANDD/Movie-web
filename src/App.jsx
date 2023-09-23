import {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import './App.css';
import SearchIcon from './Search.svg';


const API_URL = 'https://www.omdbapi.com?apikey=638bd8c6'
const movie1 = {
  "Title": "Spiderman the Verse",
  "Year": "2019–",
  "imdbID": "tt12122034",
  "Type": "series",
  "Poster": "https://m.media-amazon.com/images/M/MV5BNjA2NmZhOGEtZTQ5OS00MDI0LTg4N2UtYTRmOTllM2I2NDlhXkEyXkFqcGdeQXVyNTU4OTE5Nzc@._V1_SX300.jpg"
}


const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  
  const searchMovies = async (title) =>{
   const response = await fetch(`${API_URL}&S=${title}`)
   const data = await response.json();
   setMovies(data.Search);
  }

  useEffect(() =>{
   searchMovies('Spiderman');
  }, [])
  return (
   <div>
    <h1>MoviesLand</h1>
    <div className='search'>
      <input
        placeholder='Search for movies'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)} 
     />
     <img 
      src={SearchIcon}
      alt='search'
      onClick={() => {searchMovies(searchTerm)}}
      />
    </div>
      {
        movies?.length > 0 ?(
       <div className='container'>
          {movies.map((movie) => 
           <MovieCard movie= {movie} />
         )}
       </div>
        ):(
          <div>
            <h2>No movies found</h2>
          </div>
        )
      }
   </div>

  );
}

export default App