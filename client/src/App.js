import { BrowserRouter, Routes, Route } from 'react-router-dom';
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



function App() {
// const [count, setCount] = useState(0)

  return (
    <>
     <div className="App">
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route index element={<HomeView />} />
          <Route path="/differentpath" element={<AdminReservationView />} />
          <Route path="/LoginRegisterView" element={<LoginRegisterView />} />
          <Route path="/ReservationView" element={<ReservationView />} />
          <Route path="/RoomUnicView/:id" element={<RoomUnicView />} />
          <Route path="/RoomView" element={<RoomView />} />
          <Route path="/UserReservationView" element={<UserReservationView />} />
          <Route path="/ContactView" element={<ContactView />} />
          <Route path="/EditRooms/:id" element={<EditRooms />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App