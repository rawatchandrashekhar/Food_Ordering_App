import React from 'react'

export default function Shimmer() {
    return (
        <div className='shimmer-container'>
            {[...new Array(10)].map((_, index) => {
                return <div key={index} className='shimmer-subcontainer' />
            })}
        </div>
    )
}
