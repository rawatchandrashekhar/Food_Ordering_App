const fetchRestaurantDetail = async (restaurantID = 657665) => {
    const response = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.2194843&lng=78.1828055&restaurantId=" + restaurantID + "&catalog_qa=undefined&submitAction=ENTER");
    const result = await response.json();
    return result;
}

export {
    fetchRestaurantDetail
}