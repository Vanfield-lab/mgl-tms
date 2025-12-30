
import React from 'react';

const FleetManagement: React.FC = () => {
  const fleet = [
    { name: 'Toyota Hilux', sub: '2023 • Pickup', plate: 'GR-2023-24', status: 'Available', fuel: 75, color: 'emerald' },
    { name: 'Ford Ranger', sub: '2022 • Pickup', plate: 'GT-4501-22', status: 'In Use', fuel: 45, color: 'primary' },
    { name: 'Toyota HiAce', sub: '2021 • Van', plate: 'GR-9988-21', status: 'Maintenance', fuel: 12, color: 'orange' },
  ];

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-[1400px] mx-auto w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Total Vehicles', val: '45', trend: '+2 new', icon: 'local_shipping', color: 'emerald' },
          { label: 'Active Trips', val: '28', trend: '62% of fleet', icon: 'near_me', color: 'primary' },
          { label: 'In Maintenance', val: '3', trend: '-1 from last week', icon: 'car_repair', color: 'orange' },
          { label: 'Fuel Efficiency', val: '12 km/L', trend: '+0.5%', icon: 'local_gas_station', color: 'emerald' },
        ].map((st, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-xl p-6 bg-surface-dark border border-border-dark shadow-sm">
            <div className="flex justify-between items-start">
              <p className="text-[#9dabb9] text-sm font-medium">{st.label}</p>
              <span className={`material-symbols-outlined text-[#9dabb9]`}>{st.icon}</span>
            </div>
            <div className="flex items-end gap-3 mt-1">
              <p className="text-white text-3xl font-bold">{st.val}</p>
              <p className={`text-${st.color}-500 text-sm font-medium mb-1`}>{st.trend}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-surface-dark border border-border-dark rounded-xl overflow-hidden shadow-sm">
        <div className="p-6 border-b border-border-dark flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex flex-col">
            <h3 className="text-white text-lg font-bold">Fleet Inventory</h3>
            <p className="text-[#9dabb9] text-sm">Manage vehicles, assignments, and status.</p>
          </div>
          <button className="flex items-center gap-2 bg-primary hover:bg-blue-600 text-white px-4 py-2.5 rounded-md font-bold text-sm shadow-lg shadow-primary/25">
            <span className="material-symbols-outlined text-[20px]">add</span> Add Vehicle
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-[#111418]/50 text-[#9dabb9] text-xs uppercase tracking-wider">
              <tr>
                <th className="p-4 pl-6">Vehicle</th>
                <th className="p-4">License Plate</th>
                <th className="p-4">Status</th>
                <th className="p-4">Fuel Level</th>
                <th className="p-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
              {fleet.map((v, i) => (
                <tr key={i} className="hover:bg-white/5 transition-colors">
                  <td className="p-4 pl-6">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg bg-[#283039] border border-border-dark"></div>
                      <div>
                        <span className="text-white font-medium text-sm block">{v.name}</span>
                        <span className="text-[#9dabb9] text-xs">{v.sub}</span>
                      </div>
                    </div>
                  </td>
                  <td className="p-4"><span className="px-2.5 py-1 rounded-md bg-[#283039] text-white border border-border-dark font-mono text-xs">{v.plate}</span></td>
                  <td className="p-4">
                    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-${v.color}-500/10 text-${v.color}-500 border border-${v.color}-500/20`}>
                      <span className={`size-1.5 rounded-full bg-${v.color}-500 ${v.status === 'Available' ? 'animate-pulse' : ''}`}></span>
                      {v.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="w-full max-w-[140px] space-y-1">
                      <span className="text-[#9dabb9] text-xs">{v.fuel}%</span>
                      <div className="h-1.5 w-full bg-[#111418] rounded-full overflow-hidden">
                        <div className={`h-full bg-${v.fuel < 20 ? 'red' : v.fuel < 50 ? 'primary' : 'emerald'}-500`} style={{ width: `${v.fuel}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="p-4 pr-6 text-right">
                    <button className="p-2 text-[#9dabb9] hover:text-white transition-colors"><span className="material-symbols-outlined">more_vert</span></button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default FleetManagement;
