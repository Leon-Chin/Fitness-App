import React, { useState, useEffect } from 'react'
import { Avatar, Divider, List, Skeleton } from 'antd';

export default function Index(props) {
    const { theme } = props
    const contactsDashboardClassname = theme === 'light' ? 'contacts-light' : ''
    return (
        <div className={`contacts ${contactsDashboardClassname}`}>
            <div className='header' style={{ fontWeight: 500, fontsize: 24, paddingLeft: 20, paddingTop: 10, fontWeight: 700 }}>
                Contacts
            </div>
            <div className='contactlist' style={{ hight: '80%', width: "100%" }}>

            </div>
        </div>
    )
}
