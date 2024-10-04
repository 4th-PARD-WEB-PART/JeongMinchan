import { BoxLink, ButtonIcon, LikeIcon, Sort } from "../FeedPage/Mycomponent";
import { useState } from "react";
import {
    AuthorImage,
    AuthorInfo,
    AuthorLogo,
    AuthorName,
    BaseContainer,
    ButtonList,
    Date,
    FeedAuthorInfo,
    FeedContainer,
    FeedContent,
    FeedInfo,
    FeedTitle,
    Header,
    LeftSideBar,
    LeftSideBarContent,
    Line,
    LinkList,
    MainContainer,
    Name,
    Radius,
    StyledImage
} from "./Mycomponent";

function DetailPage() {
    // 포스트 정보를 담고 있는 배열
    const posts = [
        {
            likes: 0 // 초기 좋아요 수
        }
    ];

    // 포스트의 상세 정보
    const Info = {
        title: "PARD 4기 화이팅",
        content: "이 글은 PARD 4기 여러분에게 과제가 될 것입니다.",
        author_name: "김광일",
        author_id: "oksk6681",
        author_info: "개발을 꿈꾸는 사람입니다.",
        date: "24.08.14"
    };

    // 좋아요 수와 좋아요 이미지 상태를 관리
    const [likeCounts, setLikeCounts] = useState(posts.map(post => post.likes));
    const [likeImages, setLikeImages] = useState(
        posts.map(() => "/Image/like.png")
    );

    // 좋아요 버튼 클릭 시 호출되는 함수
    const handleLike = (index) => {
        const newLikeCounts = [...likeCounts]; // 현재 좋아요 수 복사
        const newLikeImages = [...likeImages]; // 현재 좋아요 이미지 복사

        // 좋아요 수 증가 및 이미지 변경
        newLikeCounts[index] += 1;
        newLikeImages[index] = "/Image/likeactive.png";
        setLikeCounts(newLikeCounts); // 새로운 좋아요 수 상태 업데이트
        setLikeImages(newLikeImages); // 새로운 좋아요 이미지 상태 업데이트
    };

    return (
        <BaseContainer>
            <Header>
                <Sort>
                    <BoxLink to="/feed">
                        <StyledImage
                            src="/DetailImage/VelogIcon.png"
                            style={{
                                width: '28px',
                                height: '28px'
                            }}/>
                    </BoxLink>
                    <AuthorLogo>
                        {Info.author_id + " ."}
                        <StyledImage
                            src="/DetailImage/log.png"
                            style={{
                                width: '40px',
                                height: '23px',
                                marginTop: '5px'
                            }}/>
                    </AuthorLogo>
                </Sort>

                <Sort>
                    <StyledImage
                        src="/DetailImage/알림 아이콘.png"
                        style={{
                            width: '15.5px',
                            height: '20px'
                        }}/>
                    <StyledImage
                        src="/DetailImage/검색 아이콘-2.png"
                        style={{
                            width: '17px',
                            height: '17.5px'
                        }}/>
                    <ButtonIcon>새 글 작성</ButtonIcon>
                    <StyledImage
                        src="/DetailImage/유저 프로필 이미지.png"
                        style={{
                            width: '40px',
                            height: '40px'
                        }}/>
                </Sort>
            </Header>

            <MainContainer>
                <LeftSideBar>
                    <LeftSideBarContent>
                        {
                            posts.map((_, index) => (
                                <Like
                                    key={index}
                                    likeCount={likeCounts[index]} // 현재 좋아요 수 전달
                                    likeImage={likeImages[index]} // 현재 좋아요 이미지 전달
                                    onLike={() => handleLike(index)} // 클릭 시 좋아요 처리 함수 전달
                                />
                            ))
                        }
                    </LeftSideBarContent>
                </LeftSideBar>

                <FeedContainer>
                    <FeedTitle>{Info.title}</FeedTitle>

                    <FeedInfo>
                        <div
                            style={{
                                display: 'flex',
                                gap: '20px'
                            }}>
                            <Name>{Info.author_name}</Name>
                            <Date>{Info.date}</Date>
                        </div>
                        <ButtonList>
                            <div>통계</div>
                            <div>수정</div>
                            <div>삭제</div>
                        </ButtonList>
                    </FeedInfo>
                    <FeedContent>
                        {Info.content} {/* 포스트 내용 출력 */}
                    </FeedContent>
                    <FeedAuthorInfo>
                        <AuthorImage/>
                        <div>
                            <AuthorName>{Info.author_name}</AuthorName>
                            <AuthorInfo>{Info.author_info}</AuthorInfo>
                        </div>
                    </FeedAuthorInfo>
                    <Line></Line>
                    <LinkList>
                        <StyledImage
                            src="/DetailImage/깃허브 아이콘.png"
                            style={{ height: '35px', width: '35px' }}/>
                        <StyledImage
                            src="/DetailImage/홈  아이콘.png"
                            style={{ height: '35px', width: '35px' }}/>
                        <StyledImage
                            src="/DetailImage/메일 아이콘.png"
                            style={{ height: '35px', width: '35px' }}/>
                    </LinkList>
                </FeedContainer>
            </MainContainer>
        </BaseContainer>
    );
}

// 좋아요 기능을 담당하는 컴포넌트
function Like({ likeCount, likeImage, onLike }) {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '160px'
            }}>
            <Radius>
                <LikeIcon onClick={onLike}>
                    <StyledImage src={likeImage} alt="like icon" width="20px" height="20px"/>
                </LikeIcon>
            </Radius>
            <div>{likeCount}</div> {/* 좋아요 수 출력 */}
            <Radius>
                <StyledImage
                    src="/DetailImage/피드 공유 아이콘.png"
                    alt="share icon"
                    style={{
                        width: '20px',
                        height: '20px'
                    }}/>
            </Radius>
        </div>
    );
}

export default DetailPage;
