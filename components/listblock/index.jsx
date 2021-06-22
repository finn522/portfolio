import React from "react";

const ListBlock = ({ content }) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.description}</p>
    </div>
  );
};

export default ListBlock;
