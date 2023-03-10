import React from "react";

const ImageContainer = ({ imageName, altText }) => {
  return (
    <img
      src={require(`../assets/images/${imageName}`).default}
      alt={altText}
    />
  );
};

export default ImageContainer;