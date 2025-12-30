
import React from 'react';

const DriverSchedule: React.FC = () => {
  const drivers = [
    { name: 'Kwame Mensah', vehicle: 'Van 4', avatar: 'https://picsum.photos/seed/d1/100' },
    { name: 'Sarah Doe', vehicle: 'Truck 12', avatar: 'https://picsum.photos/seed/d2/100' },
    { name: 'John Smith', vehicle: 'Van 8', avatar: 'https://picsum.photos/seed/d3/100' },
    { name: 'Eric Osei', vehicle: 'Van 1', avatar: 'https://picsum.photos/seed/d4/100' },
  ];

  return (
    <div className="flex flex-col h-full overflow-hidden">
      <div className="p-6 pb-2 space-y-6">
        <div className="flex flex-wrap gap-4">
          {[
            { label: 'Total Drivers Active', val: '42', trend: '+5%', color: 'primary' },
            { label: 'Pending Assignments', val: '15', sub: 'Requires attention', color: 'orange' },
            { label: 'Fleet Utilization', val: '88%', trend: '+1.5%', color: 'purple' },
          ].map((stat, i) => (
            <div key={i} className="flex-1 min-w-[158px] flex flex-col gap-1 rounded-xl p-4 bg-surface-dark border border-border-dark shadow-sm">
               <div className="flex justify-between items-start">
                 <p className="text-[#9dabb9] text-sm font-medium">{stat.label}</p>
                 <div className={`bg-${stat.color}-500/10 p-1.5 rounded`}><span className={`material-symbols-outlined text-${stat.color}-500 text-[18px]`}>group</span></div>
               </div>
               <div className="flex items-baseline gap-2 mt-2">
                 <p className="text-white text-2xl font-bold">{stat.val}</p>
                 {stat.trend && <p className="text-green-500 text-xs font-bold">{stat.trend}</p>}
                 {stat.sub && <p className="text-[#9dabb9] text-xs">{stat.sub}</p>}
               </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-dark border border-border-dark text-white text-sm font-medium">
              <span className="material-symbols-outlined text-[20px]">filter_list</span> Filter
            </button>
            <div className="h-8 w-px bg-border-dark"></div>
            <span className="text-white font-bold text-lg">October 24, 2023</span>
            <div className="flex gap-1">
              <button className="size-8 flex items-center justify-center rounded-full text-[#9dabb9] hover:text-white"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="size-8 flex items-center justify-center rounded-full text-[#9dabb9] hover:text-white"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>
          <div className="flex h-9 items-center rounded-lg bg-surface-dark p-1 border border-border-dark">
            <button className="px-4 py-1 text-sm font-medium bg-[#3b4754] text-white rounded">Day</button>
            <button className="px-4 py-1 text-sm font-medium text-[#9dabb9]">Week</button>
            <button className="px-4 py-1 text-sm font-medium text-[#9dabb9]">Month</button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-hidden m-6 rounded-xl border border-border-dark bg-[#151a21] flex flex-col shadow-2xl">
        <div className="flex border-b border-border-dark bg-[#1c232d]">
          <div className="w-64 p-4 border-r border-border-dark text-xs font-bold text-[#9dabb9] uppercase tracking-wider">Resource</div>
          <div className="flex-1 flex overflow-hidden">
            {['08:00','09:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'].map(t => (
              <div key={t} className="flex-1 min-w-[100px] h-12 border-r border-border-dark/50 flex items-center justify-center text-[#9dabb9] text-xs font-medium">{t}</div>
            ))}
          </div>
        </div>
        <div className="flex-1 overflow-y-auto relative">
          <div className="absolute top-0 bottom-0 left-[34%] w-px bg-red-500 z-10">
            <div className="size-2 bg-red-500 rounded-full -ml-[3.5px] -mt-1"></div>
          </div>
          {drivers.map((d, i) => (
            <div key={i} className="flex border-b border-border-dark group hover:bg-surface-dark/30 relative">
              <div className="w-64 p-4 border-r border-border-dark bg-[#1c232d] sticky left-0 z-10 flex items-center gap-3">
                <div 
                  className="size-8 rounded-full bg-cover bg-center shrink-0" 
                  style={{ backgroundImage: `url(${d.avatar})` }}
                />
                <div className="overflow-hidden">
                  <p className="text-sm font-bold text-white truncate">{d.name}</p>
                  <p className="text-xs text-[#9dabb9] truncate">{d.vehicle}</p>
                </div>
              </div>
              <div className="flex-1 relative min-w-[1100px] h-20">
                {i === 0 && (
                  <div className="absolute top-2 bottom-2 left-[9%] w-[27%] bg-primary rounded px-3 py-2 border border-white/10 shadow-lg">
                    <p className="text-xs font-bold text-white truncate">Morning Route</p>
                    <p className="text-[10px] text-white/70 mt-1">Accra Central • 14 stops</p>
                  </div>
                )}
                {i === 1 && (
                  <div className="absolute top-2 bottom-2 left-[45%] w-[36%] bg-[#283039] rounded px-3 py-2 border-l-4 border-l-orange-500 border border-white/10">
                    <p className="text-xs font-bold text-white truncate">Freight Delivery</p>
                    <p className="text-[10px] text-[#9dabb9] mt-1">Tema Port • Pending</p>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DriverSchedule;
