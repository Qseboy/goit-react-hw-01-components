import PropTypes from 'prop-types';
import { FriendListUl, FriendItem, FriendStatus, FriendAvatar, FriendName } from './friendList.styled';

export default function FriendList({friends}) {
    
    return <FriendListUl>
        {friends.map((el) => {
            return <FriendItem key={el.id}>
                <FriendStatus>
                    {el.isOnline ? <FriendStatus color='green'></FriendStatus> : <FriendStatus color='red'></FriendStatus>}
                </FriendStatus>
                <FriendAvatar src={el.avatar} alt={el.name}></FriendAvatar>
                <FriendName>{el.name}</FriendName>
            </FriendItem>
        })}
</FriendListUl>
}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        avatar: PropTypes.string,
        name: PropTypes.string,
        isOnline: PropTypes.bool,
        id: PropTypes.number
    }))
}