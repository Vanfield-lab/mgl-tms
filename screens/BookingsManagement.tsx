
import React, { useState } from 'react';
import Modal from '../components/Modal';

const BookingsManagement: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState([
    { id: '#TR-4022', req: 'Nana Kwame', dept: 'Adabraka Studio', dest: 'East Legon, Accra', time: 'Today, 14:00', status: 'Pending', color: 'yellow' },
    { id: '#TR-4021', req: 'Joy News Team', dept: 'Parliament House', dest: 'State House', time: 'Today, 09:00', status: 'In Progress', color: 'blue', driver: 'K. Mensah' },
    { id: '#TR-4020', req: 'HR Dept', dept: 'Head Office', dest: 'Kotoka Int. Airport', time: 'Yesterday, 16:30', status: 'Completed', color: 'green', driver: 'J. Doe' },
  ]);

  const handleAddBooking = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const newBooking = {
      id: `#TR-${Math.floor(4023 + Math.random() * 1000)}`,
      req: formData.get('requester') as string,
      dept: formData.get('department') as string,
      dest: formData.get('destination') as string,
      time: 'Just Now',
      status: 'Pending' as const,
      color: 'yellow' as const,
    };
    setBookings([newBooking, ...bookings]);
    setIsModalOpen(false);
  };

  return (
    <div className="p-6 lg:p-8 space-y-8 max-w-[1600px] mx-auto w-full">
      <h1 className="text-white text-2xl lg:text-3xl font-bold">Bookings Management</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {[
          { label: 'Pending Requests', val: '12', trend: '+2 new', icon: 'pending_actions', color: 'yellow-500' },
          { label: 'Active Trips', val: '5', icon: 'directions_bus', color: 'primary' },
          { label: 'Available Drivers', val: '8', trend: '+1 online', icon: 'person_pin_circle', color: 'white' },
          { label: 'Total Completed', val: '34', trend: '+12% today', icon: 'check_circle', color: '#0bda5b' },
        ].map((st, i) => (
          <div key={i} className="flex flex-col gap-2 rounded-xl p-6 border border-border-dark bg-[#1a232e]">
            <div className="flex items-center justify-between">
              <p className="text-[#9dabb9] text-sm font-medium">{st.label}</p>
              <span className="material-symbols-outlined" style={{ color: st.color }}>{st.icon}</span>
            </div>
            <div className="flex items-baseline gap-2">
              <p className="text-white tracking-tight text-3xl font-bold">{st.val}</p>
              {st.trend && <p className="text-xs font-medium" style={{ color: st.color }}>{st.trend}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="relative flex w-full max-w-md items-center">
          <span className="material-symbols-outlined absolute left-3 text-[#9dabb9]">search</span>
          <input className="w-full rounded-lg bg-[#283039] border-none py-3 pl-10 pr-4 text-white placeholder-[#9dabb9] focus:ring-2 focus:ring-primary focus:outline-none" placeholder="Search by ID, Name or Destination..." />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex gap-2">
            {['Status: All', 'Date: Today', 'Dept: All'].map(btn => (
              <button key={btn} className="flex h-10 items-center gap-2 rounded-lg bg-[#283039] px-4 text-sm font-medium text-white hover:bg-[#334155] border border-transparent hover:border-[#3b4754] transition-all">
                {btn} <span className="material-symbols-outlined text-base">expand_more</span>
              </button>
            ))}
          </div>
          <div className="h-8 w-px bg-[#3b4754] hidden lg:block mx-1"></div>
          <button 
            onClick={() => setIsModalOpen(true)}
            className="flex h-10 items-center gap-2 rounded-lg bg-primary px-5 text-sm font-bold text-white hover:bg-blue-600 shadow-lg shadow-primary/20"
          >
            <span className="material-symbols-outlined text-lg">add</span> New Booking
          </button>
        </div>
      </div>

      <div className="flex flex-col rounded-xl border border-border-dark bg-[#1a232e] overflow-hidden shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#1f2937] text-[#9dabb9] text-xs uppercase tracking-wider">
                <th className="px-6 py-4">Booking ID</th>
                <th className="px-6 py-4">Requester</th>
                <th className="px-6 py-4">Destination</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Assignment</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-dark">
              {bookings.map((b, i) => (
                <tr key={i} className="hover:bg-[#283039] transition-colors cursor-pointer group">
                  <td className="px-6 py-4 text-sm font-medium text-white">{b.id}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">{b.req}</span>
                      <span className="text-xs text-[#9dabb9]">{b.dept}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#d1d5db]">{b.dest}</td>
                  <td className="px-6 py-4 text-sm text-[#d1d5db]">{b.time}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center rounded-full bg-${b.color}-500/10 px-2.5 py-0.5 text-xs font-medium text-${b.color === 'yellow' ? 'yellow-500' : b.color === 'blue' ? 'blue-400' : 'green-400'} border border-${b.color}-500/20`}>
                      {b.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-[#9dabb9]">
                    {(b as any).driver ? (
                      <div className="flex items-center gap-2">
                        <div className="size-6 rounded-full bg-slate-600"></div>
                        <span className="text-xs text-white">{(b as any).driver}</span>
                      </div>
                    ) : 'Unassigned'}
                  </td>
                  <td className="px-6 py-4 text-right">
                    {b.status === 'Pending' ? (
                      <button className="rounded-md bg-primary/20 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary hover:text-white transition-all">Assign</button>
                    ) : (
                      <button className="p-1 text-[#9dabb9] hover:text-white"><span className="material-symbols-outlined">more_vert</span></button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="p-4 border-t border-border-dark flex items-center justify-between">
          <p className="text-xs text-[#9dabb9]">Showing 1-{bookings.length} of 128 results</p>
          <div className="flex gap-2">
            <button className="p-1 rounded bg-[#283039] text-[#9dabb9] hover:text-white"><span className="material-symbols-outlined">chevron_left</span></button>
            <button className="p-1 rounded bg-[#283039] text-[#9dabb9] hover:text-white"><span className="material-symbols-outlined">chevron_right</span></button>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        title="Create New Trip Request"
      >
        <form onSubmit={handleAddBooking} className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-medium text-[#9dabb9] mb-1">Requester Name</label>
              <input 
                name="requester" 
                required 
                className="w-full bg-[#283039] border border-border-dark rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:outline-none" 
                placeholder="e.g. Kwame Mensah"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#9dabb9] mb-1">Department</label>
              <input 
                name="department" 
                required 
                className="w-full bg-[#283039] border border-border-dark rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:outline-none" 
                placeholder="e.g. Joy FM News"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-[#9dabb9] mb-1">Destination</label>
              <input 
                name="destination" 
                required 
                className="w-full bg-[#283039] border border-border-dark rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:outline-none" 
                placeholder="e.g. Parliament House, Accra"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-[#9dabb9] mb-1">Pick-up Date</label>
                <input type="date" required className="w-full bg-[#283039] border border-border-dark rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
              <div>
                <label className="block text-sm font-medium text-[#9dabb9] mb-1">Pick-up Time</label>
                <input type="time" required className="w-full bg-[#283039] border border-border-dark rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-primary focus:outline-none" />
              </div>
            </div>
          </div>
          <div className="pt-6 flex gap-3">
            <button 
              type="button" 
              onClick={() => setIsModalOpen(false)}
              className="flex-1 py-3 rounded-lg border border-border-dark text-[#9dabb9] font-bold hover:bg-[#283039] transition-colors"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="flex-1 py-3 rounded-lg bg-primary text-white font-bold hover:bg-blue-600 shadow-lg shadow-primary/20 transition-colors"
            >
              Submit Request
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};

export default BookingsManagement;
