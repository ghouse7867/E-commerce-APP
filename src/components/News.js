import { useEffect,useState } from "react";
import UserCard from "./UserCard";
export default function News(){

const [users,setUsers] = useState([]);

const apiURL = 'https://newsapi.org/v2/top-headlines?country=in&apiKey=33bbca0e4a7947fa9ad47d53f662ce55'
// 'country=us&' +
// 'apiKey=33bbca0e4a7947fa9ad47d53f662ce55';

// const req = new Request(apiURL);

// async function fetchData(){
//   try {
//     fetch(req).then((res)=>res.json()).then((data)=>setUsers(data));
//     console.log(users)
//   }
//   catch(error){
//     console.log(error)
//   }
// }
async function fetchData(){
  try{
    fetch(apiURL).then((res)=>res.json()).then((data)=> setUsers(data.articles));
 

  }catch(error){
    console.log(error);
  }
}

useEffect(()=>{
  fetchData(fetchData);
},[]);

// export default function Homes() {
//   const [myName, setmyName] = useState("md")
  

//   function changeName(){
//     setmyName("moid => the name is changed")
//   }
 
    // <div className="container-fluid">
    //    <h2>name:{myName}</h2>
    // <button className="btn btn-success" onClick={changeName}>Change Name</button>
    // Api key: 33bbca0e4a7947fa9ad47d53f662ce55
    return (
      //     // <div className="users">
      //     // {users.map((user)=>{
      //     //    return(
      //     //      <UserCard user={user}/>
      //     //    )
      //     // })}
      //  </div>
      <>
      {/* <button className="btn btn-primary" onClick={fetchData}>Fetch News</button> */}
      
       <div className="container d-flex p-3 flex-wrap">
       {users.map((value)=>{
          return(
            <div className= "d-flex">
        <div className="card-group my-2 mx-2 text-white bg-dark mb-3 border-info" style={{width: "18rem",borderRadius:"25px"}}>
          <img src={value.urlToImage} className="card-img-top" style={{width: "250px",height: "200px",borderRadius:"25px"}}alt="..." />
          <div className="card-body">
            <h5 className="card-title">{value.title}</h5>
            <p className="card-text">
            {value.description}
            </p>
            <span>Published At: <i className="text-white">{value.publishedAt}</i><br/><br/></span>
            <a href={value.url} className="btn btn-primary">
             GO TO DETAILS
            </a>
            
          </div>
        </div>
        {/* <UserCard values={value}/> */}
      </div>
      
          )
       })}
  
    </div>
  
      </>
     
  );

  }
    
