
import React, { useState } from 'react';

const DriverDirectory: React.FC = () => {
  const [selectedDriver, setSelectedDriver] = useState<number | null>(0);
  
  const drivers = [
    { id: 'DRV-001', name: 'John Doe', plate: 'GH-2394', status: 'Active Duty', score: '4.8', phone: '+233 54 123 4567' },
    { id: 'DRV-042', name: 'Sarah Smith', plate: 'GH-8812', status: 'Off Duty', score: '5.0', phone: '+233 54 123 9988' },
    { id: 'DRV-103', name: 'Michael Chen', plate: 'GH-1093', status: 'On Leave', score: '4.2', phone: '+233 54 123 7744' },
    { id: 'DRV-088', name: 'Emily Davis', plate: 'GH-4421', status: 'Active Duty', score: '4.9', phone: '+233 54 123 5511' },
  ];

  return (
    <div className="flex h-full overflow-hidden relative">
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="p-6 space-y-6 bg-white dark:bg-background-dark/50 border-b border-border-dark">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-2xl font-bold text-white">Driver Directory</h1>
              <p className="text-[#9dabb9] text-sm">Manage driver profiles, licenses, and performance.</p>
            </div>
            <button className="bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-lg font-bold text-sm shadow-lg shadow-primary/20 flex items-center gap-2">
              <span className="material-symbols-outlined text-[20px]">add</span> Add Driver
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { label: 'Total Drivers', val: '45', trend: '+2' },
              { label: 'Active Duty', val: '32', dot: 'emerald' },
              { label: 'On Leave', val: '3', dot: 'amber' },
              { label: 'Lic. Expiring', val: '5', trend: 'Action needed', color: 'amber' },
            ].map((st, i) => (
              <div key={i} className="p-4 rounded-xl border border-border-dark bg-[#1a232d]">
                <p className="text-[#9dabb9] text-xs font-medium uppercase tracking-wider mb-1">{st.label}</p>
                <div className="flex items-end justify-between">
                  <p className="text-2xl font-bold text-white">{st.val}</p>
                  {st.trend && <span className={`text-${st.color || 'emerald'}-500 text-xs bg-${st.color || 'emerald'}-500/10 px-1.5 py-0.5 rounded`}>{st.trend}</span>}
                  {st.dot && <div className={`size-2 rounded-full bg-${st.dot}-500 mb-2`}></div>}
                </div>
              </div>
            ))}
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6">
          <div className="bg-[#1a232d] rounded-xl border border-border-dark overflow-hidden shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-[#111418]/50 text-[#9dabb9] text-xs uppercase tracking-wider">
                <tr>
                  <th className="p-4 w-12"><input type="checkbox" className="rounded bg-transparent border-gray-600" /></th>
                  <th className="p-4">Driver</th>
                  <th className="p-4">License ID</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Performance</th>
                  <th className="p-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-dark">
                {drivers.map((d, i) => (
                  <tr 
                    key={i} 
                    onClick={() => setSelectedDriver(i)}
                    className={`cursor-pointer transition-colors ${selectedDriver === i ? 'bg-primary/10' : 'hover:bg-white/5'}`}
                  >
                    <td className="p-4"><input type="checkbox" checked={selectedDriver === i} className="rounded bg-transparent border-gray-600 text-primary" onChange={() => {}} /></td>
                    <td className="p-4">
                      <div className="flex items-center gap-3">
                        <div className="size-10 rounded-full bg-slate-600 border border-border-dark"></div>
                        <div>
                          <p className="text-white font-bold">{d.name}</p>
                          <p className="text-[#9dabb9] text-xs">ID: {d.id}</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4 text-white text-sm">
                      {d.plate}
                      <p className="text-xs text-amber-500 mt-1">Expires Dec 2024</p>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${d.status === 'Active Duty' ? 'bg-emerald-500/10 text-emerald-500 border border-emerald-500/20' : 'bg-slate-700 text-slate-300'}`}>
                        {d.status}
                      </span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-bold text-white">{d.score}</span>
                        <div className="flex text-amber-400"><span className="material-symbols-outlined text-[16px] fill">star</span></div>
                      </div>
                    </td>
                    <td className="p-4 text-right">
                      <button className="text-[#9dabb9] hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {selectedDriver !== null && (
        <aside className="w-[380px] bg-surface-dark border-l border-border-dark flex-shrink-0 flex flex-col hidden lg:flex shadow-2xl z-20">
          <div className="p-6 border-b border-border-dark flex flex-col items-center relative">
            <button onClick={() => setSelectedDriver(null)} className="absolute top-4 right-4 text-slate-400 hover:text-white"><span className="material-symbols-outlined">close</span></button>
            <div className="size-24 rounded-full p-1 bg-gradient-to-tr from-primary to-purple-500 mb-4">
              <div className="size-full rounded-full bg-slate-600 border-4 border-surface-dark"></div>
            </div>
            <h2 className="text-xl font-bold text-white">{drivers[selectedDriver].name}</h2>
            <p className="text-sm text-[#9dabb9] mb-4">Senior Logistics Driver</p>
            <div className="flex gap-2 w-full">
              <button className="flex-1 bg-primary hover:bg-blue-600 text-white py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined text-sm">call</span> Call</button>
              <button className="flex-1 bg-[#283039] hover:bg-[#323b47] text-white py-2 rounded-lg text-sm font-bold transition-all flex items-center justify-center gap-2"><span className="material-symbols-outlined text-sm">mail</span> Email</button>
            </div>
          </div>
          <div className="flex-1 overflow-y-auto p-6 space-y-6">
            <div className="bg-[#111418]/50 rounded-lg p-4 border border-border-dark">
              <div className="flex justify-between items-center mb-2">
                <span className="text-xs font-semibold text-[#9dabb9] uppercase tracking-wider">Current Status</span>
                <span className="px-2 py-0.5 rounded text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">Active</span>
              </div>
              <p className="text-sm text-white">Route 44 (Accra - Kumasi)</p>
              <div className="mt-3 w-full bg-slate-800 rounded-full h-1.5 overflow-hidden"><div className="bg-emerald-500 h-1.5 rounded-full" style={{ width: '75%' }}></div></div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">person</span> Details</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between border-b border-border-dark pb-2"><span className="text-[#9dabb9]">ID</span><span className="text-white">{drivers[selectedDriver].id}</span></div>
                <div className="flex justify-between border-b border-border-dark pb-2"><span className="text-[#9dabb9]">Phone</span><span className="text-white">{drivers[selectedDriver].phone}</span></div>
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-white flex items-center gap-2"><span className="material-symbols-outlined text-primary text-sm">badge</span> License</h3>
              <div className="bg-[#111418]/50 p-3 rounded-lg border border-border-dark flex items-center gap-3">
                 <span className="material-symbols-outlined text-[#9dabb9]">description</span>
                 <div className="flex-1 overflow-hidden"><p className="text-sm text-white truncate">Commercial Driver License</p><p className="text-xs text-amber-500">Exp. 25 days</p></div>
              </div>
            </div>
          </div>
          <div className="p-4 border-t border-border-dark flex gap-3">
             <button className="flex-1 py-2 rounded-lg border border-slate-700 text-slate-400 text-sm font-bold hover:bg-slate-800 transition-colors">Archive</button>
             <button className="flex-1 py-2 rounded-lg bg-primary/20 text-primary text-sm font-bold hover:bg-primary/30 transition-colors">Edit Profile</button>
          </div>
        </aside>
      )}
    </div>
  );
};

export default DriverDirectory;
