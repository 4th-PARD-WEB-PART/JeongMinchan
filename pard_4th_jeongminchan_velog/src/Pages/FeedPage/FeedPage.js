import React, { useState } from 'react';
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
    PostMain,
    FeedHeaderBottom,
    FeedHeaderTop,
    ButtonIcon,
    Image
} from './Mycomponent';

function FeedPage() {
    const posts = [
        {
            id: 1,
            title: "개강은 왜 하는걸까",
            main: "왜 개강임? 개처럼강해지기는그냥힘들어",
            author: "살몬",
            likes: 47,
            date: "2034년 8월 14일",
            comments: 33
        },
        {
            id: 2,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 46,
            date: "2034년 8월 14일",
            comments: 33
        },
        {
            id: 3,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 47,
            date: "2034년 8월 14일",
            comments: 33
        },
        {
            id: 4,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 47,
            date: "2034년 8월 14일",
            comments: 33
        },
        {
            id: 5,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 47,
            date: "2034년 8월 14일",
            comments: 33
        },
        {
            id: 6,
            title: "게으르다고 쫓겨났다",
            main: "회사에서 게으르다고 쫓겨났다.",
            author: "살몬",
            likes: 47,
            date: "2034년 8월 14일",
            comments: 33
        }
    ];

    const [likeCounts, setLikeCounts] = useState(posts.map(post => post.likes));

    const handleLike = (index) => {
        const newLikeCounts = [...likeCounts];
        newLikeCounts[index] += 1;
        setLikeCounts(newLikeCounts);
    };

    return (
        <PageContainer>
            <FeedContainer>
                <FeedHeader>
                    <FeedHeaderTop>
                        <div>
                            <img
                                src="https://s3-alpha-sig.figma.com/img/26f2/3550/4b7c2c7e5f2e132c35e40c1d5f03069d?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nAFmJ41sDiFpGCWCtHFIGueG9Cqfo8YIUn2d5BjwzU18qz375TOKg22Pu8zXpRJTy0hc8wuMCI4fVp5twYAMQTgcBPcTtQ0HuEeePEKPsEtd0JYiZ7zqrLr1lPIz1Wbf~hbi5HFTJMTIzRwPjpM-8X~SElRMoMsHdSukQmaPQO7w-V3sOWY70rMf50b-2bXQLpCmESRCofshUhgRW9VzYH5MjGg4VEh6L9ij080Q4HY99ajjmqgU6lPyTWDGRxszy-6BeEpSiv2Gog4kqGoZQTPrX20vbW5tDUCt5xJ5A9eB6AD6IM6AQvob4z13EJCUyNvoTctAKr0RrZH6rEqAbw__"
                                alt=""
                                width="72px" />
                        </div>
                        <div>
                            <div style={{
                                flex: '0 1 auto',
                                display: 'flex',
                                gap: '10px',
                                alignItems: 'center'
                            }}>
                                <div>
                                    <Image src='/public/bell.png' />
                                    <Image src='/public/bell.png' />
                                    <ButtonIcon>새 글 작성</ButtonIcon>
                                </div>
                                <div style={{
                                    width: '20px',
                                    height: '20px',
                                    background: 'gray',
                                    borderRadius: '50%'
                                }}></div>
                            </div>
                        </div>
                    </FeedHeaderTop>
                    <FeedHeaderBottom>
                        <div>
                            트렌딩 최신 피드
                        </div>
                        <div>
                            <div>select</div>
                            <div>...</div>
                        </div>
                    </FeedHeaderBottom>
                </FeedHeader>
                <PostGrid>
                    {
                        posts.map((post, index) => (
                            <PostCard key={post.id}>
                                <PostImage />
                                <PostDetails>
                                    <PostTitle>{post.title}</PostTitle>
                                    <PostMain>{post.main}</PostMain>
                                    <PostMeta>
                                        <span>{post.date}</span>
                                        <PostActionMeta>{post.comments}개의 댓글</PostActionMeta>
                                    </PostMeta>
                                </PostDetails>
                                <PostActionContainer>
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

export default FeedPage;
