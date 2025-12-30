
import React from 'react';

const StaffDashboard: React.FC = () => {
  return (
    <div className="p-4 md:p-8 space-y-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-white text-3xl md:text-4xl font-black tracking-tight">Good Morning, Kwame</h1>
          <p className="text-[#9dabb9] text-base">Here is an overview of your transport activities today.</p>
        </div>
        <div className="text-[#9dabb9] text-sm font-medium flex items-center gap-2 bg-[#283039] px-4 py-2 rounded-full border border-white/5">
          <span className="material-symbols-outlined text-primary text-lg">calendar_today</span>
          <span>Wednesday, Oct 25, 2023</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: 'Active Requests', val: '3', sub: '2 scheduled for today', icon: 'directions_car', color: 'primary' },
          { label: 'Pending Approval', val: '1', sub: 'Waiting for manager', icon: 'hourglass_empty', color: 'yellow-500' },
          { label: 'Completed (Oct)', val: '12', sub: 'Total 340km traveled', icon: 'check_circle', color: 'green-500' },
        ].map(stat => (
          <div key={stat.label} className="flex flex-col gap-1 rounded-xl p-6 bg-[#283039] border border-white/5 shadow-sm hover:border-primary/30 transition-all group cursor-pointer">
            <div className="flex justify-between items-start">
              <p className="text-[#9dabb9] text-sm font-medium uppercase tracking-wider">{stat.label}</p>
              <div className={`bg-${stat.color}/20 p-2 rounded-lg group-hover:bg-${stat.color} transition-colors`}>
                <span className={`material-symbols-outlined text-${stat.color} group-hover:text-white text-xl`}>{stat.icon}</span>
              </div>
            </div>
            <p className="text-white text-3xl font-bold mt-2">{stat.val}</p>
            <p className="text-[#9dabb9] text-xs mt-1">{stat.sub}</p>
          </div>
        ))}
      </div>

      <div className="bg-gradient-to-r from-[#283039] to-[#1e252e] rounded-xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg border border-white/5">
        <div className="flex flex-col gap-2 text-center md:text-left">
          <h2 className="text-white text-xl font-bold">Quick Actions</h2>
          <p className="text-[#9dabb9] text-sm">Frequently used transport actions to save you time.</p>
        </div>
        <div className="flex gap-4 w-full md:w-auto">
          <button className="flex-1 md:flex-none h-12 px-6 bg-primary hover:bg-blue-600 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined">add_circle</span>
            <span className="whitespace-nowrap">Book a Ride</span>
          </button>
          <button className="flex-1 md:flex-none h-12 px-6 bg-[#374151] hover:bg-[#4b5563] text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors">
            <span className="material-symbols-outlined">report_problem</span>
            <span className="whitespace-nowrap">Report Issue</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-8">
        <div className="lg:col-span-2 flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h3 className="text-white text-lg font-bold">Upcoming Trips</h3>
            <button className="text-primary text-sm font-bold hover:underline">View All</button>
          </div>
          <div className="bg-[#283039] rounded-xl border border-white/5 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-[#1e252e] border-b border-white/5 text-[#9dabb9] text-xs uppercase tracking-wider">
                    <th className="p-4 font-semibold">Date & Time</th>
                    <th className="p-4 font-semibold">Route</th>
                    <th className="p-4 font-semibold">Driver</th>
                    <th className="p-4 font-semibold text-right">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {[
                    { date: 'Today', time: '10:00 AM', from: 'Headquarters', to: 'Kotoka Int. Airport', driver: 'John Doe', status: 'Confirmed', color: 'green' },
                    { date: 'Tomorrow', time: '02:00 PM', from: 'Branch Office', to: 'Tema Site B', driver: '--', status: 'Pending', color: 'yellow' },
                  ].map((trip, i) => (
                    <tr key={i} className="hover:bg-[#323b46] transition-colors group cursor-pointer">
                      <td className="p-4">
                        <div className="flex flex-col">
                          <span className="text-white font-bold text-sm">{trip.date}</span>
                          <span className="text-[#9dabb9] text-xs">{trip.time}</span>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex items-center gap-2 text-xs text-[#9dabb9]">
                            <div className="size-2 rounded-full bg-primary"></div>
                            <span>{trip.from}</span>
                          </div>
                          <div className="h-3 border-l border-dashed border-[#9dabb9]/30 ml-1"></div>
                          <div className="flex items-center gap-2 text-xs text-white font-medium">
                            <div className="size-2 rounded-full border border-primary"></div>
                            <span>{trip.to}</span>
                          </div>
                        </div>
                      </td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="bg-slate-600 rounded-full size-6 flex items-center justify-center text-[10px] text-white font-bold">JD</div>
                          <span className="text-white text-sm">{trip.driver}</span>
                        </div>
                      </td>
                      <td className="p-4 text-right">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-${trip.color}-500/10 text-${trip.color}-500 border border-${trip.color}-500/20`}>
                          {trip.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-8">
          <div className="bg-[#283039] rounded-xl p-6 border border-white/5">
            <h3 className="text-white font-bold text-sm mb-4">October 2023</h3>
            <div className="grid grid-cols-7 gap-1 text-center text-xs mb-2 text-[#9dabb9]">
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => <div key={d}>{d}</div>)}
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-sm">
              {Array.from({ length: 31 }, (_, i) => i + 1).map(d => (
                <div 
                  key={d} 
                  className={`p-2 rounded-lg cursor-pointer ${d === 25 ? 'bg-primary text-white font-bold shadow-lg' : 'text-white hover:bg-white/5'}`}
                >
                  {d}
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-white text-lg font-bold">Recent Activity</h3>
            <div className="space-y-4">
              {[
                { label: 'Request #304 Approved', sub: 'Trip to Airport confirmed.', time: '2h ago', icon: 'check', color: 'green' },
                { label: 'Driver Assigned', sub: 'Sarah K. assigned to Trip #305.', time: '5h ago', icon: 'person_add', color: 'blue' },
              ].map((act, i) => (
                <div key={i} className="flex gap-3 items-start">
                  <div className={`bg-${act.color}-500/10 rounded-full p-2 shrink-0`}>
                    <span className={`material-symbols-outlined text-${act.color}-500 text-sm`}>{act.icon}</span>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-white text-sm font-medium">{act.label}</p>
                    <p className="text-[#9dabb9] text-xs">{act.sub}</p>
                    <p className="text-[#9dabb9]/60 text-[10px] mt-1">{act.time}</p>
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

export default StaffDashboard;
