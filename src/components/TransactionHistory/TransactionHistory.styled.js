import styled from '@emotion/styled';

export const Table = styled.table`
  border-collapse: collapse;
  border: ${props => `3px solid ${props.theme.colors.grayBasic}`};
  width: 800px;
  margin: 0 auto;
`;

export const Thead = styled.thead`
  border: ${props => `1px solid ${props.theme.colors.grayBasic}`};
  color: ${props => props.theme.colors.white};
  font-size: 18px;
  background-color: ${props => props.theme.colors.grayDark};
`;

export const TitleThead = styled.th`
  padding: ${props => props.theme.spacing(4)};
  border: ${props => ` 2px solid ${props.theme.colors.grayBasic}`};
`;

export const Body = styled.tbody`
  text-align: center;
`;

export const Cell = styled.td`
  padding: ${props => props.theme.spacing(4)};
  border: ${props => `2px solid ${props.theme.colors.grayBasic}`};
`;

export const Row = styled.tr`
  &:nth-of-type(even) {
    background-color: ${props => props.theme.colors.grayTableRow};
  }
`;
