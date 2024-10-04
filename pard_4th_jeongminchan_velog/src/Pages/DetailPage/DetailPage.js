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
    Line,
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

    const Info = {
        title : "PARD 4기 화이팅",
        content : "이 글은 PARD 4기 여러분에게 과제가 될 것입니다.",
        author_name : "김광일",
        author_id : "oksk6681",
        author_image : "/Img/DetailPage/kwangil.png",
        author_info : "개발을 꿈꾸는 사람입니다.",
        date : "24.08.14",
        heart_count : "0"
    };

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
                    <FeedTitle>{Info.title}</FeedTitle>

                    <FeedInfo>
                        <div style={{display:'flex',gap:'20px'}}>
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
                        {Info.content}
                    </FeedContent>
                    <FeedAuthorInfo>
                        <AuthorImage />
                        <div>
                            <AuthorName>{Info.author_name}</AuthorName>
                            <AuthorInfo>{Info.author_info}</AuthorInfo>
                        </div>
                    </FeedAuthorInfo>
                    <Line></Line>
                    <LinkList>
                        <StyledImage 
                            src="/DetailImage/깃허브 아이콘.png"
                            style={({ 
                                height:'35px',
                                width: '35px',
                            })}
                        />
                        <StyledImage 
                            src="/DetailImage/홈  아이콘.png"
                            style={({ 
                                height:'35px',
                                width: '35px',
                            })}
                        />
                        <StyledImage 
                            src="/DetailImage/메일 아이콘.png"
                            style={({ 
                                height:'35px',
                                width: '35px',
                            })}
                        />
                   
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