const { default: styled } = require('@emotion/styled');

export const StatisticsSection = styled.section`
  width: 450px;
  margin-top: 30px;
`;

export const StatisticsHeader = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 600;
  margin-bottom: 20px;
`;

export const StatisticsList = styled.ul`
  display: flex;
`;
export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;

  min-width: 90px;

  background-color: ${props => props.color};
  padding: 10px 0;
`;

// extends
export const StatisticsSpan = styled.span`
  font-size: 16px;
  font-weight: 600;
`;

export const StatisticsLabel = styled(StatisticsSpan)``;

export const StatisticsPercentage = styled(StatisticsSpan)`
  font-size: 24px;
`;
