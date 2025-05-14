import React from 'react'
import { useEffect, useState } from 'react'
import './App.css'
import searchIcon from "./assets/search.svg";
import MovieCard from './MovieCard';
import { FaArrowsRotate } from "react-icons/fa6";
// import Navbar from './Navbar';
const Home = () => {
  const API_URL= 'http://www.omdbapi.com/?i=tt3896198&apikey=aff488fd'
 const [movies,setMovies]=useState([])
 const [searchTerm,setSearchTerm]=useState("")
 const [isLoading,setIsLoading]=useState(false)
  const searchMovie= async(title)=>{
    setIsLoading(true)
    const response= await fetch(`${API_URL}&S=${title}`)
    const data= await response.json()
    setMovies(data.Search)
    setIsLoading(false)
  }
    useEffect(()=>{
      searchMovie("Batman")
    },[])
    if(isLoading){
      return <h1 style={{fontSize:'1,5rem',color:'white',marginTop:'10rem',marginLeft:'15rem'}}><FaArrowsRotate />DATA LOADING...</h1>
    }
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
              <MovieCard key={movie.imdbID} movie={movie} />
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

export default Home