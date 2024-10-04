import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // react-router-dom에서 useNavigate 가져오기

import {
    Page,
    BaseContainer,
    Header,
    Body,
    Box,
    Label,
    Name,
    Email,
    Password,
    Introduce,
    Input,
    Checkbox,
    Span,
    Bottom,
    Button,
    H1
} from './Mycomponent.js';

function RegisterPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [introduce, setIntroduce] = useState('');
    const [agree, setAgree] = useState(false);
    const [errors, setErrors] = useState({});
    
    const navigate = useNavigate(); // 페이지 이동을 위한 hook

    const handleSignup = () => {
        // 유효성 검사
        const validationErrors = {};

        if (!name) {
            validationErrors.name = '이름을 입력해주세요.';
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!email) {
            validationErrors.email = '이메일을 입력해주세요.';
        } else if (!emailPattern.test(email)) {
            validationErrors.email = '유효한 이메일 주소를 입력해주세요.';
        }

        if (!password) {
            validationErrors.password = '비밀번호를 입력해주세요.';
        } else if (password.length < 6) {
            validationErrors.password = '비밀번호는 최소 6자 이상이어야 합니다.';
        }

        if (!introduce) {
            validationErrors.introduce = '한 줄 소개를 입력해주세요.';
        }

        if (!agree) {
            validationErrors.agree = '이용약관과 개인정보취급방침에 동의해야 합니다.';
        }

        setErrors(validationErrors);

        // 에러가 없으면 Feed 페이지로 이동
        if (Object.keys(validationErrors).length === 0) {
            navigate('/feed'); // Feed 페이지로 리디렉션
        }
    };

    // input 필드에 포커싱할 때 해당 에러 삭제하는 함수
    const clearError = (field) => {
        setErrors((prevErrors) => ({
            ...prevErrors,
            [field]: null, // 해당 필드의 오류를 제거
        }));
    };

    return (
        <Page>
            <BaseContainer>

                {/* 헤더요소 */}

                <Header>
                    <H1>환영합니다!</H1>
                    <p>기본 회원 정보를 등록해주세요</p>
                </Header>

                {/* 바디요소 */}

                <Body>
                    <Box>
                        <Label>이름</Label>
                        <Name>
                            <Input
                                type="text"
                                placeholder="이름을 입력해주세요."
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                onFocus={() => clearError('name')} // 포커싱하면 에러 삭제
                            />
                            {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}
                        </Name>
                    </Box>

                    <Box>
                        <Label>이메일</Label>
                        <Email>
                            <Input
                                type="text"
                                placeholder="이메일을 입력해주세요."
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                onFocus={() => clearError('email')} // 포커싱하면 에러 삭제
                            />
                            {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
                        </Email>
                    </Box>

                    <Box>
                        <Label>비밀번호</Label>
                        <Password>
                            <Input
                                type="password"
                                placeholder="비밀번호를 입력해주세요."
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                onFocus={() => clearError('password')} // 포커싱하면 에러 삭제
                            />
                            {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}
                        </Password>
                    </Box>

                    <Box>
                        <Label>한 줄 소개</Label>
                        <Introduce>
                            <Input
                                type="text"
                                placeholder="당신을 한 줄로 소개해보세요"
                                value={introduce}
                                onChange={(e) => setIntroduce(e.target.value)}
                                onFocus={() => clearError('introduce')} // 포커싱하면 에러 삭제
                            />
                            {errors.introduce && <p style={{ color: 'red' }}>{errors.introduce}</p>}
                        </Introduce>
                    </Box>

                    <Box>
                        <Label>
                            <Checkbox
                                type="checkbox"
                                checked={agree}
                                onChange={(e) => setAgree(e.target.checked)}
                                onFocus={() => clearError('agree')} // 포커싱하면 에러 삭제
                            />
                            <Span>이용약관</Span>과
                            <Span>개인정보취급방침</Span>에 동의합니다.
                            {errors.agree && <p style={{ color: 'red' }}>{errors.agree}</p>}
                        </Label>
                    </Box>
                </Body>

                {/* 가입 밑 취소 버튼 요소 */}

                <Bottom>
                    <Button bgColor="orange">취소</Button>
                    <Button onClick={handleSignup}>
                        가입
                    </Button>
                </Bottom>
            </BaseContainer>
        </Page>
    );
}

export default RegisterPage;
