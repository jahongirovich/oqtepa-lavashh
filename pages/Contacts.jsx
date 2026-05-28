import React from 'react';

const Contacts = () => {
  return (
    <div className="w-full font-sans select-none">
      {/* Sarlavha */}
      <div className="mb-8">
        <h2 className="text-[#1A1A1A] text-[32px] font-bold">Контакты</h2>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        
        {/* Left Side - Company Info */}
        <div className="space-y-6">
          
          {/* Company Info Section */}
          <div className="bg-white rounded-2xl p-8 border border-[#EBEFEF] shadow-sm">
            <h3 className="text-[#1A1A1A] font-bold text-[20px] mb-4">
              ООО «QQTEPA-FOOD-SERVICE»
            </h3>

            <div className="space-y-3 text-[#1A1A1A] text-[14px] leading-relaxed">
              <div>
                <p className="font-semibold text-[15px] mb-1">Адрес:</p>
                <p className="text-gray-700">
                  Узбекистан, г. Ташкент<br />
                  Шайхонтохурский р-он<br />
                  Комолон МФЙ, ул. Булёдкор б/1.
                </p>
              </div>

              <div className="pt-2 border-t border-[#EBEFEF]">
                <p className="text-gray-600">
                  <span className="font-medium">Р/сч:</span> 20208000805597592001
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">в УЗПБ ОЛМАЗОР ЦБУ</span>
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">МФО:</span> 00440
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">ИНН:</span> 310080560
                </p>
                <p className="text-gray-600">
                  <span className="font-medium">ОКЕД:</span> 56290
                </p>
                <p className="text-gray-600 mt-2">
                  <span className="font-medium">Регистрационный код плательщика НДС:</span> 326052080950
                </p>
              </div>

              <div className="pt-2 border-t border-[#EBEFEF]">
                <p className="text-[15px]">
                  <span className="font-semibold">Директор:</span> Ануоз Рамзиддин Хусниттинович
                </p>
              </div>
            </div>
          </div>

          {/* Phone Section */}
          <div className="bg-white rounded-2xl p-8 border border-[#EBEFEF] shadow-sm">
            <h3 className="text-[#1A1A1A] font-bold text-[20px] mb-4">
              Телефоны
            </h3>

            <div className="space-y-2">
              <a
                href="tel:+998781500030"
                className="flex items-center gap-3 p-4 bg-[#F9EAEA] rounded-lg hover:bg-[#FFFDF6] transition-colors"
              >
                <svg className="w-5 h-5 text-[#C11B23]" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773c.151.301.394.534.69.822 1.447 1.592 3.807 3.952 5.399 5.399.288.296.521.539.822.69l.773-1.548a1 1 0 011.06-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2.5C7.82 18 2 12.18 2 5.5V3z" />
                </svg>
                <div>
                  <p className="text-[#C11B23] font-black text-[18px]">
                    (78) 150 00 30
                  </p>
                  <p className="text-[#666] text-[12px]">call-center</p>
                </div>
              </a>
            </div>
          </div>

          {/* Social Media Section */}
          <div className="bg-white rounded-2xl p-8 border border-[#EBEFEF] shadow-sm">
            <h3 className="text-[#1A1A1A] font-bold text-[20px] mb-4">
              Мы в соцсетях
            </h3>

            <div className="flex gap-4">
              {/* Telegram */}
              <a
                href="https://t.me/qotepalavash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-[#0088cc] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                title="Telegram"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.646h3.554v1.364c.429-.662 1.196-1.608 2.902-1.608 2.118 0 3.721 1.386 3.721 4.365v5.525zM5.337 5.43c-1.144 0-1.915-.759-1.915-1.71 0-.956.768-1.71 1.959-1.71 1.188 0 1.914.754 1.939 1.71 0 .951-.751 1.71-1.983 1.71zm1.581 15.022H3.656V11.206h3.262v9.246zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/qotepalavash"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-gradient-to-r from-[#f09433] via-[#e6683c] to-[#dc2743] rounded-full flex items-center justify-center hover:opacity-80 transition-opacity"
                title="Instagram"
              >
                <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
                </svg>
              </a>
            </div>
          </div>

        </div>

        {/* Right Side - Map */}
        <div className="bg-white rounded-2xl overflow-hidden border border-[#EBEFEF] shadow-sm">
          <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#4A5568] text-[18px] mb-2">Карта</p>
              <p className="text-[#999] text-[14px]">В разработке...</p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contacts;
