
import React from 'react';
import { UserRole } from '../types';

interface SignInProps {
  onSignIn: (role: UserRole) => void;
}

const SignIn: React.FC<SignInProps> = ({ onSignIn }) => {
  return (
    <div className="flex flex-1 w-full min-h-screen">
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#111418] flex-col justify-between p-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="w-full h-full bg-cover bg-center opacity-40" 
            style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDYjK1cf4Vnez_b6cQuNCGe9eJiiMUDyrkR04fW311CNIgzUJ4Yy4GgzIsRNgAP2Om18TLBewhoP_WrFkKQQGGLulON6MTcxJqGCiwZZDbTNm4nKRZUo84uiSLhaTcZZYiy46JPz1UOYV2jRpSvkQTQVbxYI7BxSxBX-D0wvzMLAdjqMntHoV86equoO1vh0NpgEC1ub-rlaMslvd-o__gfHhkCXqFMJjRW13D5hlrdNl9xuuP8v7LDbuZv-VP8qzWd0MkxYMcIx3FX')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/80 to-transparent"></div>
        </div>
        <div className="relative z-10 flex items-center gap-3">
          <div className="size-10 text-primary">
            <svg className="w-full h-full" fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z" fill="currentColor"></path>
            </svg>
          </div>
          <h2 className="text-white text-xl font-bold leading-tight tracking-[-0.015em]">Multimedia Group Limited</h2>
        </div>
        <div className="relative z-10 max-w-lg">
          <h1 className="text-4xl font-extrabold tracking-tight text-white mb-4">Streamline Your Fleet Operations</h1>
          <p className="text-lg text-[#9dabb9]">Secure, efficient, and real-time management for the modern transport ecosystem.</p>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center p-6 sm:p-12 relative bg-background-light dark:bg-background-dark">
        <div className="w-full max-w-[480px] flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <h2 className="text-[#111418] dark:text-white tracking-tight text-[32px] font-bold leading-tight">Sign In</h2>
            <p className="text-[#637588] dark:text-[#9dabb9] text-base font-normal">
              Transport Management System. Please login to continue.
            </p>
          </div>

          <form className="flex flex-col gap-4 mt-4" onSubmit={(e) => e.preventDefault()}>
            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-white text-base font-medium">Email Address</label>
              <div className="flex items-center w-full rounded-lg border border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#1c2127] overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                <span className="pl-4 text-[#637588] dark:text-[#9dabb9] flex items-center">
                  <span className="material-symbols-outlined">mail</span>
                </span>
                <input className="flex-1 h-14 bg-transparent border-none text-[#111418] dark:text-white px-4 focus:ring-0 text-base" placeholder="name@example.com" type="email" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#111418] dark:text-white text-base font-medium">Password</label>
              <div className="flex items-center w-full rounded-lg border border-[#dce0e5] dark:border-[#3b4754] bg-white dark:bg-[#1c2127] overflow-hidden focus-within:border-primary focus-within:ring-1 focus-within:ring-primary">
                <span className="pl-4 text-[#637588] dark:text-[#9dabb9] flex items-center">
                  <span className="material-symbols-outlined">lock</span>
                </span>
                <input className="flex-1 h-14 bg-transparent border-none text-[#111418] dark:text-white px-4 focus:ring-0 text-base" placeholder="Enter password" type="password" />
              </div>
            </div>

            <div className="flex flex-col gap-3 mt-4">
              <button 
                onClick={() => onSignIn(UserRole.ADMIN)}
                className="w-full h-12 bg-primary text-white font-bold rounded-lg hover:bg-blue-600 shadow-lg shadow-primary/20"
              >
                Log In as Admin
              </button>
              <div className="flex gap-3">
                <button 
                  onClick={() => onSignIn(UserRole.STAFF)}
                  className="flex-1 h-12 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  Staff Login
                </button>
                <button 
                  onClick={() => onSignIn(UserRole.DRIVER)}
                  className="flex-1 h-12 bg-slate-200 dark:bg-slate-700 text-slate-900 dark:text-white font-bold rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
                >
                  Driver Login
                </button>
              </div>
            </div>
          </form>

          <div className="mt-auto pt-10 text-center text-xs text-[#637588] dark:text-[#526070]">
            v2.4.0 © 2023 Multimedia Group Limited
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
