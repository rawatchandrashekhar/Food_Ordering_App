import React, { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"

const Body = () => {

    const [resData, setResData] = useState([]);

    useEffect(() => {
        ; (async () => {
            try {
                const response = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.2124&lng=78.1772&page_type=DESKTOP_WEB_LISTING");
                const result = await response.json();
                console.log(result);
                setResData(result?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
            } catch (error) {
                console.log(error.message);
            }
        })()
    }, [])

    if (resData?.length === 0) {
        return <h1>Loading...</h1>;
    }

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resData?.map((item) => <RestaurantCard key={item?.info?.id} resData={item} />)}
            </div>
        </div>
    )
}

export default Body