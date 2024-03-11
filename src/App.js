import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";
import Error from "./components/Error";
import RestaurantDetail from "./components/RestaurantDetail";

// React Element is an abject but when it renders into the DOM then it beacomes a HTML elements

// const parent = React.createElement("h1", { id: "heading" }, "Inside from the React");  // CORE REACT WILL CREATE THIS ELEMENT

// const parentJSX = <h1 id="heading">PARENT JSX</h1>;

const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/restaurant/:resID",
                element: <RestaurantDetail />
            }
        ]
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));  //ReactDOM will display created react element into the browser
// root.render(<AppLayout />);      // It will take an object and convert it into an HTML element and push it to the browser and it will replace everything whatever inside the "ROOT".
root.render(<RouterProvider router={appRouter} />);

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