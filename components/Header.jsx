import React from 'react';

const Header = ({ searchQuery, setSearchQuery, cartCount = 0, onCartClick, onShowAbout, onShowMenu, onShowBranches, onShowContacts, onShowAuth }) => {
  return (
    <header className="w-full bg-white font-sans selection:bg-red-500 selection:text-white select-none">
      <div className="max-w-[1440px] mx-auto px-2 sm:px-4 py-3 sm:py-4 lg:px-8">
        
        {/* Yuqori qism: Logo, Navigatsiya va O'ng tomondagi ma'lumotlar bloki */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-4 lg:gap-0">
          
          {/* Chap tomon: Logotip va Menyu */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 lg:gap-12 w-full sm:w-auto">
            {/* Oqtepa Lavash Logotipi */}
            <div className="flex-shrink-0 cursor-pointer">
              <h1 className="text-[#A81D23] font-black tracking-tight uppercase leading-[0.85] text-2xl sm:text-3xl lg:text-[38px]">
                Oqtepa<br />
                <span className="text-[16px] sm:text-[22px] lg:text-[26px] font-extrabold tracking-wide block mt-0.5">Lavash</span>
              </h1>
            </div>

            {/* Navigatsiya linklari */}
            <nav className="flex flex-wrap items-center gap-x-2 sm:gap-x-6 gap-y-1 sm:gap-y-2 text-[#2B2B2B] text-[12px] sm:text-[15px] lg:text-[17px] font-normal">
              <button onClick={onShowMenu} className="hover:text-[#A81D23] transition-colors bg-none border-none cursor-pointer font-normal">Меню</button>
              <button onClick={onShowAbout} className="hover:text-[#A81D23] transition-colors bg-none border-none cursor-pointer font-normal">О нас</button>
              <button onClick={onShowBranches} className="hover:text-[#A81D23] transition-colors bg-none border-none cursor-pointer font-normal">Филиалы</button>
              <button onClick={onShowContacts} className="hover:text-[#A81D23] transition-colors bg-none border-none cursor-pointer font-normal">Контакты</button>
            </nav>
          </div>

          {/* O'ng tomon: Yetkazib berish, Hudud, Til va Kirish tugmasi */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 lg:gap-6 lg:gap-8 ml-auto sm:ml-0 w-full sm:w-auto">
            
            {/* Доставка bloki - hidden on mobile */}
            <div className="hidden md:flex items-center gap-3">
              <div className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-[#F9EAEA] flex items-center justify-center flex-shrink-0 text-[#A81D23]">
                <svg className="w-4 sm:w-5 h-4 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="flex flex-col text-[12px] lg:text-[14px]">
                <span className="text-gray-500 font-light leading-tight">Доставка или еда навынос</span>
                <span className="text-[#A81D23] font-normal leading-tight cursor-pointer hover:underline mt-0.5">Доставка</span>
              </div>
            </div>

            {/* Регион Ташкент bloki - hidden on mobile */}
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#F9EAEA] flex items-center justify-center flex-shrink-0 text-[#A81D23]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9h18" />
                </svg>
              </div>
              <div className="flex flex-col text-[14px]">
                <span className="text-gray-500 font-light leading-tight">Регион</span>
                <span className="text-[#A81D23] font-normal leading-tight cursor-pointer hover:underline mt-0.5">Ташкент</span>
              </div>
            </div>

            {/* Til tanlash (RU) - hidden on small mobile */}
            <div className="hidden sm:flex items-center gap-2 cursor-pointer py-1 px-2 rounded hover:bg-gray-50 transition-colors">
              <div className="w-5 h-5 rounded-full overflow-hidden flex flex-col border border-gray-100 shadow-sm flex-shrink-0">
                <div className="bg-white h-1/3 w-full"></div>
                <div className="bg-[#0039A6] h-1/3 w-full"></div>
                <div className="bg-[#D52B1E] h-1/3 w-full"></div>
              </div>
              <span className="text-[#2B2B2B] font-medium text-[12px] sm:text-[15px] lg:text-[16px]">RU</span>
              <svg className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-400 mt-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* Войти tugmasi */}
            <button onClick={onShowAuth} className="bg-[#FFC107] hover:bg-[#E5AD06] text-[#2B2B2B] font-medium text-[13px] sm:text-[15px] lg:text-[16px] px-4 sm:px-6 lg:px-8 py-1.5 sm:py-2.5 rounded-lg sm:rounded-[10px] transition-all min-w-[90px] sm:min-w-[110px] lg:min-w-[130px] shadow-sm active:scale-95">
              Войти
            </button>
          </div>

        </div>

        {/* Pastki qism: Поиск inputi va Корзина tugmasi */}
        <div className="mt-3 sm:mt-4 lg:mt-5 flex flex-col sm:flex-row items-center gap-2 sm:gap-3 lg:gap-4">
          
          {/* Qidiruv paneli (Поиск...) */}
          <div className="w-full sm:flex-1 relative">
            <input
              type="text"
              placeholder="Поиск..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#D5DCE2] rounded-lg sm:rounded-[10px] py-2 sm:py-[11px] px-3 sm:px-4 text-[#2B2B2B] placeholder-[#A3B2BF] text-[13px] sm:text-[15px] lg:text-[16px] focus:outline-none focus:border-[#B1BBC4] transition-colors shadow-inner"
            />
          </div>

          {/* Корзина (Savatcha) tugmasi */}
          <button 
            onClick={onCartClick}
            className="w-full sm:w-auto bg-[#C11B23] hover:bg-[#A81D23] text-white font-medium text-[13px] sm:text-[16px] lg:text-[17px] py-2 sm:py-[11px] px-4 sm:px-6 rounded-lg sm:rounded-[10px] flex items-center justify-center sm:justify-start gap-2 sm:gap-3 transition-all shadow-sm active:scale-[0.98] relative min-h-[40px] sm:min-h-auto">
            <svg className="w-4 sm:w-5 h-4 sm:h-5 flex-shrink-0 mb-0 sm:mb-0.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 0a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <span className="hidden sm:inline">Корзина</span>
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-[#FFC107] text-[#2B2B2B] font-bold text-[10px] sm:text-[12px] w-5 h-5 sm:w-5 sm:h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </button>

        </div>

      </div>
    </header>
  );
};

export default Header;