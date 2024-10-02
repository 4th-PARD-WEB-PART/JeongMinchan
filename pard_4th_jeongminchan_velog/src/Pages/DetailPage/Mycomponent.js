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
  margin-top: 208px;
  padding-left: 20px;
`;

export const LeftSideBarContent = styled.div`
width: 64px;
height: 129px;
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
  font-size: 18px;
  font-weight: bold;
`;

export const Date = styled.span`
  font-size: 18px;
  color: #999;
`;

export const ButtonList = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const FeedContent = styled.div`
  font-size: 21px;
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
  color: #777;
`;

export const LinkList = styled.div`
  display: flex;
  width: 768px;
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

