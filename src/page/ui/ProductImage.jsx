import React, {useState, useEffect} from 'react';


export const ProductImage = ({ imageUrl}) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  useEffect(() => {
    if(imageUrl){
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === imageUrl.length - 1 ? 0 : prevIndex + 1
        );
      }, 7000); // Змінює зображення кожні 3 секунди
      return () => clearInterval(timer);
    }

    
  }, [imageUrl]);


  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === imageUrl.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? imageUrl.length - 1 : prevIndex - 1
    );
  };

  return (
    <div >
      
      {imageUrl &&
        <>
          <div className="relative w-full max-w-2xl mx-auto  overflow-hidden rounded-lg" style={{height: '27rem'}}>
      <div className="relative h-full">
        {imageUrl.map((image, index) => (
          <div
            key={index}
            className={`absolute w-full h-full transition-opacity duration-500 ease-in-out
              ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
          >
            <img
              src={image.image}
              alt={`Slide ${index + 1}`}
              className="slideshow-container"
              style={{height: '26rem'}}
            />
          </div>
        ))}
      </div>
      <button
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        ←
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors"
      >
        →
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {imageUrl.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full 
              ${index === currentIndex ? 'bg-black ' : 'bg-white'}`}
          />
        ))}
      </div>
    </div>
    {imageUrl.map((image, index) => (
          <div
            key={index}
            style={{display:'inline-grid',}}
          >
            <img
              src={image.image}
              alt={`Slide ${index + 1}`}
              style={{width: index === currentIndex ? 110 : 100}}
            />
          </div>
        ))}
        </>
        
      }
    </div>
  )
};