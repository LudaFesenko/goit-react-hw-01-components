import styled from '@emotion/styled';
import { theme } from 'constants/theme';

export const ProfileCard = styled.div`
  width: 400px;
  margin: 0 auto;
  margin-top: ${props => props.theme.spacing(5)};
  text-align: center;
  box-shadow: ${props =>
    `1px 1px 5px 1px ${props.theme.colors.primaryGrayColor}`};
`;

export const DescriptionCard = styled.div`
  padding: ${props => props.theme.spacing(4)};
`;

export const ImgCard = styled.img`
  width: 50%;
  text-align: center;
  margin-bottom: ${props => props.theme.spacing(3)};
  background-color: ${props => props.theme.colors.grayTableRow};
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 15px;
`;

export const Info = styled.p`
  font-size: 20px;
  font-weight: 600;
  color: ${props => props.theme.colors.primaryGrayColor};
  margin-bottom: ${props => props.theme.spacing(3)};
`;

export const Stats = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 20px 0px;
  background-color: ${props => props.theme.colors.grayTableRow};
  gap: 15px;
`;

export const Label = styled.span`
  font-size: 17px;
  font-weight: 600;
  color: ${theme.colors.primaryGrayColor};
`;

export const Quantity = styled.span`
  font-weight: 600;
`;

export const ItemList = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
