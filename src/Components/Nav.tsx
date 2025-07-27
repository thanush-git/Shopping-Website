import styles from '../Styles/Nav.module.css'
import logo from "../../public/shopora-logo.png"
import shopping from "../../public/shopping-cart.svg"
import {Link, Outlet} from 'react-router-dom'
import { Text } from "@radix-ui/themes";

type NavProps = {
    count: number
}

function LandingPage({count} : NavProps){
    return (
        <div className={styles.landingContainer}>
            <nav className={styles.navbar}>
                <div>
                <img className={styles.logo} src={logo} alt="Shopora" />
                </div>
                <div className={styles.links}>
                    <div>
                        <Link to="cart">
                        <img style={{height: "30px"}} src={shopping} alt="" />
                        <Text>{count}</Text>
                        </Link>
                    </div>
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