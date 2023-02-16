import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  TitleThead,
  Cell,
  Body,
  Row,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <tr>
          <TitleThead>Type</TitleThead>
          <TitleThead>Amount</TitleThead>
          <TitleThead>Currency</TitleThead>
        </tr>
      </Thead>

      <Body>
        {items.map(({ id, type, amount, currency }) => (
          <Row key={id}>
            <Cell>{type}</Cell>
            <Cell>{amount}</Cell>
            <Cell>{currency}</Cell>
          </Row>
        ))}
      </Body>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
