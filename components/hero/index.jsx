import React from "react";
import Image from "next/image";
const Hero = ({ content }) => {
  return (
    <div>
      <div className="wrapper">
        <h1>{content.title}</h1>
        <Image
          src={content.image}
          width="500"
          height="500"
          alt={content.title + " image"}
        />
      </div>
    </div>
  );
};
export default Hero;
