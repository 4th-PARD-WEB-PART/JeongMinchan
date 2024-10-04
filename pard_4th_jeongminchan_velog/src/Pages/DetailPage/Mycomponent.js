import styled from 'styled-components';

export const BaseContainer = styled.div`
  width: 1800px;
  height: 1000px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainContainer = styled.div`
  width: 1000px;
  height: inherit;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;


export const Header = styled.div`
  width: 1000px;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 10px;
  
`;

export const Content = styled.div`
  display: flex;
  margin-top: 20px;
  line-height: 2em;
`;

export const LeftSideBar = styled.div`
  width: 64px;
  display: flex;
  flex-direction: row;
  margin-top: 288px;
  padding-left: 20px;
`;

export const LeftSideBarContent = styled.div`
width: 64px;
height: 149px;
background: #F8F9FA;
border-radius: 32px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`;

export const FeedContainer = styled.div`
  flex: 3;
  padding-top: 100px;
  padding-left: 60px;
`;

export const FeedTitle = styled.div`
  font-size: 56px;
  font-weight: bold;
  margin-bottom: 50px;
`;

export const FeedInfo = styled.div`
  width: 765px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 100px;
`;

export const Name = styled.span`
  font-size: 14px;
  font-weight: bold;
`;

export const Date = styled.span`
  font-size: 14px;
  color: black;
`;

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  color: #858E96;
  

  gap: 10px;
`;

export const FeedContent = styled.div`
  font-size: 15px;
  margin-bottom: 250px;
`;

export const Heart = styled.div`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  color: black;
`;

export const FeedAuthorInfo = styled.div`
  display: flex;
  align-items: center;
`;

export const AuthorImage = styled.div`
  width: 132px;
  height: 132px;
  background-color: #ccc;
  border-radius: 50%;
  margin-right: 10px;
`;

export const AuthorName = styled.div`
  font-size: 18px;
  font-weight: bold;
  line-height: 30px;
`;

export const AuthorInfo = styled.div`
  font-size: 14px;
  color: black;
`;

export const LinkList = styled.div`
  margin-top: 27.5px;
  display: flex;
  gap: 10px;
`;

export const StyledImage = styled.img`
  width: ${({ width }) => width || 'auto'}; 
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  span {
    color: D9D9D9;
  }
`;

export const Radius = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 10px;
  margin-top:10px;
  border-radius: 50%;
  border: 1px solid #dee2e6;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Line = styled.div`
width: 768px;
margin-top: 28px;
border-bottom: 1px solid #dee2e6;
`;