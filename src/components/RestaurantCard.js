import { CDN_IMAGE_URL } from '../utils/constants';

const RestaurantCard = ({ resData }) => {

    const { info: { name = "", costForTwo = "", cloudinaryImageId = "", cuisines = "", avgRating = "" } } = resData;

    return (
        <div className="res-card">
            <div className="img-container">
                <img src={`${CDN_IMAGE_URL}${cloudinaryImageId}`} alt="res-logo" className="res-logo" />
            </div>
            <div className="res-heading-container three-dots">{name}</div>
            <div className="order-for-two">{costForTwo}</div>
            <div className="rating-container">
                <img alt="rating-img" src={require('../utils/images/rating.jpg')} className="rating-img" />
                <div className="rating-text">{avgRating}</div>
            </div>
            <div className="cuisins-container three-dots">
                {cuisines.join(", ")}
            </div>
        </div>
    )
}

export default RestaurantCard