import React, { useState } from 'react';
import KurinieNovinki from '../pages/Kurinie_novinki.jsx';
import Limonadi from '../pages/Limonadi.jsx';
import NovieDoneri from '../pages/Novie_doneri.jsx';
import BurgersImproved from '../pages/Burgers_improved.jsx';
import BurgerHotdogi from '../pages/Burgeri_hotdogi.jsx';
import VygodnieSety from '../pages/Vigodnie_seti.jsx';
import Doneri from '../pages/Doneri.jsx';
import Kuritsa from '../pages/Kuritsa.jsx';
import Sneki from '../pages/Sneki.jsx';
import BolshiePizzi from '../pages/Bolshie_pizzi.jsx';
import Salati from '../pages/Salati.jsx';
import Napitki from '../pages/Napitki.jsx';
import Deserti from '../pages/Deserti.jsx';
import Sousi from '../pages/Sousi.jsx';
import About from '../pages/About.jsx';
import Branches from '../pages/Branches.jsx';
import Contacts from '../pages/Contacts.jsx';
import image1 from '../assets/1.jpg';
import image2 from '../assets/2.jpg';
import image3 from '../assets/3.jpg';

const categories = [
  { id: 'oqfest', name: 'OQFEST', icon: '🎉', path: '/oqfest.jsx' },
  { id: 'akcii', name: 'АКЦИИ', icon: '🾴', path: '/akcii.jsx' },
  { id: 'kurinie_novinki', name: 'Куриные новинки', icon: '🆕', path: '/kurinie_novinki.jsx' },
  { id: 'limonadi', name: 'Лимонады', icon: '🥤', path: '/limonadi.jsx' },
  { id: 'novie_doneri', name: 'Новые куриные донеры', icon: '🆕', path: '/novie_doneri.jsx' },
  { id: 'burgers_improved', name: 'Улучшенные бургеры', icon: '🍔', path: '/burgers_improved.jsx' },
  { id: 'burgers_hotdogs', name: 'Бургеры и Хот-доги', icon: '🌭', path: '/burgers_hotdogs.jsx' },
  { id: 'vygodnie_sety', name: 'Выгодные сеты', icon: '🍱', path: '/vygodnie_sety.jsx' },
  { id: 'donery', name: 'Донеры', icon: '🌯', path: '/donery.jsx' },
  { id: 'kurica', name: 'Курица', icon: '🍗', path: '/kurica.jsx' },
  { id: 'sneki', name: 'Снеки', icon: '🍟', path: '/sneki.jsx' },
  { id: 'pizzy', name: 'Большие пиццы', icon: '🍕', path: '/pizzy.jsx' },
  { id: 'salaty', name: 'Салаты', icon: '🥗', path: '/salaty.jsx' },
  { id: 'napitki', name: 'Напитки', icon: '🥤', path: '/napitki.jsx' },
  { id: 'deserty', name: 'Десерты', icon: '🧁', path: '/deserty.jsx' },
  { id: 'sousy', name: 'Соусы', icon: '🍯', path: '/sousy.jsx' },
];

const products = [
  {
    id: 1,
    title: '2+1 Tovuqli shaurma',
    price: '58000',
    badge: '2+1',
    image: image1
  },
  {
    id: 2,
    title: '2+1 Nuggets standart',
    price: '34000',
    badge: '2+1',
    image: image2
  },
  {
    id: 3,
    title: '2+1 Kartoshka fri standart',
    price: '38000',
    badge: '2+1',
    image: image3
  }
];

const Section = ({ searchQuery, addToCart, showAbout, showBranches, showContacts, onCloseAbout }) => {
  const [activeCategory, setActiveCategory] = useState('oqfest');

  // Filter products based on search query
  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Har bir kategoriya bosilganda boshqa sahifani ochish mantig'i uchun joy
  const handleCategoryClick = (category) => {
    setActiveCategory(category.id);
    console.log(`Category clicked: ${category.name}`);
  };

  return (
    <section className="w-full bg-[#FCFCFC] py-4 sm:py-6 font-sans select-none">
      <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-8 flex flex-col lg:flex-row gap-4 sm:gap-8">
        
        {/* SIDEBAR: KATEGORIYALAR PANELI */}
        <div className="w-full lg:w-[280px] flex-shrink-0">
          <div className="bg-white border border-[#EBEFEF] rounded-xl overflow-hidden shadow-sm sticky top-2 sm:top-4">
            
            {/* Sarlavha paneli */}
            <div className="bg-[#C11B23] text-white px-3 sm:px-4 py-2.5 sm:py-3.5 flex items-center gap-3 font-semibold text-[14px] sm:text-[16px]">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <span>Категории</span>
            </div>

            {/* Skrinshottagi barcha toifalar ro'yxati */}
            <ul className="flex flex-col max-h-[70vh] sm:max-h-[75vh] overflow-y-auto custom-scrollbar">
              {categories.map((item) => (
                <li key={item.id} className="border-b border-[#F4F7F7] last:border-none">
                  <button
                    onClick={() => handleCategoryClick(item)}
                    className={`w-full text-left px-3 sm:px-4 py-2 sm:py-3 flex items-center justify-between transition-all text-[13px] sm:text-[15px] font-normal ${
                      activeCategory === item.id 
                        ? 'bg-[#F9EAEA] text-[#C11B23] font-medium border-l-4 border-[#C11B23]' 
                        : 'text-[#4A5568] hover:bg-gray-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg opacity-80">{item.icon}</span>
                      <span>{item.name}</span>
                    </div>
                    
                    <svg className="w-4 h-4 text-gray-300 group-hover:text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </li>
              ))}
            </ul>

          </div>
        </div>

        {/* ASOSIY QISM: MAHSULOTLAR */}
        <div className="flex-1">
          {showAbout ? (
            <About />
          ) : showBranches ? (
            <Branches />
          ) : showContacts ? (
            <Contacts />
          ) : (
            <>
              {/* Sarlavhalar */}
              <div className="mb-4 sm:mb-6">
                <h2 className="text-[#2B2B2B] text-[22px] sm:text-[28px] font-bold tracking-tight">Меню</h2>
                <h3 className="text-[#1A1A1A] text-[16px] sm:text-[20px] font-bold uppercase mt-2 tracking-wide border-b pb-2">
                  {categories.find(c => c.id === activeCategory)?.name || 'OQFEST'}
                </h3>
              </div>

          {/* Mahsulotlar Kartochkalari yoki Sahifa komponenti */}
          {searchQuery ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white border border-[#EBEFEF] rounded-lg sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow group"
                  >
                    {/* Sevimlilar (Yurakcha) */}
                    <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors z-10">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </button>

                    {/* Rasm va Aktsiya belgisi */}
                    <div className="w-full h-[120px] sm:h-[180px] flex items-center justify-center relative overflow-hidden mb-2 sm:mb-4">
                      <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-[#C11B23] text-white font-black text-[14px] sm:text-[18px] px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-br-2xl rounded-tl-sm shadow-md z-10 transform -rotate-3">
                        {product.badge}
                      </div>
                      <img 
                        src={product.image} 
                        alt={product.title} 
                        className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>

                    {/* Detallar */}
                    <div className="flex flex-col flex-1 justify-end">
                      <h4 className="text-[#1A1A1A] font-bold text-[13px] sm:text-[16px] mb-1 min-h-[32px] sm:min-h-[48px] line-clamp-2">
                        {product.title}
                      </h4>
                      
                      <div className="flex items-baseline gap-1 mb-2 sm:mb-4">
                        <span className="text-[#C11B23] font-black text-[16px] sm:text-[20px]">{product.price}</span>
                        <span className="text-gray-400 text-[11px] sm:text-[13px] font-medium">сум</span>
                      </div>

                      {/* Qo'shish tugmasi */}
                      <button 
                        onClick={() => addToCart(product)}
                        className="w-full bg-white hover:bg-[#FFFDF6] border border-[#FFC107] text-[#2B2B2B] font-medium py-1.5 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl text-[12px] sm:text-[15px] transition-colors active:scale-[0.98]">
                        Добавить
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="col-span-full text-center py-12">
                  <p className="text-gray-500 text-lg">Ничего не найдено</p>
                </div>
              )}
            </div>
          ) : activeCategory === 'kurinie_novinki' ? (
            <KurinieNovinki addToCart={addToCart} />
          ) : activeCategory === 'limonadi' ? (
            <Limonadi addToCart={addToCart} />
          ) : activeCategory === 'novie_doneri' ? (
            <NovieDoneri addToCart={addToCart} />
          ) : activeCategory === 'burgers_improved' ? (
            <BurgersImproved addToCart={addToCart} />
          ) : activeCategory === 'burgers_hotdogs' ? (
            <BurgerHotdogi addToCart={addToCart} />
          ) : activeCategory === 'vygodnie_sety' ? (
            <VygodnieSety addToCart={addToCart} />
          ) : activeCategory === 'donery' ? (
            <Doneri addToCart={addToCart} />
          ) : activeCategory === 'kurica' ? (
            <Kuritsa addToCart={addToCart} />
          ) : activeCategory === 'sneki' ? (
            <Sneki addToCart={addToCart} />
          ) : activeCategory === 'pizzy' ? (
            <BolshiePizzi addToCart={addToCart} />
          ) : activeCategory === 'salaty' ? (
            <Salati addToCart={addToCart} />
          ) : activeCategory === 'napitki' ? (
            <Napitki addToCart={addToCart} />
          ) : activeCategory === 'deserty' ? (
            <Deserti addToCart={addToCart} />
          ) : activeCategory === 'sousy' ? (
            <Sousi addToCart={addToCart} />
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white border border-[#EBEFEF] rounded-lg sm:rounded-2xl p-3 sm:p-4 flex flex-col justify-between relative shadow-sm hover:shadow-md transition-shadow group"
                >
                  {/* Sevimlilar (Yurakcha) */}
                  <button className="absolute top-4 right-4 text-gray-300 hover:text-red-500 transition-colors z-10">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </button>

                  {/* Rasm va Aktsiya belgisi */}
                  <div className="w-full h-[120px] sm:h-[180px] flex items-center justify-center relative overflow-hidden mb-2 sm:mb-4">
                    <div className="absolute top-1 left-1 sm:top-2 sm:left-2 bg-[#C11B23] text-white font-black text-[14px] sm:text-[18px] px-2 sm:px-3 py-0.5 sm:py-1.5 rounded-br-2xl rounded-tl-sm shadow-md z-10 transform -rotate-3">
                      {product.badge}
                    </div>
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  {/* Detallar */}
                  <div className="flex flex-col flex-1 justify-end">
                    <h4 className="text-[#1A1A1A] font-bold text-[13px] sm:text-[16px] mb-1 min-h-[32px] sm:min-h-[48px] line-clamp-2">
                      {product.title}
                    </h4>
                    
                    <div className="flex items-baseline gap-1 mb-2 sm:mb-4">
                      <span className="text-[#C11B23] font-black text-[16px] sm:text-[20px]">{product.price}</span>
                      <span className="text-gray-400 text-[11px] sm:text-[13px] font-medium">сум</span>
                    </div>

                    {/* Qo'shish tugmasi */}
                    <button 
                      onClick={() => addToCart(product)}
                      className="w-full bg-white hover:bg-[#FFFDF6] border border-[#FFC107] text-[#2B2B2B] font-medium py-1.5 sm:py-2.5 px-3 sm:px-4 rounded-lg sm:rounded-xl text-[12px] sm:text-[15px] transition-colors active:scale-[0.98]">
                      Добавить
                    </button>
                  </div>

                </div>
              ))}
            </div>
          )}
            </>
          )}
        </div>

      </div>
    </section>
  );
};

export default Section;