import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useNavigate } from "react-router-dom";
import '/workspaces/project/src/css/Carrusel.css';

const Carrusel = () => {
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);
  const itemsPerPage = 3;

  const handleClick = (slug) => {
    navigate("/detalle/" + slug);
  }

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const renderCarouselItems = () => {
    const pages = Math.ceil(procesador.length / itemsPerPage);
    const carouselItems = [];

    for (let i = 0; i < pages; i++) {
      const startIndex = i * itemsPerPage;
      const slicedProcesador = procesador.slice(startIndex, startIndex + itemsPerPage);

      carouselItems.push(
        <Carousel.Item key={i}>
          <div className="row">
            {slicedProcesador.map((item, subIndex) => (
              <div key={startIndex + subIndex} className="col">
                <img
                  className='w-100 h-100 dark-image'
                  src={item.picture}
                  alt={`Procesador ${item.slug}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleClick(item.slug);
                  }}
                />
              </div>
            ))}
          </div>
        </Carousel.Item>
      );
    }

    return carouselItems;
  };

  return (
    <div className="carrusel-container">
      <Carousel activeIndex={index} onSelect={handleSelect} interval={null} wrap={false} prevIcon={<span className="carousel-control-prev-icon" />} nextIcon={<span className="carousel-control-next-icon" />}>
        {renderCarouselItems()}
      </Carousel>
    </div>
  );
}

export default Carrusel;

const procesador = [
  {
        
    "slug": "procesador-1",
    "picture": "https://keagamerstore.com/wp-content/uploads/2023/03/1-29.png"
},
{
    
    "slug": "procesador-2",
    "picture": "https://techcartindia.com/wp-content/uploads/2023/12/1-12.png"
},
{
    
    "slug": "procesador-3",
    "picture": "https://electronicstore.com.pe/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/4/14532534.png"
},
{
    
    "slug": "procesador-4",
    "picture": "https://pcexpress.pe/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/k/k/kk3enbbvjc2ublbq5jtgdj.png"
},
{
    
    "slug": "procesador-5",
    "picture": "https://i0.wp.com/infotron.pe/wp-content/uploads/2023/12/procesador-intel-core-i9-14900kf-320ghz600ghz-36mb-24-core-lga1700-pnbx8071514900kf-removebg-preview.png?fit=500%2C500&ssl=1"
},
{
    "slug": "procesador-6",
    "picture": "https://dojiw2m9tvv09.cloudfront.net/71228/product/19168.png"
}
];