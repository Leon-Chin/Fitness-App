import React from 'react'
import './card.less'
import { Space, Progress, ConfigProvider } from 'antd'
export default function Card(props) {
    const { cardInfo } = props
    const { title, number, percentage } = cardInfo
    const data = {
        borderRadius: 6,
        colorPrimary: '#ffffff',
    };
    return (
        <div className='card'>
            <div className='cardLeft'>
                <div className='title'>{title}</div>
                <div className='number'>{number}</div>
                <div className='percentage'>{percentage} inc than tommorrow</div>
            </div>
            <div className='cardRight'>
                <ConfigProvider
                    theme={{
                        token: {
                            colorPrimary: data.colorPrimary,
                            borderRadius: data.borderRadius,
                        },
                    }}
                >
                    <Progress
                        className='diagram'
                        type="circle"
                        percent={70}
                        strokeWidth={8}
                    />
                </ConfigProvider>
            </div>
        </div>
    )
}
