
import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './screens/SignIn';
import StaffDashboard from './screens/StaffDashboard';
import AdminDashboard from './screens/AdminDashboard';
import MaintenanceDashboard from './screens/MaintenanceDashboard';
import DriverPortal from './screens/DriverPortal';
import DriverSchedule from './screens/DriverSchedule';
import DriverDirectory from './screens/DriverDirectory';
import BookingsManagement from './screens/BookingsManagement';
import FleetManagement from './screens/FleetManagement';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import { UserRole, User } from './types';

const App: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);

  const handleLogin = (role: UserRole) => {
    const mockUser: User = {
      id: 'USR-001',
      name: role === UserRole.DRIVER ? 'Kwame Osei' : role === UserRole.ADMIN ? 'Admin User' : 'Kwame Mensah',
      email: 'user@mgl.com',
      role: role,
      avatar: 'https://picsum.photos/seed/transport/200',
      designation: role === UserRole.DRIVER ? 'Senior Logistics Driver' : 'Transport Admin'
    };
    setUser(mockUser);
  };

  const handleLogout = () => {
    setUser(null);
  };

  if (!user) {
    return <SignIn onSignIn={handleLogin} />;
  }

  return (
    <HashRouter>
      <div className="flex h-screen w-full overflow-hidden bg-background-dark">
        <Sidebar user={user} onLogout={handleLogout} />
        <div className="flex-1 flex flex-col h-full overflow-hidden relative">
          <Header user={user} />
          <main className="flex-1 overflow-y-auto bg-background-light dark:bg-background-dark scroll-smooth">
            <Routes>
              <Route path="/" element={
                user.role === UserRole.ADMIN ? <Navigate to="/admin" /> : 
                user.role === UserRole.DRIVER ? <Navigate to="/driver" /> : 
                <StaffDashboard />
              } />
              <Route path="/admin" element={<AdminDashboard />} />
              <Route path="/staff" element={<StaffDashboard />} />
              <Route path="/maintenance" element={<MaintenanceDashboard />} />
              <Route path="/driver" element={<DriverPortal />} />
              <Route path="/schedule" element={<DriverSchedule />} />
              <Route path="/drivers" element={<DriverDirectory />} />
              <Route path="/bookings" element={<BookingsManagement />} />
              <Route path="/fleet" element={<FleetManagement />} />
              <Route path="*" element={<Navigate to="/" />} />
            </Routes>
          </main>
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
