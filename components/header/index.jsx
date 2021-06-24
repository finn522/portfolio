import Link from "next/link";
import styles from "./styles.module.scss";
import ChevronDown from "public/icons/chevron_down";
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
              <li><Link href="/#projects" >Projecten</Link></li>
              <li><Link href="/skills">Vaardigheden</Link></li>
              <li><Link href="/about">Over mij</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
