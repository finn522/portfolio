import Image from "next/image";
import ArrowDown from "public/icons/arrow_down";
import styles from "./styles.module.scss";
import Simon from "public/images/simon.JPG";
const HeroHome = () => {
  const scrollTo = () => {
    const element = document.getElementById("projects");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.background}>
      <div className="wrapper">
        <div className={styles.content}>
          <h1>Simon de Bakker</h1>
          <ArrowDown onClick={scrollTo} />
        </div>
        <div className={styles.image}>
          <Image src={Simon} width="750" height="750" alt="" />
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
