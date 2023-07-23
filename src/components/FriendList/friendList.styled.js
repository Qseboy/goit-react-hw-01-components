const { default: styled } = require('@emotion/styled');

export const FriendListUl = styled.ul`
  margin-top: 50px;
`;

export const FriendItem = styled.li`
  display: flex;
  gap: 15px;
  align-items: center;
`;

export const FriendName = styled.span`
  font-size: 18px;
  font-weight: 600;
`;

export const FriendStatus = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${props => props.color};
`;

export const FriendAvatar = styled.img`
  width: 60px;
`;
