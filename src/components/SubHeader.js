import React, { useState } from 'react'
import InputBox from './InputBox'

export default function SubHeader(props) {

    const { resData, setResData, resTempData } = props;

    const [mouseEnter, setMouseEnter] = useState(false);
    const [searchText, setSearchText] = useState("");

    const handleSearchInput = (txt) => {
        setSearchText(txt);
        const filteredRes = resTempData.filter(item => item.info.name.toLowerCase().includes(txt.toLowerCase()));
        setResData(filteredRes);
    }

    const handleFilter = () => {
        const filteredData = resData.filter(item => item?.info?.avgRating > 4.5)
        setResData(filteredData);
    }

    return (
        <div className='dashboard-search-container'>
            <div className='dashboard-input-container'>
                <InputBox placeholder={'Search'} value={searchText} onChange={(txt) => handleSearchInput(txt)} />
            </div>
            <div className='dashboard-button-container'>
                <button onMouseEnter={() => setMouseEnter(true)} onMouseLeave={() => setMouseEnter(false)}
                    onClick={() => handleFilter()} className={`dashboard-filter-button ${mouseEnter ? "dashboard-filter-button-focus" : null}`}>Top Rated Restaurants</button>
            </div>
        </div>
    )
}
