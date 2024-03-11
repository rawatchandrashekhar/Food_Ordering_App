import React, { useState, useEffect } from "react";
import { fetchRestaurantDetail } from "../api/APIs";
import { useParams } from "react-router-dom";

export default function RestaurantDetail(props) {

    const { resID } = useParams();

    const [resDetailData, setResDetailData] = useState([]);
    const [resName, setResName] = useState("Wait please...");

    useEffect(() => {
        ; (async () => {
            try {
                const result = await fetchRestaurantDetail(resID);
                console.log(result?.data?.cards[0]?.card?.card?.text);
                console.log(result?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
                setResName(result?.data?.cards[0]?.card?.card?.text);
                setResDetailData(result?.data?.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
            } catch (error) {
                console.error(error);
                throw new Response(error.message);
            }
        })()
    }, [])

    return <div>
        {resName}
    </div>
}