import React, { useState } from "react";

const ImageSlider = ({ images, alt }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const currentImage = images[currentImageIndex];

  const handlePrevClick = () => {
    const newIndex = currentImageIndex - 1;
    setCurrentImageIndex(newIndex >= 0 ? newIndex : images.length - 1);
  };

  const handleNextClick = () => {
    const newIndex = currentImageIndex + 1;
    setCurrentImageIndex(newIndex < images.length ? newIndex : 0);
  };

  return (
    <div className="imageSlide">
      <button className="buttonChangePicLeft" onClick={handlePrevClick}>
        Prev
      </button>
      <img src={currentImage} alt={alt}/>
      <button className="buttonChangePicRight" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};



export default ImageSlider;
