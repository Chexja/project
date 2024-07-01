import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
import { FaCheck, FaChevronLeft, FaChevronRight, FaShoppingCart } from 'react-icons/fa';
import { BrowserRouter as Router } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import GaussianBellCurve from './GaussianBellCurve';
import Carrito from './Carrito';

const graphicsCards = [
  { id: 1, name: 'NVIDIA GeForce RTX 3080', description: 'High-end gaming GPU with 10GB GDDR6X.', price: 4500, specialOffer: true, freeShipping: true, image: '/assets/NVIDIA GeForce RTX 3080.jpg', performance: 48 },
  { id: 2, name: 'AMD Radeon RX 6800 XT', description: 'Powerful gaming GPU with 16GB GDDR6.', price: 4000, specialOffer: true, freeShipping: false, image: '/assets/AMD Radeon RX 6800 XT.jpg', performance: 46 },
  { id: 3, name: 'NVIDIA GeForce RTX 3070', description: 'Excellent mid-range gaming GPU.', price: 3500, specialOffer: false, freeShipping: true, image: '/assets/NVIDIA GeForce RTX 3070.jpg', performance: 42 },
  { id: 4, name: 'AMD Radeon RX 6700 XT', description: 'Great performance for 1440p gaming.', price: 3200, specialOffer: false, freeShipping: true, image: '/assets/AMD Radeon RX 6700 XT.jpg', performance: 40 },
  { id: 5, name: 'NVIDIA GeForce RTX 3060', description: 'Good performance for 1080p gaming.', price: 2500, specialOffer: false, freeShipping: false, image: '/assets/NVIDIA GeForce RTX 3060.jpg', performance: 36 },
  { id: 6, name: 'AMD Radeon RX 6600 XT', description: 'Solid 1080p gaming GPU.', price: 2400, specialOffer: false, freeShipping: true, image: '/assets/AMD Radeon RX 6600 XT.jpg', performance: 34 },
  { id: 7, name: 'NVIDIA GeForce GTX 1660 Super', description: 'Affordable and efficient.', price: 1800, specialOffer: false, freeShipping: false, image: '/assets/NVIDIA GeForce GTX 1660 Super.jpg', performance: 28 }
];

const processors = [
  { id: 1, name: 'Intel Core i9-11900K', description: 'High performance CPU with 8 cores and 16 threads.', price: 2000, specialOffer: true, freeShipping: true, image: '/assets/Intel Core i9-11900K.jpg', performance: 50 },
  { id: 2, name: 'AMD Ryzen 9 5900X', description: 'Powerful CPU with 12 cores and 24 threads.', price: 2200, specialOffer: true, freeShipping: false, image: '/assets/AMD Ryzen 9 5900X.jpg', performance: 48 },
  { id: 3, name: 'Intel Core i7-11700K', description: 'Great performance for gaming and productivity.', price: 1800, specialOffer: false, freeShipping: true, image: '/assets/Intel Core i7-11700K.jpg', performance: 44 },
  { id: 4, name: 'AMD Ryzen 7 5800X', description: 'Excellent all-around performance.', price: 1700, specialOffer: false, freeShipping: true, image: '/assets/AMD Ryzen 7 5800X.jpg', performance: 42 },
  { id: 5, name: 'Intel Core i5-11600K', description: 'Solid performance for gaming.', price: 1200, specialOffer: false, freeShipping: false, image: '/assets/Intel Core i5-11600K.jpg', performance: 34 },
  { id: 6, name: 'AMD Ryzen 5 5600X', description: 'Great value for mid-range builds.', price: 1100, specialOffer: false, freeShipping: true, image: '/assets/AMD Ryzen 5 5600X.jpg', performance: 32 },
  { id: 7, name: 'Intel Core i3-10100F', description: 'Budget-friendly option for basic tasks.', price: 600, specialOffer: false, freeShipping: false, image: '/assets/Intel Core i3-10100F.jpg', performance: 20 }
];

const App = () => {
  const [selectedGraphicsCard, setSelectedGraphicsCard] = useState(null);
  const [selectedProcessor, setSelectedProcessor] = useState(null);
  const [graphicsIndex, setGraphicsIndex] = useState(0);
  const [processorsIndex, setProcessorsIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [showCarrito, setShowCarrito] = useState(false);
  const [filters, setFilters] = useState({
    price: [0, 5000],
    dailyDeal: false,
    freeShipping: false,
  });

  useEffect(() => {
    setGraphicsIndex(0);
    setProcessorsIndex(0);
  }, [searchQuery, filters]);

  const selectProduct = (category, product) => {
    if (category === 'graphics') {
      setSelectedGraphicsCard(product);
    } else if (category === 'processors') {
      setSelectedProcessor(product);
    }
  };

  const filteredGraphicsCards = graphicsCards
    .filter(card => card.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(card => card.price >= filters.price[0] && card.price <= filters.price[1])
    .filter(card => (!filters.dailyDeal || card.specialOffer))
    .filter(card => (!filters.freeShipping || card.freeShipping));

  const filteredProcessors = processors
    .filter(proc => proc.name.toLowerCase().includes(searchQuery.toLowerCase()))
    .filter(proc => proc.price >= filters.price[0] && proc.price <= filters.price[1])
    .filter(proc => (!filters.dailyDeal || proc.specialOffer))
    .filter(proc => (!filters.freeShipping || proc.freeShipping));

  const prevGraphics = () => {
    setGraphicsIndex((prevIndex) => (prevIndex === 0 ? Math.max(filteredGraphicsCards.length - 3, 0) : prevIndex - 3));
  };

  const nextGraphics = () => {
    setGraphicsIndex((prevIndex) => (prevIndex + 3 >= filteredGraphicsCards.length ? 0 : prevIndex + 3));
  };

  const prevProcessors = () => {
    setProcessorsIndex((prevIndex) => (prevIndex === 0 ? Math.max(filteredProcessors.length - 3, 0) : prevIndex - 3));
  };

  const nextProcessors = () => {
    setProcessorsIndex((prevIndex) => (prevIndex + 3 >= filteredProcessors.length ? 0 : prevIndex + 3));
  };

  const getTotalScore = () => {
    if (selectedGraphicsCard && selectedProcessor) {
      return selectedGraphicsCard.performance + selectedProcessor.performance;
    }
    return 0;
  };

  const renderProducts = (products, startIndex, category) => {
    return products.slice(startIndex, startIndex + 3).map((product) => (
      <div className="product-item" key={product.id}>
        <img src={product.image} alt={product.name} />
        <h4>{product.name}</h4>
        <p className="product-price">S/. {product.price}</p>
        <Button className="select-button" onClick={() => selectProduct(category, product)}><FaCheck /> Armar</Button>
      </div>
    ));
  };

  const handleFilterChange = (filterName, value) => {
    setFilters(prevFilters => ({
      ...prevFilters,
      [filterName]: value
    }));
  };

  const handleBuyClick = () => {
    setShowCarrito(true);
  };

  return (
    <div>
      <Header />
      <Container className="shadow">
        <Row>
          <Col md={9}>
            <Row>
              <Col md={12}>
                <h1>Catálogo</h1>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <div className="filter">
                  <label>Precio: S/. {filters.price[0]} - S/. {filters.price[1]}</label>
                  <Form.Range
                    value={filters.price[1]}
                    onChange={(e) => handleFilterChange('price', [filters.price[0], parseInt(e.target.value)])}
                    min={0}
                    max={5000}
                  />
                </div>
                <Form.Check
                  type="checkbox"
                  label="Oferta del día"
                  checked={filters.dailyDeal}
                  onChange={() => handleFilterChange('dailyDeal', !filters.dailyDeal)}
                />
                <Form.Check
                  type="checkbox"
                  label="Envío gratis"
                  checked={filters.freeShipping}
                  onChange={() => handleFilterChange('freeShipping', !filters.freeShipping)}
                />
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h2>Tarjetas Gráficas</h2>
                <div className="product-grid">
                  {renderProducts(filteredGraphicsCards, graphicsIndex, 'graphics')}
                </div>
                <div className="carousel-controls">
                  <Button onClick={prevGraphics}><FaChevronLeft /></Button>
                  <Button onClick={nextGraphics}><FaChevronRight /></Button>
                </div>
              </Col>
            </Row>
            <Row>
              <Col md={12}>
                <h2>Procesadores</h2>
                <div className="product-grid">
                  {renderProducts(filteredProcessors, processorsIndex, 'processors')}
                </div>
                <div className="carousel-controls">
                  <Button onClick={prevProcessors}><FaChevronLeft /></Button>
                  <Button onClick={nextProcessors}><FaChevronRight /></Button>
                </div>
              </Col>
            </Row>
          </Col>
          <Col md={3}>
            <Row>
              <Col md={12}>
                <h1>Armado</h1>
                <div id="selected-products">
                  {selectedGraphicsCard && (
                    <div className="selected-product">
                      <img src={selectedGraphicsCard.image} alt={selectedGraphicsCard.name} />
                      <div>
                        <strong>{selectedGraphicsCard.name}</strong>: {selectedGraphicsCard.description}
                      </div>
                    </div>
                  )}
                  {selectedProcessor && (
                    <div className="selected-product">
                      <img src={selectedProcessor.image} alt={selectedProcessor.name} />
                      <div>
                        <strong>{selectedProcessor.name}</strong>: {selectedProcessor.description}
                      </div>
                    </div>
                  )}
                </div>
               <Button href="/Carrito" id="buy-button" onClick={handleBuyClick} variant="primary"><FaShoppingCart /> Comprar</Button>
                {selectedGraphicsCard && selectedProcessor && (
                  <div id="performance-chart">
                    <GaussianBellCurve mean={50} stdDev={15} totalScore={getTotalScore()} />
                    <div className="selected-item">
                      <h4>Rendimiento estimado</h4>
                      <p>{getTotalScore()}%</p>
                    </div>
                  </div>
                )}
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default App;
