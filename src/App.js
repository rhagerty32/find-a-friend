import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Feed from './pages/Feed';
import { Profile } from './pages/Profile';
import NavBar from './components/NavBar';
import { FriendRequests } from './pages/FriendRequests';
import { UserTemplate } from './pages/UserTemplate';

function App() {
    return (
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<Feed />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/friendRequests" element={<FriendRequests />} />
                <Route path="/user/:user" element={<UserTemplate />} />
            </Routes>
        </Router>
    );
};

export default App;
