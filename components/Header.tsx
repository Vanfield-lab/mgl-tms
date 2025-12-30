
import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

const Header: React.FC<HeaderProps> = ({ user }) => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-[#283039] px-6 py-4 bg-[#111418]/95 backdrop-blur z-20 shrink-0">
      <div className="flex items-center gap-4 lg:hidden">
        <button className="text-[#9dabb9]">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-white text-lg font-bold">MGL Transport</h2>
      </div>

      <div className="hidden lg:flex items-center gap-4 flex-1 max-w-lg">
        <label className="flex w-full items-center gap-2 rounded-lg bg-[#283039] px-3 py-2 focus-within:ring-1 focus-within:ring-primary transition-all">
          <span className="material-symbols-outlined text-[#9dabb9]">search</span>
          <input className="w-full bg-transparent border-none text-white placeholder-[#9dabb9] text-sm focus:ring-0 p-0" placeholder="Search trips, drivers, or locations..." />
        </label>
      </div>

      <div className="flex items-center gap-4 ml-auto">
        <button className="relative flex items-center justify-center size-10 rounded-full hover:bg-[#283039] text-[#9dabb9] hover:text-white transition-colors">
          <span className="material-symbols-outlined">notifications</span>
          <span className="absolute top-2 right-2 size-2 bg-red-500 rounded-full border-2 border-[#111418]"></span>
        </button>
        <div className="h-8 w-[1px] bg-[#283039] mx-1"></div>
        <button className="flex items-center gap-3 pl-2 rounded-lg hover:bg-[#283039] transition-colors p-1 pr-3">
          <div 
            className="bg-center bg-no-repeat bg-cover rounded-full size-9" 
            style={{ backgroundImage: `url(${user.avatar})` }}
          />
          <div className="hidden md:flex flex-col items-start">
            <span className="text-white text-sm font-bold leading-none">{user.name}</span>
            <span className="text-[#9dabb9] text-xs leading-none mt-1">{user.designation}</span>
          </div>
        </button>
      </div>
    </header>
  );
};

export default Header;
