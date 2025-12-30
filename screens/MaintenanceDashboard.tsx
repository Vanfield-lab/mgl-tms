
import React from 'react';

const MaintenanceDashboard: React.FC = () => {
  return (
    <div className="p-4 lg:p-8 space-y-6 max-w-[1400px] mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-2">
          <h1 className="text-white text-3xl lg:text-4xl font-black leading-tight tracking-tight">Maintenance Dashboard</h1>
          <p className="text-[#9dabb9] text-base">Overview of fleet health and service schedules</p>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center justify-center rounded-lg h-10 px-4 border border-[#3b4754] text-white hover:bg-[#283039] text-sm font-bold tracking-[0.015em] transition-colors">
            <span className="material-symbols-outlined text-[20px] mr-2">download</span>
            Export
          </button>
          <button className="flex items-center justify-center rounded-lg h-10 px-4 bg-primary hover:bg-blue-600 text-white text-sm font-bold shadow-lg shadow-primary/40">
            <span className="material-symbols-outlined text-[20px] mr-2">add</span>
            Schedule Service
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Vehicles', val: '142', icon: 'directions_car', color: 'primary', trend: '+2 vehicles' },
          { label: 'In Service', val: '8', icon: 'garage', color: 'yellow-500', sub: 'Currently at workshop' },
          { label: 'Overdue Maintenance', val: '12', icon: 'warning', color: 'red-500', alert: true, trend: 'Requires attention' },
          { label: 'Monthly Cost', val: '$14,250', icon: 'payments', color: '#0bda5b', trend: '+5% vs last month' },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-xl p-6 bg-surface-dark border border-border-dark shadow-sm relative overflow-hidden">
            {stat.alert && <div className="absolute right-0 top-0 w-16 h-16 bg-red-500/10 rounded-bl-full -mr-2 -mt-2"></div>}
            <div className="flex justify-between items-start relative z-10">
              <p className="text-[#9dabb9] text-sm font-medium">{stat.label}</p>
              <span className="material-symbols-outlined" style={{ color: stat.color }}>{stat.icon}</span>
            </div>
            <p className="text-white text-3xl font-bold mt-1 relative z-10">{stat.val}</p>
            <p className="text-[#9dabb9] text-xs font-bold mt-2 flex items-center gap-1 relative z-10">
              <span className="material-symbols-outlined text-[16px]">trending_up</span>
              {stat.trend || stat.sub}
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2 flex flex-col gap-6">
          <div className="rounded-xl border border-border-dark bg-surface-dark p-6">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="text-white text-lg font-bold">Maintenance Costs</h3>
                <p className="text-[#9dabb9] text-sm">Last 6 Months Trend</p>
              </div>
              <div className="text-right">
                <p className="text-white text-2xl font-bold">$84,000</p>
                <p className="text-[#9dabb9] text-xs">Total Spend</p>
              </div>
            </div>
            <div className="w-full h-[200px] flex items-end justify-between gap-4 px-2">
              {[40, 65, 35, 50, 85, 25].map((h, i) => (
                <div key={i} className="flex flex-col items-center gap-2 flex-1 group cursor-pointer">
                  <div 
                    className={`w-full ${i === 4 ? 'bg-primary' : 'bg-[#283039]'} hover:brightness-125 rounded-t-sm relative transition-all duration-300`} 
                    style={{ height: `${h}%` }}
                  >
                    <div className="opacity-0 group-hover:opacity-100 absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-black text-xs font-bold px-2 py-1 rounded transition-opacity whitespace-nowrap">${h/2}k</div>
                  </div>
                  <span className="text-[#9dabb9] text-xs font-medium">Month {i+1}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border-dark bg-surface-dark flex flex-col overflow-hidden">
            <div className="p-5 border-b border-border-dark flex justify-between items-center">
              <h3 className="text-white text-lg font-bold">Upcoming Maintenance</h3>
              <div className="flex gap-2">
                <button className="p-1.5 hover:bg-[#283039] rounded text-[#9dabb9] hover:text-white"><span className="material-symbols-outlined">filter_list</span></button>
                <button className="p-1.5 hover:bg-[#283039] rounded text-[#9dabb9] hover:text-white"><span className="material-symbols-outlined">search</span></button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#111418] border-b border-border-dark text-[#9dabb9] text-xs uppercase tracking-wider">
                    <th className="p-4">Vehicle</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Last Service</th>
                    <th className="p-4">Due Date</th>
                    <th className="p-4">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-border-dark/50">
                  {[
                    { name: 'Toyota Hilux', plate: 'GN 2453-22', type: 'Oil Change', last: 'Mar 12, 2024', due: 'Jun 15, 2024', status: 'Overdue', color: 'red' },
                    { name: 'News Van 04', plate: 'GR 8810-23', type: 'Brake Inspection', last: 'Apr 05, 2024', due: 'Jun 20, 2024', status: 'Due Soon', color: 'yellow' },
                  ].map((v, i) => (
                    <tr key={i} className="hover:bg-[#283039]/50 transition-colors">
                      <td className="p-4">
                        <div className="flex items-center gap-3">
                          <div className="size-10 rounded-full bg-[#283039]"></div>
                          <div>
                            <p className="text-white font-bold">{v.name}</p>
                            <p className="text-[#9dabb9] text-xs">{v.plate}</p>
                          </div>
                        </div>
                      </td>
                      <td className="p-4 text-white">{v.type}</td>
                      <td className="p-4 text-[#9dabb9]">{v.last}</td>
                      <td className={`p-4 font-bold ${v.color === 'red' ? 'text-red-400' : 'text-white'}`}>{v.due}</td>
                      <td className="p-4">
                        <span className={`px-2 py-0.5 rounded-full text-xs bg-${v.color}-500/10 text-${v.color}-500 border border-${v.color}-500/20`}>{v.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="rounded-xl border border-border-dark bg-surface-dark p-6">
            <h3 className="text-white font-bold text-sm mb-4">June 2024</h3>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-[#9dabb9]">
              {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {Array.from({ length: 30 }, (_, i) => i + 1).map(d => (
                <div key={d} className={`p-2 rounded cursor-pointer ${d === 15 ? 'bg-red-500/20 text-red-500 font-bold border border-red-500/30' : 'text-white hover:bg-[#283039]'}`}>
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-xl border border-border-dark bg-surface-dark p-6 flex-1">
            <h3 className="text-white text-lg font-bold mb-4">Recent History</h3>
            <div className="space-y-6 relative">
              <div className="absolute left-[15px] top-2 bottom-2 w-[1px] bg-[#283039]"></div>
              {[
                { title: 'Service Completed', sub: 'Toyota Prado (GN 1211-20)', icon: 'check', color: 'emerald' },
                { title: 'Maintenance Scheduled', sub: 'Honda CRV (GR 4455-23)', icon: 'add', color: 'primary' },
              ].map((h, i) => (
                <div key={i} className="flex gap-4 relative z-10">
                  <div className={`size-8 rounded-full bg-[#101922] border-2 border-${h.color} flex items-center justify-center shrink-0`}>
                    <span className={`material-symbols-outlined text-${h.color} text-[16px]`}>{h.icon}</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-medium">{h.title}</p>
                    <p className="text-[#9dabb9] text-xs">{h.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MaintenanceDashboard;
