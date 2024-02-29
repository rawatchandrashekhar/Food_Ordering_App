import React from "react";
import ReactDOM from "react-dom/client";

// React Element is an abject but when it renders into the DOM then it beacomes a HTML elements

// const parent = React.createElement("h1", { id: "heading" }, "Inside from the React");  // CORE REACT WILL CREATE THIS ELEMENT

// const parentJSX = <h1 id="heading">PARENT JSX</h1>;

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://seeklogo.com/images/F/foodx-online-food-ordering-system-logo-145CB16578-seeklogo.com.png" alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = () => {
    return (
        <div className="res-card">
            <h3>Meghna Foods</h3>
        </div>
    )
}

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                <RestaurantCard />
            </div>
        </div>
    )
}

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));  //ReactDOM will display created react element into the browser
root.render(<AppLayout />);      // It will take an object and convert it into an HTML element and push it to the browser and it will replace everything whatever inside the "ROOT".

// const parent = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "child" }, [
//         React.createElement("h1", {}, "This is namaste React"),
//         React.createElement("h2", {}, "by chandu"),
//     ]),
//     React.createElement("div", { id: "child2" }, [
//         React.createElement("h1", {}, "I am an H1 TAG"),
//         React.createElement("h2", {}, "I am an H2 TAG"),
//     ]),
// ])

// const root = ReactDOM.createRoot(document.getElementById("root"))
// root.render(parent);