const RestaurantCard = () => {
    return (
        <div className="res-card">
            <div className="img-container">
                <img src={require("../utils/images/logo/res-logo.png")} alt="res-logo" className="res-logo" />
            </div>
            <div className="res-heading-container">Meghna Foods</div>
            <div className="order-for-two">&#8377;200 for two</div>
            <div className="rating-container">
                <img alt="rating-img" src={require('../utils/images/rating.jpg')} className="rating-img" />
                <div className="rating-text">4.5</div>
            </div>
            <div className="cuisins-container">
                Indian, Chinese
            </div>
        </div>
    )
}

export default RestaurantCard