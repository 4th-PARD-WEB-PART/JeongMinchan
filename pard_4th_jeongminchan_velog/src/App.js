import { useState } from 'react';
import FeedPage from './Pages/FeedPage/FeedPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';

function App() {
    const [isSignedUp, setIsSignedUp] = useState(false);

    const handleSignup = () => {
        setIsSignedUp(true);
    };

    if (isSignedUp) {
        return <FeedPage />;
    }

    return <RegisterPage handleSignup={handleSignup} />;
}

export default App;
