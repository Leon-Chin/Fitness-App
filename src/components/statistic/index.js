import React from 'react'

export default function Index(props) {
    const { theme } = props
    const statisticDashboardClassname = theme === 'light' ? 'statistic-light' : ''
    return (
        <div className={`statistic ${statisticDashboardClassname}`}>
            <div>
                Steps
            </div>
        </div>
    )
}
