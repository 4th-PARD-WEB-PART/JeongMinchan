
import FeedPage from './Pages/FeedPage/FeedPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './Pages/DetailPage/DetailPage';

function App() {
    
    return(
        <Routes>
            <Route path="/" element={<RegisterPage />}/>
            <Route path="/feed" element={<FeedPage/>}/>
            <Route path="detail" element={<DetailPage/>}/>
        </Routes>
    );
   
}

export default App;
