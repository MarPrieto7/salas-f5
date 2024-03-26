import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar.jsx';
import Footer from './components/Footer/Footer.jsx';
import AdminReservationView from './Views/AdminReservationView/AdminReservationView.jsx';
import HomeView from './Views/HomeView/HomeView.jsx';
import LoginRegisterView from './Views/LoginRegisterView/LoginRegisterView.jsx';
import ReservationView from './Views/ReservationView/ReservationView.jsx';
import RoomUnicView from './Views/RoomUnicView/RoomUnicView.jsx';
import RoomView from './Views/RoomView/RoomView.jsx';
import UserReservationView from './Views/UserReservationView/UserReservationView.jsx';
import ContactView from './Views/ContactView/ContactView.jsx'
import EditRooms from './Views/EditRooms/EditRooms.jsx'
import EditReserve from './Views/EditReserve/EditReserve.jsx'
import NotFound from './Views/PendingPages/NotFound/NotFound.jsx'
import OnWorks from './Views/PendingPages/OnWorks/OnWorks.jsx'


function App() {

  const checkAuth = (roles) => {
    const userRole = localStorage.getItem('role');

    return userRole && roles.includes(userRole);
  };

  const redirectToLogin = () => <Navigate to="/LoginRegisterView" replace />;


  return (
    <>
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <Routes>
            <Route index element={<HomeView />} />
            <Route path="/LoginRegisterView" element={<LoginRegisterView />} />
            <Route path="/RoomUnicView/:id" element={<RoomUnicView />} />
            <Route path="/RoomView" element={<RoomView />} />
            <Route path="/ContactView" element={<ContactView />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/OnWorks" element={<OnWorks />} />
            <Route
              path="/differentpath"
              element={checkAuth(['admin']) ? <AdminReservationView /> : redirectToLogin()}
            />
            <Route
              path="/ReservationView"
              element={checkAuth(['professor']) ? <ReservationView /> : redirectToLogin()}
            />
            <Route
              path="/UserReservationView"
              element={checkAuth(['user']) ? <UserReservationView /> : redirectToLogin()}
            />
            <Route
              path="/EditRooms/:id"
              element={checkAuth(['admin']) ? <EditRooms /> : redirectToLogin()}
            />
            <Route
              path="/EditReserve/:id"
              element={checkAuth(['admin', 'user', 'professor']) ? <EditReserve /> : redirectToLogin()}
            />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  )
}

export default App