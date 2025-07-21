// src/data/products.js

import headphoneImg from '../assets/images/Wireless headphone.webp';
import tshirtImg from '../assets/images/T-shirt.webp';
import graphicsCardImg from '../assets/images/Graphics Card.jpg';
import mouseKeyboardImg from '../assets/images/Mouse&Keyboard.webp';
import rcCarImg from '../assets/images/RC car.webp';
import hotWheelsImg from '../assets/images/HotWheels.jpg';
import transformerToysImg from '../assets/images/Transformer Toys.jpg';
import shirtsImg from '../assets/images/Shirts.jpg';
import jeansImg from '../assets/images/Jeans pant.jpg';
import legoToysImg from '../assets/images/Lego Toys.jpg';
import homeTheatreImg from '../assets/images/Home Theatre.avif';
import gamingMonitorImg from '../assets/images/Gaming monitor.jpg';
import droneImg from '../assets/images/Drone.webp';
import coatSuitImg from '../assets/images/Coat suit.webp';
import chargerImg from '../assets/images/Charger.jpg';
import tvImg from '../assets/images/4K TV.avif';
import laptopImg from '../assets/images/Laptop.jpg';
import ramImg from '../assets/images/RAM.webp';
import ssdImg from '../assets/images/SSD.webp';
import ethernetImg from '../assets/images/Ethernet cable.jpg';

const products = [
  {
    id: 1,
    name: 'Wireless Headphones',
    price: 2599,
    category: 'Electronics',
    image: headphoneImg
  },
  {
    id: 2,
    name: 'Men T-Shirt',
    price: 799,
    category: 'Clothing',
    image: tshirtImg
  },
  {
    id: 3,
    name: 'Graphics Card RTX 5090',
    price: 410999,
    category: 'Electronics',
    image: graphicsCardImg
  },
  {
    id: 4,
    name: 'Mouse and keyboard combo',
    price: 2999,
    category: 'Electronics',
    image: mouseKeyboardImg
  },
  {
    id: 5,
    name: 'RC Cars',
    price: 1699,
    category: 'Toys',
    image: rcCarImg
  },
  {
    id: 6,
    name: 'Hot Wheels combo pack of 20',
    price: 7899,
    category: 'Toys',
    image: hotWheelsImg
  },
  {
    id: 7,
    name: 'Optimus Prime',
    price: 3899,
    category: 'Toys',
    image: transformerToysImg
  },
  {
    id: 8,
    name: 'Mens Shirt',
    price: 1259,
    category: 'Clothing',
    image: shirtsImg
  },
  {
    id: 9,
    name: 'Men Jeans',
    price: 699,
    category: 'Clothing',
    image: jeansImg
  },
  {
    id: 10,
    name: 'Lego Toys',
    price: 1399,
    category: 'Toys',
    image: legoToysImg
  },
  {
    id: 11,
    name: 'Mini Home Theatre',
    price: 35799,
    category: 'Electronics',
    image: homeTheatreImg
  },
  {
    id: 12,
    name: '4K Gaming Monitor 240Hz curved display',
    price: 240000,
    category: 'Electronics',
    image: gamingMonitorImg
  },
  {
    id: 13,
    name: 'Drone',
    price: 9999,
    category: 'Electronics',
    image: droneImg
  },
  {
    id: 14,
    name: 'Mens Coat suit',
    price: 7999,
    category: 'Clothing',
    image: coatSuitImg
  },
  {
    id: 15,
    name: '3 port Fast Charger Type-c',
    price: 569,
    category: 'Electronics',
    image: chargerImg
  },
  {
    id: 16,
    name: '4k OLED 45 inches TV',
    price: 120000,
    category: 'Electronics',
    image: tvImg
  },
  {
    id: 17,
    name: 'Gaming Laptop',
    price: 250000,
    category: 'Electronics',
    image: laptopImg
  },
  {
    id: 18,
    name: '32GB RAM 16 X 2',
    price: 12000,
    category: 'Electronics',
    image: ramImg
  },
  {
    id: 19,
    name: '2 TB MVME SSD',
    price: 15999,
    category: 'Electronics',
    image: ssdImg
  },
  {
    id: 20,
    name: 'Ethernet Cable 5 meters',
    price: 369,
    category: 'Electronics',
    image: ethernetImg
  }
];

export default products;
