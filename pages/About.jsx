import React from 'react';
import aboutImage from '../assets/Без названия.jpg';

const About = () => {
  return (
    <div className="w-full font-sans select-none">
      {/* Sarlavha */}
      <div className="mb-8">
        <h2 className="text-[#1A1A1A] text-[32px] font-bold">О нас</h2>
      </div>

      {/* Asosiy kontent */}
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-[#EBEFEF]">
        {/* Rasm */}
        <div className="w-full h-[300px] overflow-hidden rounded-t-2xl">
          <img 
            src={aboutImage} 
            alt="Oqtepa Lavash restaurant" 
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tekst kontent */}
        <div className="p-8 lg:p-12">
          <div className="max-w-4xl mx-auto space-y-6 text-[#1A1A1A] text-[16px] leading-relaxed">
            
            <p>
              Мы — <span className="font-bold text-[#C11B23]">Oqtepa Lavash</span>. Наша сеть ресторанов была основана в 2010 году двумя братьями — Бохдодом и Фарходом Гуломовыми, которые начали готовить «для своих» лаваши в небольшом кафе в Чилнзаре. Но дело, начатое с любовью, быстро вышло за пределы одного района и распространилось по всей стране: сегодня у нас 97 филиалов и более Oqtepa Lavash работают в 11 городах Узбекистана. И несмотря на рост, мы по-прежнему верны принципам простоты, качества и близости к гостям.
            </p>

            <p>
              За 15 лет мы не только открывали новые рестораны, но и создавали инновации. В 2024 году мы провели масштабный ребрендинг, открыли кухни для гостей (да, у нас есть и экскурсии!), а 21 филиал теперь работает круглосуточно.
            </p>

            <p>
              Недавно запущенный технологичный мясной цех позволяет производить до 1300 тонн халяльного мяса в месяц. Зачем мы это сделали? Потому что каждый элемент продукта — от хрустящего лаваша до свежайших ингредиентов — должен быть безупречным.
            </p>

            <p>
              Крою того, в 2024 году мы запустили новый проект — сеть кофеен <span className="font-bold">Olkafe</span>. Здесь вас ждут бодрящий кофе, вкусные десерты и атмосфера, в которую хочется возвращаться. Удобное место для работы с ноутбуком, встреч, общения или просто отдыха.
            </p>

            <p>
              Мы не просто растём — мы эволюционируем. К 2026 году планируем увеличить количество филиалов до 136, а значит, стать еще ближе к вам. За 15 лет мы поняли главную истину: искренность, труд и внимание к гостям — вот что отличает нас от других.
            </p>

            <div className="pt-4 border-t border-[#EBEFEF]">
              <p className="font-semibold text-[18px] text-[#C11B23]">
                Добро пожаловать в Oqtepa Lavash — здесь каждый лаваш, бургер, донар и даже чашка кофе готовятся с любовью и заботой.
              </p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
