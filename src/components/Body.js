import React, { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"
import { API } from "../api/APIs";
import { restaurantData } from "../utils/mockData";
import SubHeader from "./SubHeader";
import Shimmer from "./Shimmer";

const Body = () => {

    const [resData, setResData] = useState([]);

    useEffect(() => {
        ; (async () => {
            try {
                const response = await fetch(API.DESKTOP_WEB_LISTING);
                const result = await response.json();
                //Optional Chaining
                setResData((result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants ?? result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants) || restaurantData);
            } catch (error) {
                console.log(error.message);
                alert(error.message);
            }
        })()
    }, [])

    return (
        <div className="body">
            <div className="sub-header">
                <SubHeader resData={resData} setResData={setResData} />
            </div>
            <div className="res-container">
                {resData.length === 0 ? <Shimmer /> :
                    resData?.map((item) => <RestaurantCard key={item?.info?.id} resData={item} />)}
            </div>
        </div>
    )
}

export default Body