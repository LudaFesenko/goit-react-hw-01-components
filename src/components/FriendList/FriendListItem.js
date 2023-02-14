import PropTypes from 'prop-types';
import { FaCircle } from 'react-icons/fa';

import { StatusOnline, Item, ImgAvatar } from './FriendListItem.styled';

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <Item>
      <StatusOnline isOnline={isOnline}>
        <FaCircle />
      </StatusOnline>
      <ImgAvatar src={avatar} alt="User avatar" width="48" />
      <p>{name}</p>
    </Item>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
