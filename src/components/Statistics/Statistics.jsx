import getRandomHexColor from "api/getRandomColor";
import { StatisticsSection, StatisticsHeader, StatisticsList, StatisticsItem, StatisticsLabel, StatisticsPercentage } from "./statistics.styled";
import PropTypes from 'prop-types';

export default function Statistics({ title, stats }) {
    return (
        <StatisticsSection>
            {title && <StatisticsHeader>{title}</StatisticsHeader>}
            <StatisticsList>
                {stats.map((el) => {
                    const color = getRandomHexColor()
                    return <StatisticsItem key={el.id} color={color}>
                        <StatisticsLabel>{el.label}</StatisticsLabel>
                        <StatisticsPercentage>{el.percentage}%</StatisticsPercentage>
                    </StatisticsItem>
               })}
            </StatisticsList>
        </StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.shape({
         id: PropTypes.string,
         label: PropTypes.string,
         precentage: PropTypes.number
     })
 )}