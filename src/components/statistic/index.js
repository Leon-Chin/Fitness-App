import React from 'react'
import Card from './card'

export default function Index(props) {
    const { theme } = props
    const statisticDashboardClassname = theme === 'light' ? 'statistic-light' : ''
    const cardsInfo = {
        steps: {
            title: 'Steps',
            number: '26888',
            percentage: '10%'
        }
    }

    return (
        <div className={`statistic ${statisticDashboardClassname}`}>
            <Card cardInfo={cardsInfo.steps} />
        </div>
    )
}
