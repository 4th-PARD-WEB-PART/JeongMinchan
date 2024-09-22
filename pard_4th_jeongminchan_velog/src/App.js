import {useState} from 'react';

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

import {
    FeedContainer,
    FeedHeader,
    PostGrid,
    PostCard,
    PostImage,
    PostDetails,
    PostTitle,
    PostMeta,
    PostAuthor,
    LikeIcon,
    PageContainer,
    PostActionContainer,
    PostActionMeta,
    PostMain
} from './Pages/FeedPage/Mycomponent';

function App() {
    const [isSignedUp, setIsSignedUp] = useState(false); // Track signup status

    // Sample posts data with initial like counts
    const posts = [
        {
            id: 1,
            title: "개강은 왜 하는걸까",
            main: "왜 개강임? 개처럼강해지기는그냥힘들어",
            author: "살몬",
            likes: 47,
            date: "2024년 8월 14일",
            comments: 23
        }, {
            id: 2,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 46,
            date: "2024년 8월 14일",
            comments: 23
        }, {
            id: 3,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 47,
            date: "2024년 8월 14일",
            comments: 23
        }, {
            id: 3,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 47,
            date: "2024년 8월 14일",
            comments: 23
        }, {
            id: 3,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 47,
            date: "2024년 8월 14일",
            comments: 23
        }, {
            id: 3,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 47,
            date: "2024년 8월 14일",
            comments: 23
        }
    ];

    // Manage the state of the like counts
    const [likeCounts, setLikeCounts] = useState(posts.map(post => post.likes));

    const handleSignup = () => {
        setIsSignedUp(true); // Switch to feed page after signup
    };

    const handleLike = (index) => {
        // Create a new array and update the likes for the post at the given index
        const newLikeCounts = [...likeCounts];
        newLikeCounts[index] += 1;
        setLikeCounts(newLikeCounts);
    };

    if (isSignedUp) {
        return (
            <PageContainer>
                <FeedContainer>
                    <FeedHeader>
                        <h1>트렌딩</h1>
                        <div>
                            <button>최신</button>
                            <button>피드</button>
                        </div>
                    </FeedHeader>

                    <PostGrid>
                        {
                            posts.map((post, index) => (
                                <PostCard key={post.id}>
                                    <PostImage/>
                                    <PostDetails>
                                        <PostTitle>{post.title}</PostTitle>

                                        <PostMain>{post.main}</PostMain>

                                        <PostMeta>
                                            <span>{post.date}</span>
                                            <PostActionMeta>{post.comments}개의 댓글
                                            </PostActionMeta>
                                        </PostMeta>

                                        

                                    </PostDetails>
                                    <PostActionContainer>
                                            {/* 작성자 - 좋아요 */}
                                            <PostAuthor>by {post.author}</PostAuthor>
                                            <LikeIcon onClick={() => handleLike(index)}>❤ {likeCounts[index]}</LikeIcon>
                                        </PostActionContainer>
                                </PostCard>
                            ))
                        }
                    </PostGrid>
                </FeedContainer>
            </PageContainer>
        );
    }

    return (
        // Signup page
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
                            <Input type="text" placeholder='이름을 입력해주세요.'/>
                        </Name>
                    </Box>

                    <Box>
                        <Label>이메일</Label>
                        <Email>
                            <Input type="text" placeholder='이메일을 입력해주세요.'/>
                        </Email>
                    </Box>

                    <Box>
                        <Label>비밀번호</Label>
                        <Password>
                            <Input type="password" placeholder='비밀번호를 입력해주세요.'/>
                        </Password>
                    </Box>

                    <Box>
                        <Label>한 줄 소개</Label>
                        <Introduce>
                            <Input type="text" placeholder='당신을 한 줄로 소개해보세요'/>
                        </Introduce>
                    </Box>

                    <Label>
                        <Checkbox type="checkbox"/>
                        <Span>이용약관</Span>과
                        <Span>개인정보취급방침</Span>에 동의합니다.
                    </Label>
                </Body>

                <Bottom>
                    <Button bgColor="orange">취소</Button>
                    <Button onClick={handleSignup}>가입</Button>
                    {/* Handle signup */}
                </Bottom>
            </BaseContainer>
        </Page>
    );
}

export default App;
