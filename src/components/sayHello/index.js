import React from 'react'
import WORDS from '../../constant/words'
import COLOR from '../../constant/color'
export default function Index(props) {
    const { userName } = props
    return (
        <div className='sayHello'>
            <div style={{ fontWeight: 800, fontSize: '30px' }}>Hello {userName}</div>
            Welcome to the {WORDS.logoName}
        </div>
    )
}
