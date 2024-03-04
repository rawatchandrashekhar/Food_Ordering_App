import { NavLink } from "react-router-dom"
import { LOGO_URL } from "../utils/constants"

const Header = () => {

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><NavLink to={'/'} className={({ isActive }) =>
                        isActive
                            ? "header-li-element-active"
                            : "header-li-element"
                    }>Home</NavLink></li>
                    <li><NavLink to={'/about'} className={({ isActive }) =>
                        isActive
                            ? "header-li-element-active"
                            : "header-li-element"
                    }>About us</NavLink></li>
                    <li><NavLink to={'/contact'} className={({ isActive }) =>
                        isActive
                            ? "header-li-element-active"
                            : "header-li-element"
                    }>Contact us</NavLink></li>
                    <li><NavLink to={'/cart'} className={({ isActive }) =>
                        isActive
                            ? "header-li-element-active"
                            : "header-li-element"
                    }>Cart</NavLink></li>
                </ul>
            </div>
        </div>
    )
}

export default Header