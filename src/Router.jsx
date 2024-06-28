import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login"
import Register from "./pages/Register"
import Profile from "./pages/Profile"
import Offers from "./pages/Offers"
import Projects from "./pages/Projects"
import App from "./App"

const Routers = createBrowserRouter([
    {    
        path: "/",
        element: <App />
    },
    {    
        path: "/login",
        element: <Login />
    },
    {    
        path: "/register",
        element: <Register />
    },
    {    
        path: "/profile",
        element: <Profile />
    },
    {    
        path: "/projects",
        element: <Projects />
    },
    {    
        path: "/offers",
        element: <Offers />
    },
])

export default Routers