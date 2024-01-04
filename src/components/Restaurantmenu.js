import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import {MENU_URL} from "../utils/constants"

const Restuarantmenu = () => {
    const [resInfo , setResInfo] = useState(null);
     useEffect(() => {
        fetchData();
     },[]);

     const {resId} = useParams();

const fetchData = async () => {
  const data = await fetch(MENU_URL+resId);
  const json = await data.json();
  setResInfo(json);
}; 
if(resInfo === null) {
    return <Shimmer/>
}

const {name , costForTwo , cuisines } = resInfo?.data?.cards[0]?.card?.card?.info;
const {itemCards} = resInfo?.data?.cards[2]?.groupedCard.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
console.log(itemCards);
    return (
        <div className="resMenu">
              <hr className="hr"></hr>
                    <h2>{name}</h2>
                    <h5>Cost for two - ₹ {costForTwo/100} </h5>
                    <h6>{cuisines.join(",")}</h6>
                    <h4>Menu</h4>
                   
                    <ul>
                       {/* {itemCards.map((item) => (
                         <li> 
                            {item.card.info.name} - {item.card.info.price}
                         </li>
                       ))}            */}
                    </ul>
        </div>
    );
};

export default Restuarantmenu;