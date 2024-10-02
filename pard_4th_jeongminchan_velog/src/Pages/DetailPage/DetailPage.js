import {BoxLink, ButtonIcon, Sort} from "../FeedPage/Mycomponent";
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
    StyledImage
} from "./Mycomponent";

function DetailPage() {
    return (
        <> < BaseContainer > 
            <Header>
                <Sort>
                  <BoxLink to ="/feed">

                  <StyledImage
                        src="/DetailImage/VelogIcon.png"
                        style={({width: '28px', height: '28px'})}/>
                  </BoxLink>
                   
                    <StyledImage
                        src="/DetailImage/사용자 로고.png"
                        style={({width: '161px', height: '27px'})}/>
                </Sort>

                <Sort>
                    <StyledImage
                        src="/DetailImage/알림 아이콘.png"
                        style={({width: '15.5px', height: '20px'})}/>
                    <StyledImage
                        src="/DetailImage/검색 아이콘-2.png"
                        style={({width: '17px', height: '17.5px'})}/>
                    <ButtonIcon>새 글 작성</ButtonIcon>
                    <StyledImage
                        src="/DetailImage/유저 프로필 이미지.png"
                        style={({width: '40px', height: '40px'})}/>
                </Sort>

            </Header>

            <MainContainer>

                <LeftSideBar>

                    <LeftSideBarContent>
                        <div>하트</div>
                        0
                        <div>공유</div>

                    </LeftSideBarContent>

                </LeftSideBar>

                <FeedContainer>

                    <FeedTitle>PARD 4기 화이팅</FeedTitle>

                    <FeedInfo>
                        <div>
                            <Name>김광일
                            </Name>
                            <Date>
                                24.08.14</Date>
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
                        <AuthorImage/>
                        <div>
                            <AuthorName>김광일</AuthorName>
                            <AuthorInfo>개발을 꿈꾸는 사람입니다.</AuthorInfo>
                        </div>
                    </FeedAuthorInfo>
                    <LinkList>
                        {/* <a href="#">GitHub</a>
            <a href="#">Blog</a>
            <a href="#">Email</a> */
                        }
                    </LinkList>
                </FeedContainer>
            </MainContainer>
        
    </BaseContainer>
</>
    );
}

export default DetailPage;