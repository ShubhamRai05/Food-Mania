import { restaurantCardData } from "./config";
import RestaurantCard from "./RestaurantCard";


const BodyComponent = function () {
    // let searchText = "hello guys " this is how we do in javascript
    return (
        <>
            <input type="text" className="search-input" placeholder="Search here" value="" onChange="" />
            <button>Search</button>
            <div className="restaurant-list">
                {restaurantCardData.map((restro) => {
                    return <RestaurantCard {...restro.info} key={restro.info.id} />
                })}
            </div></>

    )
}

export default BodyComponent