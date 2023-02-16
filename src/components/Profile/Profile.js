import PropTypes from 'prop-types';

import {
  ProfileCard,
  DescriptionCard,
  ImgCard,
  UserName,
  Info,
  Stats,
  Label,
  Quantity,
  ItemList,
} from './Profile.styled';

function Profile({
  avatar,
  username,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <ProfileCard>
      <DescriptionCard>
        <ImgCard src={avatar} alt="User avatar" />
        <UserName>{username}</UserName>
        <Info>@{tag}</Info>
        <Info>{location}</Info>
      </DescriptionCard>

      <Stats>
        <ItemList>
          <Label>Folowers</Label>
          <Quantity>{followers}</Quantity>
        </ItemList>
        <ItemList>
          <Label>Views</Label>
          <Quantity>{views}</Quantity>
        </ItemList>
        <ItemList>
          <Label>Likes</Label>
          <Quantity>{likes}</Quantity>
        </ItemList>
      </Stats>
    </ProfileCard>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};

export default Profile;
