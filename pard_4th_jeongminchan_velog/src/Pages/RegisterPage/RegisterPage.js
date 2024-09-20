
function RegisterPage() {
    return (  
        <div className="Page">
            <div className="BaseContainer">
                {/* 헤더 요소 */}
                <div className="Header">
                    <h1>환영합니다!</h1>
                    <p>기본 회원 정보를 등록해주세요</p>
                </div>
                {/* 메인 요소 */}
                <div className="Body">
                    <div className="Box">
                        <p className="Label">이름</p>
                        <div className="Name">
                            <input type="text" placeholder="이름을 입력해주세요." />
                        </div>
                    </div>

                    <div className="Box">
                        <p className="Label">이메일</p>
                        <div className="Email">
                            <input type="text" placeholder="이메일을 입력해주세요." />
                        </div>
                    </div>

                    <div className="Box">
                        <p className="Label">비밀번호</p>
                        <div className="Password">
                            <input type="password" placeholder="비밀번호를 입력해주세요." />
                        </div>
                    </div>

                    <div className="Box">
                        <p className="Label">한 줄 소개</p>
                        <div className="Introduce">
                            <input type="text" placeholder="당신을 한 줄로 소개해보세요" />
                        </div>
                    </div>
                    {/* 체크박스 요소 */}
                    <p className="Label">
                        <input type="checkbox" />
                        <span className="Span">이용약관</span>과 <span className="Span">개인정보취급방침</span>에 동의합니다.
                    </p>
                </div>
                {/* 푸터 요소 */}
                <div className="Bottom">
                    <button className="Button">취소</button>
                    <button className="Button">가입</button>
                </div>

            </div>
        </div>
    );
}

export default RegisterPage;
