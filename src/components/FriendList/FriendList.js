import PropTypes from 'prop-types';

import { ListFriend } from './FriendList.styled';
import FriendListItem from './FriendListItem';

function FriendList({ friends }) {
  return (
    <ListFriend>
      {friends.map(({ id, name, isOnline, avatar }) => (
        <FriendListItem
          key={id}
          name={name}
          isOnline={isOnline}
          avatar={avatar}
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
  ).isRequired,
};

export default FriendList;
