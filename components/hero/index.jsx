import React from "react";
import Image from "next/image";
const Hero = ({ content }) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <Image src={content.image} width="500" height="500" />
    </div>
  );
};
export default Hero;
