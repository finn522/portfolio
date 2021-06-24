import Link from "next/link";
import styles from "./styles.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className="wrapper">
        <div className={styles.content}>
          <Link href="/">
            <div className={styles.logo}>SB</div>
          </Link>
          <div className={styles.navigation}>
            <ul>
              <li>Projecten</li>
              <li>Vaardigheden</li>
              <li>Over mij</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
