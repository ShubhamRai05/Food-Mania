import { restaurantCardData } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

function filterData(restaurant, searchText) {
    let data = restaurant.filter((restaurant) =>restaurant.info.name.includes(searchText))
    return data;
}
const BodyComponent = function () {
    // let searchText = "hello guys " this is how we do in javascript
    const [searchText, setSearchText] = useState("")
    // let [searchButton, setSearchButton] = useState("")
    let [restaurant, setRestaurant] = useState(restaurantCardData)
    return (
        <>
            <input type="text" className="search-input" placeholder="Search here" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />

                
            <button onClick={() => {
                
                console.log("he")
                let data = filterData(restaurant, searchText)
                if(data){
                    setRestaurant(data)
                }
                else
                {
                    setRestaurant(restaurant)
                }
 
            }} >Search</button>

        


            <div className="restaurant-list">
                {restaurant.map((restro) => {
                    return <RestaurantCard {...restro.info} key={restro.info.id} />
                })}
            </div></>

    )
}

export default BodyComponent