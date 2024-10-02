import { BoxLink, ButtonIcon, LikeIcon, Sort } from "../FeedPage/Mycomponent";
import { useState } from "react";
import {
    AuthorImage,
    AuthorInfo,
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
    LinkList,
    MainContainer,
    Name,
    Radius,
    StyledImage
} from "./Mycomponent";

function DetailPage() {
    const posts = [
        { likes: 0 }
    ];

    const [likeCounts, setLikeCounts] = useState(posts.map(post => post.likes));
    const [likeImages, setLikeImages] = useState(posts.map(() => "/Image/like.png"));

    const handleLike = (index) => {
        const newLikeCounts = [...likeCounts];
        const newLikeImages = [...likeImages];

        // 좋아요 수 증가 및 이미지 변경
        newLikeCounts[index] += 1;
        newLikeImages[index] = "/Image/likeactive.png";
        setLikeCounts(newLikeCounts);
        setLikeImages(newLikeImages);
    };

    return (
        <BaseContainer>
            <Header>
                <Sort>
                    <BoxLink to="/feed">
                        <StyledImage
                            src="/DetailImage/VelogIcon.png"
                            style={{ width: '28px', height: '28px' }}
                        />
                    </BoxLink>
                    <StyledImage
                        src="/DetailImage/사용자 로고.png"
                        style={{ width: '161px', height: '27px' }}
                    />
                </Sort>

                <Sort>
                    <StyledImage
                        src="/DetailImage/알림 아이콘.png"
                        style={{ width: '15.5px', height: '20px' }}
                    />
                    <StyledImage
                        src="/DetailImage/검색 아이콘-2.png"
                        style={{ width: '17px', height: '17.5px' }}
                    />
                    <ButtonIcon>새 글 작성</ButtonIcon>
                    <StyledImage
                        src="/DetailImage/유저 프로필 이미지.png"
                        style={{ width: '40px', height: '40px' }}
                    />
                </Sort>
            </Header>

            <MainContainer>
                <LeftSideBar>
                    <LeftSideBarContent>
                        {posts.map((_, index) => (
                            <Like
                                key={index}
                                likeCount={likeCounts[index]}
                                likeImage={likeImages[index]}
                                onLike={() => handleLike(index)}
                            />
                        ))}
                         
                    </LeftSideBarContent>
                </LeftSideBar>

                <FeedContainer>
                    <FeedTitle>PARD 4기 화이팅</FeedTitle>

                    <FeedInfo>
                        <div style={{display:'flex',gap:'20px'}}>
                            <Name>김광일 </Name>
                            <Date> 24.08.14</Date>
                        
                            </div>
                        <ButtonList>
                            <div>통계</div>
                            <div>수정</div>
                            <div>삭제</div>
                        </ButtonList>
                    </FeedInfo>
                    <FeedContent>
                        이 글은 PARD 4기 여러분에게 과제가 될 것입니다.
                    </FeedContent>
                    <FeedAuthorInfo>
                        <AuthorImage />
                        <div>
                            <AuthorName>김광일</AuthorName>
                            <AuthorInfo>개발을 꿈꾸는 사람입니다.</AuthorInfo>
                        </div>
                    </FeedAuthorInfo>
                    <LinkList>
                        {/* <a href="#">GitHub</a>
                        <a href="#">Blog</a>
                        <a href="#">Email</a> */}
                    </LinkList>
                </FeedContainer>
            </MainContainer>
        </BaseContainer>
    );
}

function Like({ likeCount, likeImage, onLike }) {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '160px'}}>
            <Radius>

            
            <LikeIcon 
                onClick={onLike} 
            >
                <StyledImage
                    src={likeImage}
                    alt="like icon"
                    width="20px"
                    height="20px"
                />
            </LikeIcon>
            </Radius>
            <div>{likeCount}</div> {/* 좋아요 수 */}
            <Radius>
                        <StyledImage
                            src="/DetailImage/피드 공유 아이콘.png"
                            alt="share icon"
                            style={{ width: '20px', height: '20px'}}
                            />

                            </Radius>
        </div>
        
    );
}


export default DetailPage;