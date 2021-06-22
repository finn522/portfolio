import React from "react";

const TextBlock = ({ content }) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
};

export default TextBlock;
