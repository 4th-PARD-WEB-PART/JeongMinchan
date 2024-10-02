import FeedPage from './Pages/FeedPage/FeedPage';
import RegisterPage from './Pages/RegisterPage/RegisterPage';
import { Route, Routes } from 'react-router-dom';
import DetailPage from './Pages/DetailPage/DetailPage';

function App() {
    
    return(
        // 페이지 경로 한 번에 관리
        <Routes>
            {/* 로그인 페이지 */}
            <Route path="/" element={<RegisterPage />}/>
            {/* 피드 페이지 */}
            <Route path="/feed" element={<FeedPage/>}/>
            {/* 상세 페이지 */}
            <Route path="detail" element={<DetailPage/>}/>
        </Routes>
    );
   
}

export default App;
