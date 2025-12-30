
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import Modal from '../components/Modal';

const AdminDashboard: React.FC = () => {
  const [isAiModalOpen, setIsAiModalOpen] = useState(false);
  const [aiResponse, setAiResponse] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const generateAIBriefing = async () => {
    setIsGenerating(true);
    setAiResponse(null);
    setIsAiModalOpen(true);
    
    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: "Analyze the current transport status: 42 active trips, 18 available vehicles out of 35 total, 24 drivers on duty, and 5 pending requests. Provide a short, professional 'Fleet Efficiency Recommendation' for a transport manager at Multimedia Group Limited. Mention potential bottlenecks or optimization tips.",
        config: {
          systemInstruction: "You are an expert logistics AI consultant. Keep responses concise, professional, and formatted in Markdown with bullet points.",
          temperature: 0.7,
        },
      });
      setAiResponse(response.text || "Failed to generate briefing.");
    } catch (error) {
      console.error("AI Generation Error:", error);
      setAiResponse("Error connecting to AI service. Please check your API key.");
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-[1600px] mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h1 className="text-slate-900 dark:text-white text-3xl font-black leading-tight tracking-tight">Dashboard Overview</h1>
          <p className="text-slate-500 dark:text-slate-400 text-base font-medium">Welcome back, Admin. Here is your fleet status.</p>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={generateAIBriefing}
            className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-purple-600 text-white text-sm font-bold shadow-md hover:bg-purple-700 transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">auto_awesome</span>
            <span>AI Fleet Briefing</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm font-bold shadow-sm">
            <span className="material-symbols-outlined text-[18px]">calendar_today</span>
            <span>This Month</span>
          </button>
          <button className="flex items-center justify-center gap-2 rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold shadow-md hover:bg-blue-600 transition-colors">
            <span className="material-symbols-outlined text-[18px]">download</span>
            <span>Download Report</span>
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {[
          { label: 'Active Trips', val: '42', trend: '+12%', icon: 'route', color: 'emerald' },
          { label: 'Available Vehicles', val: '18', sub: '/ 35 Total', icon: 'directions_car', color: 'primary', progress: 51 },
          { label: 'Drivers on Duty', val: '24', sub: 'Next shift in 2h', icon: 'badge', color: 'primary' },
          { label: 'Pending Requests', val: '5', sub: 'Action Needed', icon: 'pending_actions', color: 'orange', alert: true },
        ].map((stat, i) => (
          <div key={i} className="flex flex-col gap-1 rounded-xl p-5 bg-white dark:bg-surface-dark border border-slate-200 dark:border-slate-800 shadow-sm relative">
            {stat.alert && <div className="absolute top-0 right-0 size-2 bg-red-500 rounded-bl-lg"></div>}
            <div className="flex justify-between items-center mb-2">
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">{stat.label}</p>
              <span className={`material-symbols-outlined text-${stat.color}-500`}>{stat.icon}</span>
            </div>
            <div className="flex items-end gap-2">
              <p className="text-slate-900 dark:text-white text-3xl font-bold leading-none">{stat.val}</p>
              {stat.trend && (
                <div className="flex items-center text-emerald-500 text-sm font-bold mb-1 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                  <span className="material-symbols-outlined text-[14px]">arrow_upward</span>
                  <span>{stat.trend}</span>
                </div>
              )}
              {stat.sub && <p className="text-slate-400 text-xs mb-1">{stat.sub}</p>}
            </div>
            {stat.progress && (
              <div className="w-full bg-slate-200 dark:bg-slate-700 h-1.5 rounded-full mt-3 overflow-hidden">
                <div className="bg-primary h-1.5 rounded-full" style={{ width: `${stat.progress}%` }}></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 flex flex-col bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden min-h-[500px]">
          <div className="flex items-center justify-between p-5 border-b border-slate-200 dark:border-slate-800">
            <h2 className="text-slate-900 dark:text-white text-lg font-bold">Live Fleet Tracking</h2>
            <div className="flex items-center gap-2">
              <span className="size-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-xs font-medium text-emerald-500">Live Updates</span>
            </div>
          </div>
          <div className="relative flex-1 w-full bg-slate-100 dark:bg-slate-900 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center opacity-80" 
              style={{ backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDiRRGX1RRSgyrZbWbcBsV1wycUBDbsZYMksTf7TSpx0kRp4DVbMLHj6xrxQofo_usq5W8-1ibcyYJ20X37g5A2Eil6nzL9dBoJdCfC4pw0sGi1WLnsUF06WeMgeUCllOXFYbYnnaFU0ujrN4BxP_AIgaQ9Mss-hbgkGADQ3Ekc8AY-58q_N1wRn925RNHkYS7u46-v0DpSumjp207wntqQPNqiRKWmk5_RiW1zeVAdTXgX6YKd1X1xBIZqNU-3G4jkbEf2IbXSC2xF')` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent pointer-events-none"></div>
            <div className="absolute top-4 left-4 sm:w-80 z-10">
              <div className="flex w-full items-center rounded-lg bg-white dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
                <div className="pl-3 text-slate-400">
                  <span className="material-symbols-outlined">search</span>
                </div>
                <input className="w-full bg-transparent border-none text-sm p-3 focus:ring-0" placeholder="Search vehicle or driver..." />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="bg-white dark:bg-surface-dark rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col flex-1">
            <div className="p-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center">
              <h2 className="text-slate-900 dark:text-white text-lg font-bold">System Alerts</h2>
              <button className="text-xs text-primary font-bold hover:underline">Mark All Read</button>
            </div>
            <div className="divide-y divide-slate-100 dark:divide-slate-800/50">
              {[
                { title: 'Maintenance Overdue', sub: 'Vehicle GC-2023 requires service.', time: '10m ago', icon: 'build', color: 'red' },
                { title: 'License Expiring', sub: 'Driver John Doe\'s license in 3 days.', time: '2h ago', icon: 'assignment_late', color: 'orange' },
                { title: 'Low Fuel Alert', sub: 'Truck T-55 fuel below 15%.', time: 'Yesterday', icon: 'local_gas_station', color: 'blue' },
              ].map((alert, i) => (
                <div key={i} className="flex gap-3 p-4 hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors cursor-pointer">
                  <div className={`shrink-0 size-10 rounded-full bg-${alert.color}-100 dark:bg-${alert.color}-500/20 text-${alert.color}-600 dark:text-${alert.color}-400 flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-[20px]">{alert.icon}</span>
                  </div>
                  <div className="flex flex-col flex-1 gap-1">
                    <p className="text-sm font-bold text-slate-900 dark:text-white">{alert.title}</p>
                    <p className="text-xs text-slate-500 dark:text-slate-400">{alert.sub}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{alert.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-primary rounded-xl p-5 shadow-lg text-white relative overflow-hidden group">
            <div className="absolute -right-10 -top-10 size-32 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
            <h3 className="font-bold text-lg mb-4 relative z-10">Quick Actions</h3>
            <div className="grid grid-cols-2 gap-3 relative z-10">
              {[
                { label: 'New Trip', icon: 'add_road' },
                { label: 'Broadcast', icon: 'campaign' },
                { label: 'Add Driver', icon: 'person_add' },
                { label: 'Add Vehicle', icon: 'car_rental' },
              ].map(btn => (
                <button key={btn.label} className="flex flex-col items-center justify-center gap-2 bg-white/10 hover:bg-white/20 p-3 rounded-lg border border-white/10 transition-all">
                  <span className="material-symbols-outlined">{btn.icon}</span>
                  <span className="text-xs font-bold">{btn.label}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Modal 
        isOpen={isAiModalOpen} 
        onClose={() => setIsAiModalOpen(false)} 
        title="AI Fleet Briefing"
      >
        <div className="space-y-4">
          {isGenerating ? (
            <div className="flex flex-col items-center justify-center py-12 gap-4">
              <div className="size-12 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
              <p className="text-[#9dabb9] text-sm font-medium animate-pulse">Analyzing fleet data with Gemini...</p>
            </div>
          ) : (
            <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed">
              <div dangerouslySetInnerHTML={{ __html: aiResponse?.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>') || '' }} />
              <div className="mt-8 pt-6 border-t border-border-dark flex justify-end">
                <button 
                  onClick={() => setIsAiModalOpen(false)}
                  className="bg-primary text-white px-6 py-2 rounded-lg font-bold"
                >
                  Close Briefing
                </button>
              </div>
            </div>
          )}
        </div>
      </Modal>
    </div>
  );
};

export default AdminDashboard;
