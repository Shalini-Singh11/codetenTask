import { useEffect } from 'react';
import ImageChange1 from '../../assets/imagechange1.png';
import ImageChange2 from '../../assets/imagechange2.png';
import ImageChange3 from '../../assets/imagechange3.webp';

const SliderComponent = ({ currentIndex, setCurrentIndex, scrollableSection }) => {
  const images = [ImageChange3, ImageChange1, ImageChange2];

  //================ image change effect=================
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    
      <div className="slider-container">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`slider-image ${index === currentIndex ? 'active' : ''}`}
          />
        ))}
      </div>

  );
};

export default SliderComponent;
