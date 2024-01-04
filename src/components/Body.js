import Restuarantcard from "./Restaurantcard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
   const [listofrestro,setListofrestro] = useState([]);
   const [filteredRestuarant,setfilteredRestuarant] = useState([]);
  const [searchText , setSearchText] = useState("");


   useEffect(() => {  
     fetchData();
   },[]);
   const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.0757184&lng=72.5090366&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
       const json = await data.json();

      setListofrestro(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

       setfilteredRestuarant(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
   };
  if(listofrestro.length === 0){
    return <Shimmer/>
  }
    return (
      <div className="body">
        <div className="search-bar">
          <input type="text" className="text-box" value={searchText} onChange={(e) => {
                   setSearchText(e.target.value); 
          }}  placeholder="search for restaurants" ></input>
          <button className="search" onClick={() => {
            const filteredRestuarant = listofrestro.filter((res) =>  res.info.name.toLowerCase().includes(searchText.toLowerCase()))
            setfilteredRestuarant(filteredRestuarant); 
 
          }}> Search </button> 
        <button className="filter-btn" onClick={() => {
          const filteredList = listofrestro.filter((res) => res.info.avgRating > 4.3);
          setfilteredRestuarant(filteredList);
        }}>
          Top Rated Restaurants
        </button>

        </div>
        <div className="res-container">
        { filteredRestuarant.map((restro) => (<Link className="link" key={restro.info.id} to={"restaurants/"+restro.info.id}><Restuarantcard  resData={restro}/></Link>)) } 
        </div>
      </div>
    )
  }

  export default Body;                      