import styles from '../Styles/Nav.module.css'
import logo from "../../public/shopora-logo.png"
import {Link, Outlet} from 'react-router-dom'

function LandingPage(){
    return (
        <div className={styles.landingContainer}>
            <nav className={styles.navbar}>
                <div>
                <img className={styles.logo} src={logo} alt="Shopora" />
                </div>
                <div className={styles.links}>
                    <Link to="/">Home</Link>
                    <Link to="shop">Shop</Link>
                    <Link to="about">About Us</Link>
                </div>
            </nav>
            <div className={styles.outlet}>
            <Outlet />
            </div>
        </div>
    )
}

export default LandingPage;