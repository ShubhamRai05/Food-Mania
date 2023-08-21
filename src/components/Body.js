import { restaurantCardData } from "./config";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";


const BodyComponent = function () {
    // let searchText = "hello guys " this is how we do in javascript
    const [searchText, setSearchText] = useState("")
    let [searchButton, setSearchButton] = useState("true")
    return (
        <>
            <input type="text" className="search-input" placeholder="Search here" value={searchText} onChange={(e) => {
                setSearchText(e.target.value)
            }} />


            <button onClick={() => {
                // if(searchButton === "true"){
                //     setSearchButton("false")
                // }
                // else
                // {
                //     setSearchButton("true")
                // }

                // above using ternary operator
                console.log(setSearchButton)

                searchButton === "true" ? setSearchButton("false") : setSearchButton("true")
            }} value={searchButton}>Search</button>

            {/* two way data binding because it is reading and writing the value */}
            <h1>{searchButton}</h1>
            <h1>{searchText}</h1>
            <h1>{setSearchButton}</h1>


            <div className="restaurant-list">
                {restaurantCardData.map((restro) => {
                    return <RestaurantCard {...restro.info} key={restro.info.id} />
                })}
            </div></>

    )
}

export default BodyComponent