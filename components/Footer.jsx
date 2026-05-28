import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#1A1A1A] text-white pt-12 pb-8 font-sans select-none mt-20">
      <div className="max-w-[1200px] mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          <div className="flex flex-col gap-4">
            <h2 className="text-[24px] font-black tracking-wider text-[#FFC107]">
              OQTEPA
            </h2>
            <p className="text-gray-400 text-[14px] leading-relaxed">
              Вкусная еда быстро и качественно. Доставка по всему городу.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-white mb-1">Меню</h4>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] text-[14px] transition-colors">Лаваш</a>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] text-[14px] transition-colors">Бургеры</a>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] text-[14px] transition-colors">Пицца</a>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] text-[14px] transition-colors">Напитки</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-white mb-1">Компания</h4>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] text-[14px] transition-colors">О нас</a>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] text-[14px] transition-colors">Филиалы</a>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] text-[14px] transition-colors">Контакты</a>
            <a href="#" className="text-gray-400 hover:text-[#FFC107] text-[14px] transition-colors">Вакансии</a>
          </div>

          <div className="flex flex-col gap-3">
            <h4 className="text-[16px] font-bold text-white mb-1">Контакты</h4>
            <span className="text-[#FFC107] text-[18px] font-black tracking-wide">
              +998 (71) 200-89-89
            </span>
            <p className="text-gray-400 text-[14px]">
              Прием заказов: с 10:00 до 03:00
            </p>
          </div>

        </div>

        <hr className="border-gray-800 my-6" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-gray-500 text-[13px]">
          <div>
            © 2026 Oqtepa Lavash. Все права защищены.
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-gray-400 transition-colors">Пользовательское соглашение</a>
            <a href="#" className="hover:text-gray-400 transition-colors">Политика конфиденциальности</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;