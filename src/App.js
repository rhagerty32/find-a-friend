import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Feed from './pages/Feed';
import { Profile } from './pages/Profile';
import NavBar from './components/NavBar';
import { FriendRequests } from './pages/FriendRequests';
import { UserTemplate } from './pages/UserTemplate';
import Login from './pages/Login';
import OnboardingConvert from './pages/OnboardingConvert';
import OnboardingBirthday from './pages/OnboardingBirthday'; // ✅ Import new page
import ChurchCallingSelection from './pages/OnboardingCallings';
import ProfilePictureSelection from './pages/OnboardingProfilePicture';

function App() {
    return (
        <Router basename="/find-a-friend">
            <MainContent />
        </Router>
    );
}

const MainContent = () => {
    const location = useLocation();
    const showNavBar = location.pathname !== "/login" && location.pathname !== "/onboarding" && location.pathname !== "/onboarding-birthday"; // ✅ Hide NavBar on onboarding pages

    return (
        <>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/login" element={<Login />} />
                <Route path="/onboarding" element={<OnboardingConvert />} />
                <Route path="/onboarding-birthday" element={<OnboardingBirthday />} /> {/* ✅ Added new route */}
                <Route path="/onboarding-calling" element={<ChurchCallingSelection />} />
                <Route path="/onboarding-profilePicture" element={<ProfilePictureSelection />} />
                <Route path="/feed" element={<WithNavBar><Feed /></WithNavBar>} />
                <Route path="/profile" element={<WithNavBar><Profile /></WithNavBar>} />
                <Route path="/friendRequests" element={<WithNavBar><FriendRequests /></WithNavBar>} />
                <Route path="/user/:user" element={<WithNavBar><UserTemplate /></WithNavBar>} />
            </Routes>
        </>
    );
};

// This wrapper ensures NavBar only appears on pages other than login and onboarding
const WithNavBar = ({ children }) => (
    <>
        <NavBar />
        {children}
    </>
);

export default App;
