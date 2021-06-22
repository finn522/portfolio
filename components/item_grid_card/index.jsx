import Image from "next/image";
import Link from "next/link";
import styles from "./styles.module.scss";

const ItemGridCard = ({ name, image, url }) => {
  return (
    <Link href={`/projects/${url}`}>
      <li className={styles.card}>
        <span className={styles.title}>{name}</span>
        <div className={styles.background}></div>
        <Image
          src={image.src}
          width="470"
          height="237"
          alt={styles.title + " background"}
        />
      </li>
    </Link>
  );
};

export default ItemGridCard;
