import {restaurantCardData} from "./config";
import { CDN_URL } from "./config";

const RestaurantCard = function (props) {
    const { name, cuisines, locality, cloudinaryImageId } = props
    return (
        <div className="cards">
            <img src={CDN_URL + cloudinaryImageId} />
            <h2>{name}</h2>
            <p>{cuisines[0]}</p>
            <h4>{locality}</h4>
        </div>
    )
}

const BodyComponent = function () {
    return (
        <div className="restaurant-list">
            {restaurantCardData.map((restro) => {
                return <RestaurantCard {...restro.info} key={restro.info.id} />
            })}
            {/* <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard />
            <RestaurantCard /> */}

        </div>
    )
}

export default BodyComponent