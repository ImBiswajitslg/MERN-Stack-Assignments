

//import React from 'react';
import ProductCard from './Components/ProductCard';

const products = [
  {
    name: 'Apple Macbook',
    price: 699.99,
    imageUrl: 'https://cdn.mos.cms.futurecdn.net/nUjLucr3FD7JNLJophFKgb-768-80.jpg.webp',
    description: 'Apple Macbook air M1'
  },
  {
    name: 'Samsung Galaxy Book',
    price: 599.99,
    imageUrl: 'https://images.samsung.com/is/image/samsung/p6pim/in/np750qgk-kg2in/gallery/in-galaxy-book4-360-156-inch-np750-496854-np750qgk-kg2in-539974139?$1300_1038_PNG$',
    description: 'Samsung Galaxy Book 4 pro 360'
  },
  // Add more products as needed
];

const App = () => {
  return (
    <div className="product-list">
      {products.map((product, index) => (
        <ProductCard
          key={index}
          name={product.name}
          price={product.price}
          imageUrl={product.imageUrl}
          description={product.description}
        />
      ))}
    </div>
  );
};

export default App;
