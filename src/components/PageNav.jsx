import Logo from "./Logo"
import styles from "./PageNav.module.css"
import { NavLink } from "react-router-dom"

function PageNav() {
    return (
        <nav className={styles.nav}>

            <Logo />
            <ul>
                <li>
                    <NavLink to="/pricing">PRICING</NavLink>
                </li>
                <li>
                    <NavLink to="/product">PRODUCT</NavLink>
                </li>
                <li>
                    <NavLink to="/login" className={styles.ctaLink}>LOGIN</NavLink>
                </li>
            </ul>
            
            
        </nav>
    )
}

export default PageNav
