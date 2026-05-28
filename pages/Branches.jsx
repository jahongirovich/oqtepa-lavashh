import React from 'react';

const branches = [
  {
    id: 1,
    name: 'Riviera',
    openUntil: '22:00',
    workingHours: '10:00 - 22:00',
    image: null
  },
  {
    id: 2,
    name: 'Bahodir',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  },
  {
    id: 3,
    name: 'Okhunboboyev',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  },
  {
    id: 4,
    name: 'Nukus 2',
    openUntil: '02:45',
    workingHours: '10:00 - 02:45',
    image: null
  },
  {
    id: 5,
    name: 'Qo\'qon 1',
    openUntil: '02:45',
    workingHours: '10:00 - 02:45',
    image: null
  },
  {
    id: 6,
    name: 'BO\'KA',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  },
  {
    id: 7,
    name: 'Qushbegi',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  },
  {
    id: 8,
    name: 'Chilonzor-19',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  },
  {
    id: 9,
    name: 'Gulzor',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  },
  {
    id: 10,
    name: 'Qoraqamish',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  },
  {
    id: 11,
    name: 'Minor',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  },
  {
    id: 12,
    name: 'Beruniy 2',
    openUntil: '04:45',
    workingHours: '07:00 - 04:45',
    image: null
  }
];

const Branches = () => {
  const [viewMode, setViewMode] = React.useState('list'); // 'list' or 'map'

  return (
    <div className="w-full font-sans select-none">
      {/* Sarlavha va View Mode Tugmalari */}
      <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <h2 className="text-[#1A1A1A] text-[32px] font-bold">Филиалы</h2>
        <div className="flex gap-3">
          <button
            onClick={() => setViewMode('list')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              viewMode === 'list'
                ? 'bg-[#C11B23] text-white'
                : 'bg-gray-100 text-[#1A1A1A] hover:bg-gray-200'
            }`}
          >
            Список
          </button>
          <button
            onClick={() => setViewMode('map')}
            className={`px-6 py-2.5 rounded-lg font-medium transition-all ${
              viewMode === 'map'
                ? 'bg-[#C11B23] text-white'
                : 'bg-gray-100 text-[#1A1A1A] hover:bg-gray-200'
            }`}
          >
            Карта
          </button>
        </div>
      </div>

      {/* Список режими */}
      {viewMode === 'list' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {branches.map((branch) => (
            <div
              key={branch.id}
              className="bg-white rounded-2xl p-6 border border-[#EBEFEF] shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Logo placeholder */}
              <div className="w-full h-[120px] flex items-center justify-center mb-4 bg-gray-50 rounded-lg">
                <h3 className="text-[#C11B23] font-black text-[18px] text-center">
                  Oqtepa<br />
                  <span className="text-[14px]">Lavash</span>
                </h3>
              </div>

              {/* Branch Info */}
              <div className="space-y-3">
                <h4 className="text-[#1A1A1A] font-bold text-[18px]">
                  {branch.name}
                </h4>

                <div className="space-y-1">
                  <p className="text-[#00B344] font-medium text-[14px]">
                    Открыто до {branch.openUntil}
                  </p>
                  <p className="text-[#4A5568] text-[14px]">
                    Время работы: {branch.workingHours}
                  </p>
                </div>

                {/* Show on Map Button */}
                <button className="w-full mt-4 px-4 py-2 text-[#C11B23] font-medium text-[14px] border border-[#C11B23] rounded-lg hover:bg-[#F9EAEA] transition-colors">
                  Показать на карте
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        // Карта режими
        <div className="bg-white rounded-2xl overflow-hidden border border-[#EBEFEF] shadow-sm">
          <div className="w-full h-[600px] bg-gray-100 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[#4A5568] text-[18px] mb-2">Карта будет доступна вскоре</p>
              <p className="text-[#999] text-[14px]">В разработке...</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Branches;
