import PropTypes from 'prop-types';

import { ListFriend } from './FriendList.styled';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ListFriend>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          name={friend.name}
          isOnline={friend.isOnline}
          avatar={friend.avatar}
        />
      ))}
    </ListFriend>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
};

export default FriendList;
