import {
    BaseContainer,
    Body,
    Bottom,
    Box,
    Button,
    Checkbox,
    Email,
    H1,
    Header,
    Input,
    Introduce,
    Label,
    Name,
    Page,
    Password,
    Span
} from './Pages/RegisterPage/Mycomponent';



function App() {
    return (
        <Page>
            <BaseContainer>

                <Header>
                    <H1>환영합니다!</H1>
                    <p>기본 회원 정보를 등록해주세요</p>
                </Header>

                <Body>
                    <Box>
                        <Label>이름</Label>
                        <Name>
                            <Input type="text" placeholder='이름을 입력해주세요.' />
                        </Name>
                    </Box>

                    <Box>
                        <Label>이메일</Label>
                        <Email>
                            <Input type="text" placeholder='이메일을 입력해주세요.' />
                        </Email>
                    </Box>

                    <Box>
                        <Label>비밀번호</Label>
                        <Password>
                            <Input type="password" placeholder='비밀번호를 입력해주세요.' />
                        </Password>
                    </Box>

                    <Box>
                        <Label>한 줄 소개</Label>
                        <Introduce>
                            <Input type="text" placeholder='당신을 한 줄로 소개해보세요' />
                        </Introduce>
                    </Box>

                    <Label>
                        <Checkbox type="checkbox" />
                        <Span>이용약관</Span>과 <Span>개인정보취급방침</Span>에 동의합니다.
                    </Label>

                </Body>

                <Bottom>
                    <Button bgColor="orange">취소</Button>
                    <Button>가입</Button>
                </Bottom>

            </BaseContainer>
        </Page>
    );
}


export default App;
