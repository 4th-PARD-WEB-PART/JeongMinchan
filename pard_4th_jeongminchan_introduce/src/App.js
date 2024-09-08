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
            <p>받는 사람에서 도와주는 사람으로의 성장</p>
            <p>익숙함에 속지 않는 사람으로의 성장</p>
            <p>🌊파도에 맞설 수 있는 사람으로의 성장🌊</p>
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
        <div className="f_section">This is footer</div>
        <div className="f_section">This is footer</div>
      </div>
    </div>
  );
}

export default App;
