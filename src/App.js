import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Feed } from './pages/Feed';
import { Profile } from './pages/Profile';
import NavBar from './components/NavBar';
import { FriendRequests } from './pages/FriendRequests';
import { UserTemplate } from './pages/UserTemplate';
import Login from './pages/Login';

function App() {
    return (
        <Router basename="/find-a-friend">
            <MainContent />
        </Router>
    );
}

const MainContent = () => {
    const location = useLocation();
    const showNavBar = location.pathname !== "/login"; // Hide NavBar on Login page

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/feed" element={<WithNavBar><Feed /></WithNavBar>} />
                <Route path="/profile" element={<WithNavBar><Profile /></WithNavBar>} />
                <Route path="/friendRequests" element={<WithNavBar><FriendRequests /></WithNavBar>} />
                <Route path="/user/:user" element={<WithNavBar><UserTemplate /></WithNavBar>} />
            </Routes>
        </>
    );
};

// This wrapper ensures NavBar only appears on pages other than login
const WithNavBar = ({ children }) => (
    <>
        <NavBar />
        {children}
    </>
);

export default App;
