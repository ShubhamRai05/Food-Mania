import React from "react"
import ReactDOM from "react-dom/client"

const headingOne = React.createElement("h1", {
    id: "title",
    key: "h1"


},
    "hello guys")

const headingTwo = React.createElement("h2", {
    id: "title",
    key: "h2"

},
    "hello guys")

const HeadingThree = function () {
    return (
        <div>
            <h2>i am heading three function componenet and gettin returned by big functional component</h2>
        </div>
    )
}

const HeadingComponent = function () {
    return (
        <div>
            {headingOne}
            {HeadingThree()}
            <h2>Hell i am heading component</h2>
        </div>
    )
}

// console.log(headingThree);
console.log(headingTwo);

// const div = React.createElement("div", { className: "container" }, [headingOne, headingTwo, headingThree])
const root = ReactDOM.createRoot(document.querySelector("#root"))
// console.log(div);

root.render(<HeadingComponent />)