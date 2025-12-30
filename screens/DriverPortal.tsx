
import React from 'react';

const DriverPortal: React.FC = () => {
  return (
    <div className="px-4 md:px-10 lg:px-20 py-8 space-y-8 max-w-[1200px] mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight">Dashboard</h1>
          <p className="text-[#9dabb9] text-sm font-normal pt-1">Good afternoon, Kwame. <span className="text-green-500 font-bold uppercase">You are currently on duty.</span></p>
        </div>
        <div className="flex gap-3">
          <button className="h-10 px-4 bg-red-500/10 text-red-500 hover:bg-red-500/20 rounded-lg text-sm font-bold border border-red-500/20">Go Off Duty</button>
          <button className="h-10 px-4 bg-primary text-white hover:bg-blue-600 rounded-lg text-sm font-bold shadow-lg shadow-primary/20">Log Incident</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <h3 className="text-white text-lg font-bold">Current Assignment</h3>
          <div className="bg-[#1c2127] rounded-xl shadow-sm border border-gray-800 overflow-hidden relative">
            <div className="absolute top-4 right-4 bg-green-500/20 text-green-500 px-3 py-1 rounded-full text-xs font-bold border border-green-500/20 flex items-center gap-1">
              <span className="material-symbols-outlined text-sm">circle</span> EN ROUTE
            </div>
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 h-48 md:h-auto bg-gray-800 relative min-h-[250px]">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-80" 
                  style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuTzjw0Gf3NltZ7jwYyNHSJkMHylEIDwz8Mdho6MdgEqAEgjAq8zu8dVipXUSYhU9Fl1BntI3A1ffyYUTpWyKYUpauuwEamnXAtpt-bG7feb5NHyK0NXFPwIzhK-FVH5eINPHOBz71BzrMEZsd3eITSGKiqmy-pZ7Y4Y1TBgC6GuJfkeGjvhrMlbONmxkUAqVoRGGIdYXJiqiSosPrU30amHU9uMwiduKoJ74Nf3arkQbR3K70fSwb565ArHG_ao9UF6_1fYuAl-3C')` }}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
                  <button className="bg-black/80 text-white px-4 py-2 rounded-lg font-bold text-sm shadow-xl flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">map</span> Open Navigation
                  </button>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col justify-between gap-6">
                <div>
                  <h4 className="text-white text-2xl font-bold mb-1">Trip to Kumasi Bureau</h4>
                  <p className="text-[#9dabb9] text-sm">Ref: TRIP-2023-8942</p>
                </div>
                <div className="relative pl-6 space-y-6">
                  <div className="absolute left-[7px] top-2 bottom-6 w-[2px] bg-gray-700"></div>
                  <div className="flex gap-4 items-start relative">
                    <div className="size-4 rounded-full border-4 border-gray-600 bg-[#1c2127] absolute -left-8 top-1"></div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Pickup • 08:30 AM</p>
                      <p className="text-white font-medium">Studio B, Accra HQ</p>
                    </div>
                  </div>
                  <div className="flex gap-4 items-start relative">
                    <div className="size-4 rounded-full border-4 border-primary bg-[#1c2127] absolute -left-8 top-1 animate-pulse"></div>
                    <div>
                      <p className="text-xs text-primary uppercase font-bold tracking-wider">Drop-off • ETA 12:45 PM</p>
                      <p className="text-white font-medium">Kumasi Bureau Office</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                   <div className="flex gap-4">
                     <span className="flex items-center gap-2 text-[#9dabb9] text-sm"><span className="material-symbols-outlined">group</span> 4 Pax</span>
                     <span className="flex items-center gap-2 text-[#9dabb9] text-sm"><span className="material-symbols-outlined">schedule</span> 4h 15m</span>
                   </div>
                   <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm transition-all">Complete Trip</button>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Fuel Level', val: '75%', icon: 'local_gas_station', color: 'green-500' },
              { label: 'Vehicle Health', val: 'Good', icon: 'check_circle', color: 'green-500' },
              { label: 'Next Service', val: '12 Days', icon: 'build', color: 'orange-500' },
              { label: 'Driver Score', val: '4.9', icon: 'star', color: 'yellow-500' },
            ].map(stat => (
              <div key={stat.label} className="bg-[#1c2127] p-4 rounded-xl border border-gray-800 shadow-sm">
                <div className="text-[#9dabb9] text-xs font-bold uppercase tracking-wider mb-1">{stat.label}</div>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-white">{stat.val}</span>
                  <span className={`material-symbols-outlined text-${stat.color} mb-1`}>{stat.icon}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Notifications</h3>
            <div className="bg-amber-500/10 border border-amber-500/20 p-4 rounded-xl flex gap-3 items-start">
              <span className="material-symbols-outlined text-amber-500 shrink-0">warning</span>
              <div>
                <p className="text-white text-sm font-bold mb-1">Traffic Alert: N1 Highway</p>
                <p className="text-[#9dabb9] text-xs">Major congestion reported near Lapaz. Use Achimota bypass.</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-white text-lg font-bold">Upcoming Schedule</h3>
            <div className="bg-[#1c2127] rounded-xl border border-gray-800 divide-y divide-gray-800 overflow-hidden">
              {[
                { date: 'Tomorrow', time: '08:00 AM', title: 'Staff Bus Route A', loc: 'Circle Interchange' },
                { date: 'Tomorrow', time: '02:00 PM', title: 'Equipment Transfer', loc: 'Warehouse 3' },
              ].map((sch, i) => (
                <div key={i} className="p-4 hover:bg-white/5 transition-colors cursor-pointer group">
                  <div className="flex justify-between items-start mb-2">
                    <span className="text-xs font-bold text-[#9dabb9] bg-[#283039] px-2 py-1 rounded">{sch.date}</span>
                    <span className="text-xs font-bold text-white">{sch.time}</span>
                  </div>
                  <p className="text-white font-bold group-hover:text-primary">{sch.title}</p>
                  <p className="text-[#9dabb9] text-xs mt-1 flex items-center gap-1">
                    <span className="material-symbols-outlined text-[14px]">location_on</span> {sch.loc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DriverPortal;
