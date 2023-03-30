import axios from 'axios'
import React from 'react'
import { useEffect, useState } from 'react'
import "./Style.css";
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

function TopTrending() {

  const [TopTrendings, SetTopTendings] = useState([])

  const myurl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
  
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/trending/all/week?api_key=d00af37027a1afe58fc3e9436561bc26")
    .then(function(output){
      console.log(output)
      SetTopTendings(output.data.results)
    })
    .catch(function(error){
      console.log(error)
    })

  },[])

  const [myTrailerUrl, SetmyTrailerUrl]= useState("");

  function clicked(movie){
    console.log(movie)
    movieTrailer(movie)
    .then( function(output) {

      SetmyTrailerUrl(new URLSearchParams(new URL(output).search).get("v"));
         console.log(output)
         SetmyTrailerUrl(output)
    })
    .catch(function(error) {
      console.log(error)
    })
}
  return (

    <>
    
    <h2 id="top">Top Trending</h2>
    <div className="allimages">
      
     
      {
        
           TopTrendings.map(function(i){

            let movieName = i.title
            return <img id="urlimage" onClick={ function(){
              clicked(movieName)
            }} src={`${myurl}${i.poster_path}`}/>
           })
      }
     

    </div>
    <div>

      <YouTube videoId={myTrailerUrl}></YouTube>

    </div>
    </>
  )
}

export default TopTrending