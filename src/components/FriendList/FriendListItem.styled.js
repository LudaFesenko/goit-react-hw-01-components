import styled from '@emotion/styled';

export const StatusOnline = styled.span`
  color: ${props => (props.isOnline ? 'green' : 'red')};
`;

export const Item = styled.li`
  display: flex;
  text-align: center;
  align-items: center;
  gap: 20px;
  box-shadow: ${props =>
    `1px 1px 3px 1px ${props.theme.colors.primaryGrayColor}`};

  padding: ${props => props.theme.spacing(4)};
  margin-bottom: ${props => props.theme.spacing(6)};
`;

export const ImgAvatar = styled.img`
  margin-left: ${props => props.theme.spacing(7)};
`;
