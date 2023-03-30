import React from 'react'
import { useState, useEffect } from 'react';
import axios from "axios";
import IshopIndex from '../ishop/IshopIndex';

function Comedy() {
  const [Comedy, SetComedy] = useState([])

  const myurl = "https://www.themoviedb.org/t/p/w600_and_h900_bestv2"
  
  useEffect(()=>{
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=d00af37027a1afe58fc3e9436561bc26&with_genres=35")
    .then(function(output){
      console.log(output)
      SetComedy(output.data.results)
    })
    .catch(function(error){
      console.log(error)
    })

  },[])

  return (
    <>
    
    <h2 id="top">Top Comedy</h2>
    <div className="allimages">
      
      {
        
           Comedy.map(function(i){
             
            return <img id="urlimage" src={`${myurl}${i.poster_path}`}/>
           })
      }
     
        
    </div>
  
    </>
  )
}

export default Comedy