import React from "react";
import ReactDOM from "react-dom/client"

/*
Components of our app
Header
 -logo
 -NavList
 -Cart 
body
 -Search Bar
 -Restraunt List
    -restaurant Card
      -Image
      -name
      -rating
      -Cusines (tags)
Footer
 -reference links
 -copyright component
*/

const paddingStyle = {
    padding: "20px 10px"
}


const Title = function () {
    return <h1 className="title ">Food Mania</h1>
}
const burgerKing = {
    name:"Meraki",
    img:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf",
    cusines:["American" , "cusine"],
    ratings:"4.2"
}

const RestrauntCard = function () {
    return (
        <div className="card">
            <img src={burgerKing.img}></img>
            <h3>{burgerKing.name}</h3>
            <h4>{burgerKing.cusines.join(", ")}</h4>
            <p> {burgerKing.ratings} stars</p>

        </div>
    )
}

const Body = function () {
    return (
        <div className="restaurant-cards">
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        <RestrauntCard/>            
        </div>
    )
}
const Footer = function () {
    return (
        <React.Fragment>
            <h4 style={paddingStyle}  >FOOTER</h4>
        </React.Fragment>
    )
}
const HeaderComponent = function () {
    return (
        <>
            <div className="header">
                <Title />
                <div className="nav-items">
                    <ul>
                        <li style={{ color: "red" }} >Home</li>
                        <li >About Us</li>
                        <li>Contact Us</li>
                        <li>Careers</li>
                    </ul>
                </div>
            </div>
        </>
    )
}
const AppLayout = function () {
    return (
        <>
            <HeaderComponent />
            <Body />
            <Footer />
        </>
    )
}


const rootJs = document.getElementById("root")
const root = ReactDOM.createRoot(rootJs)

root.render(<AppLayout />)