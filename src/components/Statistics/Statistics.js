import PropTypes from 'prop-types';
import { StatisticsBox, TitleBox, StatList, Item } from './Statistics.styled';

function Statistics({ title, stats }) {
  return (
    <StatisticsBox>
      {title && <TitleBox>{title}</TitleBox>}

      <StatList>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <span>{label}</span>
              <span>{percentage}</span>
            </Item>
          );
        })}
      </StatList>
    </StatisticsBox>
  );
}
Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
