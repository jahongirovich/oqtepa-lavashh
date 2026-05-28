import React from 'react';
import sousImage from '../assets/sous.jpg';

// Skrinshotdagi barcha 5 ta sous ma'lumotlari haqiqiy rasmlari bilan
const sauceProducts = [
  { 
    id: 1, 
    title: 'Кисло-сладкий чили соус Heinz', 
    price: '5000', 
    image: sousImage
  },
  { 
    id: 2, 
    title: 'Xalapenyo', 
    price: '4000', 
    image: sousImage
  },
  { 
    id: 3, 
    title: 'Чесночный соус Heinz', 
    price: '5000', 
    image: sousImage
  },
  { 
    id: 4, 
    title: 'Кетчуп Heinz', 
    price: '5000', 
    image: sousImage
  },
  { 
    id: 5, 
    title: 'Сырный соус Heinz', 
    price: '5000', 
    image: sousImage
  }
];

const Sousi = ({ addToCart }) => (
    <div className="w-full font-sans select-none">
      {/* Bo'lim sarlavhasi */}
      <div className="mb-6">
        <h3 className="text-[#1A1A1A] text-[22px] font-bold tracking-wide">
          Соусы
        </h3>
      </div>

      {/* Mahsulotlar Gridi */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sauceProducts.map((product) => (
          <div 
            key={product.id} 
            className="bg-white border border-[#EBEFEF] rounded-2xl p-5 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-all group"
          >
            {/* Sevimlilar (Yurakcha tugmasi) */}
            <button className="absolute top-5 right-5 text-gray-300 hover:text-red-500 transition-colors z-10">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </button>

            {/* Mahsulot Rasmi joyi */}
            <div className="w-full h-[200px] flex items-center justify-center relative overflow-hidden mb-4 bg-[#fcfcfc] rounded-xl">
              <img 
                src={product.image} 
                alt={product.title} 
                className="max-h-[85%] max-w-[85%] object-contain group-hover:scale-105 transition-transform duration-300"
                onError={(e) => { e.target.src = "https://via.placeholder.com/250x250?text=Sous" }}
              />
            </div>

            {/* Tekst va Tugma qismi */}
            <div className="flex flex-col flex-1 justify-end">
              <h4 className="text-[#1A1A1A] font-bold text-[16px] mb-2 min-h-[44px] leading-snug">
                {product.title}
              </h4>
              
              <div className="flex items-baseline gap-1 mb-4">
                <span className="text-[#C11B23] font-black text-[20px] tracking-tight">
                  {product.price}
                </span>
                <span className="text-gray-500 text-[14px] font-normal">
                  сум
                </span>
              </div>

              {/* Добавить tugmasi */}
              <button 
                onClick={() => addToCart(product)}
                className="w-full bg-white hover:bg-[#FFFDF6] border border-[#FFC107] text-[#2B2B2B] font-medium py-2.5 rounded-xl text-[15px] transition-all active:scale-[0.98]">
                Добавить
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
);

export default Sousi;