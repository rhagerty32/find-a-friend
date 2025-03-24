import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Feed from './pages/Feed';
import { Profile } from './pages/Profile';
import NavBar from './components/NavBar';
import { FriendRequests } from './pages/FriendRequests';
import { UserTemplate } from './pages/UserTemplate';
import Login from './pages/Login';
<<<<<<< HEAD
import Messages from './pages/Messages';
import ChatDetail from './pages/ChatDetail';
=======
import OnboardingConvert from './pages/OnboardingConvert';
import OnboardingBirthday from './pages/OnboardingBirthday'; // ✅ Import new page
import ChurchCallingSelection from './pages/OnboardingCallings';
import OnboardingAvailability from './pages/OnboardingAvailability'; // ✅ Import new page
>>>>>>> c3a6778066b0716ab38ed5c6ccfff829986bac98

function App() {
    return (
        <Router basename="/find-a-friend">
            <MainContent />
        </Router>
    );
}

const MainContent = () => {
    const location = useLocation();
<<<<<<< HEAD
    console.log("Current path:", location.pathname); // For debugging
    
=======
    const showNavBar = location.pathname !== "/login" && location.pathname !== "/onboarding" && location.pathname !== "/onboarding-birthday" && location.pathname !== "/onboarding-availability"; // ✅ Hide NavBar on onboarding pages

>>>>>>> c3a6778066b0716ab38ed5c6ccfff829986bac98
    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/onboarding" element={<OnboardingConvert />} />
                <Route path="/onboarding-birthday" element={<OnboardingBirthday />} /> {/* ✅ Added new route */}
                <Route path="/onboarding-calling" element={<ChurchCallingSelection />} />
                <Route path="/onboarding-availability" element={<OnboardingAvailability />} /> {/* ✅ Added new route */}
                <Route path="/feed" element={<WithNavBar><Feed /></WithNavBar>} />
                <Route path="/profile" element={<WithNavBar><Profile /></WithNavBar>} />
                <Route path="/friendRequests" element={<WithNavBar><FriendRequests /></WithNavBar>} />
                <Route path="/user/:user" element={<WithNavBar><UserTemplate /></WithNavBar>} />
                <Route path="/messages" element={<WithNavBar><Messages /></WithNavBar>} />
                <Route path="/chat/:id" element={<WithNavBar><ChatDetail /></WithNavBar>} />
            </Routes>
        </>
    );
};

// This wrapper ensures NavBar only appears on pages other than login and onboarding
const WithNavBar = ({ children }) => (
    <>
        {children}
        <NavBar />
    </>
);

export default App;