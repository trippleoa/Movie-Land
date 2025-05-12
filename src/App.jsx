import { useEffect, useState } from 'react'
import './App.css'
import searchIcon from "./assets/search.svg";
import MovieCard from './MovieCard';
function App() {
 const API_URL= 'http://www.omdbapi.com/?i=tt3896198&apikey=aff488fd'
 const [movies,setMovies]=useState([])
 const [searchTerm,setSearchTerm]=useState("")
  const searchMovie= async(title)=>{
    const response= await fetch(`${API_URL}&S=${title}`)
    const data= await response.json()
    setMovies(data.Search)
  }
    useEffect(()=>{
      searchMovie("batman")
    },[])
  return (
    <>
      <div className='app'>
      <h1>Movie Land</h1>
      <div className="search">
      <input type="text" placeholder='search for movies' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
      <img src={searchIcon} alt="search" onClick={()=>searchMovie(searchTerm)} />
      </div>
      {
          <div className="container">
          {movies.length > 0 ? (
            movies.map((movie) => (
              <MovieCard  movie={movie} />
            ))
          ) : (
            <h2>No Movies Found</h2>
          )}
        </div>
      }
      
       
     
      </div>
    </>
  )
}

export default App
