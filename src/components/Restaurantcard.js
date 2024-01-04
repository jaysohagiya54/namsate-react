import CDN_URL from "../utils/constants";

const Restuarantcard = ({resData}) => {

    return (
      <div className="res-card" style={{backgroundColor:"#efefec"}}>
        <img className="res-logo" src={CDN_URL+ resData.info.cloudinaryImageId} />
        <h3>{resData.info.name}</h3>
        <h5>{resData.info.avgRating}</h5>
        <h6>COST = {resData.info.costForTwo}</h6>
        <h6>{resData.info.cuisines.join(", ")}</h6>

      </div>
    );
};

export default Restuarantcard;