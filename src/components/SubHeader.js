import React, { useState } from 'react'
import InputBox from './InputBox'

export default function SubHeader(props) {

    const { resData, setResData } = props;

    const [mouseEnter, setMouseEnter] = useState(false);

    const handleSearchInput = (txt) => {
        console.log(txt);
    }

    const handleFilter = () => {
        const filteredData = resData.filter(item => item?.info?.avgRating > 4.5)
        setResData(filteredData);
    }

    return (
        <div className='dashboard-search-container'>
            <div className='dashboard-input-container'>
                <InputBox placeholder={'Search'} onChange={(txt) => handleSearchInput(txt)} />
            </div>
            <div className='dashboard-button-container'>
                <button onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}
                    onClick={() => handleFilter()} className={`dashboard-filter-button ${mouseEnter ? "dashboard-filter-button-focus" : null}`}>Top Rated Restaurants</button>
            </div>
        </div>
    )
}
