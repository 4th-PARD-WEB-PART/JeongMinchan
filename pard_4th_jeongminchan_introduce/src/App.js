import './App.css';

function App() {
  return (
    <div className="App">
      <div className="header">
        <div className="img_box"></div>
        <div className="introduce">MinchoLover</div>
      </div>
      <div className="container">
        <div className="section_center">
          <h1>ABOUT ME . .</h1>
        </div>
        <div className="section1">
          <div>
            <h3>Basic</h3>
            <p>NAME : 정민찬</p>
            <p>AGE : 23</p>
            <p>HEIGHT : 약 2m</p>
          </div>
        </div>
        <div className="section2">
          <div>
            <h3>Challenge</h3>
            <p>주어진 일에 최선 다하기</p>
            <p>번아웃 오지 않기</p>
            <p>CC (ㅋ)</p>
          </div>
        </div>
        <div className="section3">
          <div>
            <h3>Hobby</h3>
            <p>📸 사진 찍기 📸</p>
            <p>✍️ 글 쓰기 ✍️</p>
            <p>🎹 피아노 연주 🎹</p>
          </div>
        </div>
        <div className="section4">
          <div>
            <h3>TMI</h3>
            <p>MBTI : INFJ</p>
            <p>은근 관종</p>
            <p>시골에서 살고 싶음</p>
          </div>
        </div>
      </div>
      <div className="pard_section">
        <div>
          <div className="section_top"><h1>Waiting for Wave . . . </h1></div>
          <div className="section_bottom"><h1>"talent is, found at the end of the effort."</h1></div>
        </div>
      </div>
      <div className="footer">
        <div className="f_section">
          <a href="https://github.com/MinchoLover">
            Github
          </a>
         </div>
        <div className="f_section">
          <a href="https://mincholover.netlify.app">
            Portpolio
          </a>
        </div>
        <div className="f_section">
          <a href="https://www.instagram.com/minzzhan/">
            instagram
          </a>
        </div>
        <div className="f_section">
          <a href="https://velog.io/@jeongmincho/posts">
            develop
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
