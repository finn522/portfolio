import { useState, useEffect } from 'react'
import Image from "next/image";
import ArrowDown from "public/icons/arrow_down";
import styles from "./styles.module.scss";
import Simon from "public/images/simon.jpg";
import SimonLaugh from "public/images/simon-laugh.jpg";

const HeroHome = () => {
  const [laugh, setLaugh] = useState(false);
  const startSwitch = () => {
    setInterval(function () { setLaugh(!laugh), setTimeout(function () { setLaugh(false) }, 700) }, Math.floor(Math.random() * (30000 - 5000) + 5000));
  }

  useEffect(() => {
    //TODO: Turn back on
    // startSwitch();
  }, [])

  const scrollTo = () => {
    const element = document.getElementById("projects");
    element.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.background}>
      <div className="wrapper">
        <div className={styles.content}>
          <h1>Simon de Bakker</h1>
          <h2>Benieuwd?</h2>
          <ArrowDown onClick={scrollTo} />
        </div>
        <div className={styles.image}>
          {laugh ? <Image src={SimonLaugh} width="750" height="750" alt="" /> : <Image src={Simon} width="750" height="750" alt="" />}
        </div>
      </div>
    </div>
  );
};

export default HeroHome;
