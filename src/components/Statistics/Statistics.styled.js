import styled from '@emotion/styled';

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

export const StatisticsBox = styled.section`
  width: 400px;
  margin: 0 auto;
`;

export const TitleBox = styled.h2`
  text-align: center;
  margin-bottom: ${props => props.theme.spacing(5)};
  margin-top: ${props => props.theme.spacing(12)};
`;

export const StatList = styled.ul`
  display: flex;
  height: 70px;
  margin-bottom: ${props => props.theme.spacing(5)};
  text-align: center;
  justify-content: center;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  padding: ${props => props.theme.spacing(4)};
  background-color: ${getRandomColor};
`;
