import React from 'react';

const Cart = ({ cart, onRemove, onUpdateQuantity, onClose }) => {
  const totalPrice = cart.reduce((sum, item) => {
    const price = parseInt(item.price) || 0;
    return sum + (price * item.quantity);
  }, 0);

  return (
    <div className="fixed right-0 top-0 h-screen w-full sm:w-96 bg-white shadow-lg z-50 flex flex-col border-l border-[#EBEFEF]">
      {/* Хедер кorzina */}
      <div className="bg-[#C11B23] text-white px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <h2 className="text-lg sm:text-xl font-bold">Корзина</h2>
        <button
          onClick={onClose}
          className="text-white hover:opacity-80 transition-opacity"
        >
          <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      {/* Товары */}
      <div className="flex-1 overflow-y-auto p-3 sm:p-4 space-y-3">
        {cart.length === 0 ? (
          <p className="text-center text-gray-500 mt-8 text-sm sm:text-base">Корзина пуста</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-gray-50 rounded-lg sm:rounded-xl p-2 sm:p-3 flex gap-2 sm:gap-3 border border-[#EBEFEF]"
            >
              {/* Рисунок */}
              <div className="w-16 sm:w-20 h-16 sm:h-20 flex-shrink-0 bg-white rounded-lg flex items-center justify-center overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Информация */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="font-bold text-[12px] sm:text-[14px] text-[#1A1A1A] line-clamp-2">
                    {item.title}
                  </h4>
                  <p className="text-[#C11B23] font-black text-[12px] sm:text-[14px] mt-1">
                    {item.price} сум
                  </p>
                </div>

                {/* Количество и удаление */}
                <div className="flex items-center gap-1 sm:gap-2">
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                    className="w-5 sm:w-6 h-5 sm:h-6 bg-white border border-[#FFC107] rounded text-[#C11B23] font-bold hover:bg-[#FFFDF6] transition-colors text-xs sm:text-sm"
                  >
                    −
                  </button>
                  <span className="w-4 sm:w-6 text-center font-medium text-[12px] sm:text-[14px]">
                    {item.quantity}
                  </span>
                  <button
                    onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                    className="w-5 sm:w-6 h-5 sm:h-6 bg-white border border-[#FFC107] rounded text-[#C11B23] font-bold hover:bg-[#FFFDF6] transition-colors text-xs sm:text-sm"
                  >
                    +
                  </button>
                  <button
                    onClick={() => onRemove(item.id)}
                    className="ml-auto text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Итого */}
      {cart.length > 0 && (
        <div className="border-t border-[#EBEFEF] p-3 sm:p-4 bg-gray-50">
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <span className="font-bold text-[#1A1A1A] text-sm sm:text-base">Итого:</span>
            <span className="text-[#C11B23] font-black text-lg sm:text-xl">
              {totalPrice.toLocaleString('ru-RU')} сум
            </span>
          </div>
          <button className="w-full bg-[#C11B23] text-white font-bold py-2.5 sm:py-3 rounded-lg sm:rounded-xl text-sm sm:text-base hover:bg-[#A01620] transition-colors">
            Оформить заказ
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
