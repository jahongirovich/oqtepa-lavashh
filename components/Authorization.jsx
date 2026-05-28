import React, { useState } from 'react';

const Authorization = ({ isOpen, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [agreed, setAgreed] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (name && phone && agreed) {
      // Login logic here
      console.log('Login:', { name, phone });
      onClose();
      setName('');
      setPhone('');
      setAgreed(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg sm:rounded-xl p-5 sm:p-8 w-full max-w-md shadow-lg max-h-[90vh] overflow-y-auto">
        {/* Header with close button */}
        <div className="flex justify-between items-center mb-4 sm:mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#2B2B2B]">Авторизация</h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 transition-colors flex-shrink-0"
          >
            <svg className="w-5 sm:w-6 h-5 sm:h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleLogin} className="space-y-3 sm:space-y-5">
          {/* Name field */}
          <div>
            <label className="block text-red-600 font-bold text-xs sm:text-sm mb-1.5 sm:mb-2">
              Ваше имя
            </label>
            <input
              type="text"
              placeholder="Введите ваше имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C11B23] transition-colors text-sm sm:text-base"
              required
            />
          </div>

          {/* Phone field */}
          <div>
            <label className="block text-red-600 font-bold text-xs sm:text-sm mb-1.5 sm:mb-2">
              Ваш номер телефона
            </label>
            <input
              type="tel"
              placeholder="+998 (##) ### ## ##"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#C11B23] transition-colors text-sm sm:text-base"
              required
            />
          </div>

          {/* Checkbox with agreement text */}
          <div className="flex items-start gap-2 sm:gap-3">
            <input
              type="checkbox"
              id="agree"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
              className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 sm:mt-1 cursor-pointer accent-[#C11B23] flex-shrink-0"
              required
            />
            <label htmlFor="agree" className="text-xs sm:text-sm text-gray-700 cursor-pointer leading-relaxed">
              Нажимая на кнопку, я согласился с условиями обработки персональных данных и подтверждаю, что ознакомлен(а) с
              <a href="#privacy" className="text-[#C11B23] hover:underline">
                {' '}Политикой конфиденциальности
              </a>
            </label>
          </div>

          {/* Login button */}
          <button
            type="submit"
            disabled={!name || !phone || !agreed}
            className="w-full bg-[#E97E85] hover:bg-[#D1696F] disabled:bg-gray-300 text-white font-bold text-sm sm:text-lg py-2.5 sm:py-3 rounded-lg transition-colors mt-4 sm:mt-6"
          >
            Войти
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authorization;
