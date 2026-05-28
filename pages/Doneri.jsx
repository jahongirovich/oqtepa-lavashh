import React from 'react';
import doneriImage from '../assets/doneri.jpg';

const products = [
  { id: 1, title: 'Хагги', price: '41000', image: doneriImage },
  { id: 2, title: 'Шаурма', price: '31000', image: doneriImage },
  { id: 3, title: 'Пита донер', price: '35000', image: doneriImage },
  { id: 4, title: 'Супер пита', price: '37000', image: doneriImage },
  { id: 5, title: 'Биг Донер', price: '41000', image: doneriImage }
];

const Doneri = ({ addToCart }) => (
  <div className="w-full font-sans select-none">
    <div className="mb-6"><h3 className="text-[#1A1A1A] text-[22px] font-bold">Донеры</h3></div>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {products.map((p) => (
        <div key={p.id} className="bg-white border border-[#EBEFEF] rounded-2xl p-5 flex flex-col justify-between relative shadow-sm group">
          <div className="w-full h-[200px] flex items-center justify-center bg-[#fcfcfc] rounded-xl mb-4">
            <img src={p.image} alt={p.title} className="max-h-[90%] max-w-[90%] object-contain group-hover:scale-105 transition-transform" />
          </div>
          <div>
            <h4 className="text-[#1A1A1A] font-bold text-[16px] mb-2 min-h-[44px]">{p.title}</h4>
            <div className="text-[#C11B23] font-black text-[20px] mb-4">{p.price} <span className="text-gray-500 text-[14px] font-normal">сум</span></div>
            <button 
              onClick={() => addToCart(p)}
              className="w-full bg-white hover:bg-[#FFFDF6] border border-[#FFC107] py-2.5 rounded-xl font-medium">Добавить</button>
          </div>
        </div>
      ))}
    </div>
  </div>
);
export default Doneri;