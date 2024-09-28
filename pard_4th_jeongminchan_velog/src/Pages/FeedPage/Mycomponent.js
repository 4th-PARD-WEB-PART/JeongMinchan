import styled from "styled-components";

// 전체 페이지 컨테이너
export const PageContainer = styled.div`
  background-color: #f9fafb;
  padding: 30px;
  min-height: 100vh;
`;

// Feed 컨테이너
export const FeedContainer = styled.div`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 20px;
  background-color: #ffffff;
`;

// 헤더 섹션
export const FeedHeader = styled.div`
  display: flex;
  flex-direction: column; // Stack children vertically
  justify-content: space-between;
  
`;

// 헤더 상단 섹션
export const FeedHeaderTop = styled.div`
  flex: 1; // Take up half the height
  display: flex; // Use flexbox for layout
  align-items: center; // Center items vertically
  justify-content: space-between; // Space items evenly
`;

// 헤더 하단 섹션
export const FeedHeaderBottom = styled.div`
  flex: 1; 
  display: flex;
  align-items: center;
  justify-content: space-between;
`;


// 포스트 그리드
export const PostGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 20px;
`;

// 포스트 카드
export const PostCard = styled.div`
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

// 포스트 이미지
export const PostImage = styled.div`
  background-color: #F96969;
  ;
  height: 180px;
  width: 100%;
`;

// 포스트 세부 정보
export const PostDetails = styled.div`
  padding: 16px;
  height: 180px; // Fixed height to match PostImage
  display: flex;
  flex-direction: column;
`;

// 포스트 제목
export const PostTitle = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 8px;
`;

// 포스트 내용

export const PostMain = styled.p`
  flex-grow: 1; // Makes the main text take available space
`;

// 포스트 메타 정보
export const PostMeta = styled.div`
  display: flex;
  margin-bottom: 12px;
  font-size: 14px;
  color: #868e96;

  span {
    color: #adb5bd;
  }
`;

// 포스트 작성자
export const PostAuthor = styled.span`
  font-weight: bold;
  color: #495057;
`;

// 작성자 표시 및 좋아요 영역
export const PostActionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 16px; // Padding inside the container
  border-top: 2px solid #F1F3F5; // Line above the container
`;

export const PostActionMeta = styled.span`
  font-size: 14px;
  color: #868e96;
  margin-left: 12px;
`;

// 좋아요 아이콘
export const LikeIcon = styled.span`
  font-size: 14px;
  color: #ff6b6b;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`;

// 버튼 아이콘
export const ButtonIcon = styled.button`
  font-size: 14px;
  align-items: center;
  width: 100px;
  height: 33px;

  &:hover {
    background-color: #f8f9fa;
  }
font-weight: bold;
border-radius: 16.5px;
border: 1px solid black;


`;

export const StyledImage = styled.img`
  width: 15px;
  height: 15px;
  object-fit: cover;
`;