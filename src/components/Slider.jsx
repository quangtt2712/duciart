import { useState, useEffect } from "react";
import slider1 from "../assets/images/1.jpg";
import slider2 from "../assets/images/2.jpg";
import slider3 from "../assets/images/3.jpg";
import slider4 from "../assets/images/4.jpg";
import slider5 from "../assets/images/5.jpg";
import classes from "./Slider.module.css";

const images = [
  { image: slider1, alt: "A delicious, juicy burger" },
  { image: slider2, alt: "A delicious, spicy curry" },
  { image: slider3, alt: "Steamed dumplings" },
  { image: slider4, alt: "Steamed dumplings" },
  { image: slider5, alt: "Steamed dumplings" },
];

const Slider = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex < images.length - 1 ? prevIndex + 1 : 0
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classes.slideshow}>
      {images.map((image, index) => (
        <img
          key={index}
          src={image.image}
          className={index === currentImageIndex ? classes.active : ""}
          alt={image.alt}
        />
      ))}
    </div>
  );
};

export default Slider;
