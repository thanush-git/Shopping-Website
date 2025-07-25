import image from "../../public/bg.png";
import styles from "../Styles/Home.module.css";

function Home() {
    return (
        <div className={styles.homeContainer}>
            <div className={styles.heroBody}>
                <p className={styles.heading}>All Eyes On You</p>
                <p className={styles.despBody}>
                    Every piece is crafted to turn heads and spark conversations. <br />{" "}
                    Because fitting in was never the plan.
                </p>
            </div>
            <div>
                <img className={styles.heroPic} src={image} alt="" />
            </div>
        </div>
    );
}

export default Home;
