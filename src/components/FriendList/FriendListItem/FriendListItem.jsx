import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendAvatar, FriendName } from "../friendList.styled";

export default function FriendListItem({isOnline, avatar, name}) {
    return (
        <FriendItem>
            <FriendStatus>
                {isOnline ? <FriendStatus color='green'></FriendStatus> : <FriendStatus color='red'></FriendStatus>}
            </FriendStatus>
            <FriendAvatar src={avatar} alt={name}></FriendAvatar>
            <FriendName>{name}</FriendName>
        </FriendItem>
    )
}

FriendListItem.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
}
