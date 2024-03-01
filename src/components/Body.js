import React, { useState, useEffect } from "react"
import RestaurantCard from "./RestaurantCard"

const Body = () => {

    const [resData, setResData] = useState([...new Array(9)]);

    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {resData.map((_, index) => <RestaurantCard key={index} />)}
            </div>
        </div>
    )
}

export default Body