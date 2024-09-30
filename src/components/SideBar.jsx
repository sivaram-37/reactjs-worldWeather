import { Link } from "react-router-dom";
import styles from "./SideBar.module.css";
import Footer from "./Footer";
import Weather from "./Weather";

function SideBar() {
	return (
		<aside className={styles.sidebar}>
			<Link to="/" className={styles.logo}>
				<img src="/icon.png" alt="logo" />
				<h1>World Weather</h1>
			</Link>

			<Weather />

			<Footer />
		</aside>
	);
}

export default SideBar;
