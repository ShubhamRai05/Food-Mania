import {restaurantCardData} from "./config";
import RestaurantCard from "./RestaurantCard";


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