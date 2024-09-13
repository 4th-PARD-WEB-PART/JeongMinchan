import './App.css';

function App() {
  return (
    <div className="App">
      {/* 헤더 섹션 */}
      <header className="header">
        <div className="img-box"></div>
        <div className="header-title">MinchoLover</div>
      </header>

      {/* 소개 섹션 */}
      <section className="about-container">
        <div className="section-center">
          <h1>ABOUT ME . .</h1>
        </div>

        <div className="about-section section1">
          <h3>👴🤦‍♂️🐽 Basic 👴🤦‍♂️🐽</h3>
          <span className="texthover1">
            <p>이름 : 정민찬</p>
            <p> 나이 : 23 </p>
            <p> 키 : 약 2m </p>
            <p> 몸무게 : 약 0.1ton </p>
          </span>
        </div>
        <div className="about-section section2">
          <h3>🌊 Challenge 🌊</h3>
          <span className="texthover2">
            <p> 주어진 일에 최선 다하기 </p>
            <p> 번아웃 오지 않기 </p>
            <p> 어제보다 나은 오늘 </p>
            <p> CC </p>
          </span>
        </div>

        <div className="about-section section3">
          <h3>📸✍️🎹 Hobby 📸✍️🎹</h3>
          <span className="texthover3">
            <p> 사진 찍기 </p>
            <p> 글 쓰기 </p>
            <p> 피아노 연주 </p>
          </span>
        </div>

        <div className="about-section section4">
          <h3>🌳 TMI 🌳</h3>
          <span className="texthover4">
            <p> MBTI : INFJ </p>
            <p> 은근 관종 </p>
            <p> 시골에서 살고 싶음 </p>
          </span>
        </div>
      </section>

      {/* 파도 섹션 */}
      <section className="wave-section">
        <span className="texthover5">
          <h1>Waiting for Wave . . . </h1>
        </span>
        <span className="texthover5">
          <h1>"talent is, found at the end of the effort."</h1>
        </span>
      </section>

      {/* 푸터 섹션 */}
      <footer className="footer">
        <a href="https://github.com/MinchoLover" className="f-section">Github</a>
        <a href="https://mincholover.netlify.app" className="f-section">Portfolio</a>
        <a href="https://www.instagram.com/minzzhan/" className="f-section">Instagram</a>
        <a href="https://velog.io/@jeongmincho/posts" className="f-section">Develop</a>
      </footer>
    </div>
  );
}

export default App;
