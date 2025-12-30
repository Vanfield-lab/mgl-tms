
import React from 'react';
import { NavLink } from 'react-router-dom';
import { User, UserRole } from '../types';

interface SidebarProps {
  user: User;
  onLogout: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ user, onLogout }) => {
  const navItems = [
    { path: '/admin', label: 'Dashboard', icon: 'dashboard', roles: [UserRole.ADMIN] },
    { path: '/staff', label: 'Dashboard', icon: 'dashboard', roles: [UserRole.STAFF] },
    { path: '/driver', label: 'Dashboard', icon: 'dashboard', roles: [UserRole.DRIVER] },
    { path: '/fleet', label: 'Fleet', icon: 'local_shipping', roles: [UserRole.ADMIN, UserRole.STAFF] },
    { path: '/drivers', label: 'Drivers', icon: 'group', roles: [UserRole.ADMIN] },
    { path: '/schedule', label: 'Schedule', icon: 'calendar_month', roles: [UserRole.ADMIN, UserRole.STAFF] },
    { path: '/maintenance', label: 'Maintenance', icon: 'build', roles: [UserRole.ADMIN] },
    { path: '/bookings', label: 'Bookings', icon: 'assignment', roles: [UserRole.ADMIN, UserRole.STAFF] },
  ];

  const filteredItems = navItems.filter(item => item.roles.includes(user.role));

  return (
    <aside className="w-64 h-full hidden lg:flex flex-col bg-[#111418] border-r border-[#283039] shrink-0">
      <div className="flex flex-col h-full p-4">
        <div className="flex gap-3 items-center mb-8 px-2">
          <div className="bg-primary rounded-lg size-10 shadow-lg flex items-center justify-center">
            <span className="material-symbols-outlined text-white text-2xl">local_shipping</span>
          </div>
          <div className="flex flex-col overflow-hidden">
            <h1 className="text-white text-base font-bold leading-normal truncate">MGL Transport</h1>
            <p className="text-[#9dabb9] text-xs font-normal leading-normal">{user.role} Portal</p>
          </div>
        </div>

        <nav className="flex flex-col gap-2 flex-1">
          {filteredItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) => `
                flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-200 group
                ${isActive ? 'bg-primary text-white font-bold' : 'text-[#9dabb9] hover:bg-[#283039] hover:text-white'}
              `}
            >
              <span className="material-symbols-outlined text-[24px] transition-colors">{item.icon}</span>
              <p className="text-sm">{item.label}</p>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto pt-4 border-t border-[#283039] space-y-2">
          <button className="flex w-full items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#283039] text-[#9dabb9] hover:text-white transition-colors">
            <span className="material-symbols-outlined text-[20px]">settings</span>
            <p className="text-sm">Settings</p>
          </button>
          <button 
            onClick={onLogout}
            className="flex w-full items-center gap-3 px-3 py-3 rounded-lg hover:bg-[#283039] group transition-colors text-red-400"
          >
            <span className="material-symbols-outlined text-[20px]">logout</span>
            <p className="text-sm font-medium leading-normal">Log Out</p>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
