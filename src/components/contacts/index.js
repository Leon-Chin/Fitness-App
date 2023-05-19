import React from 'react'

export default function Index(props) {
    const { theme } = props
    const contactsDashboardClassname = theme === 'light' ? 'contacts-light' : ''
    return (
        <div className={`contacts ${contactsDashboardClassname}`}>
            <div className='header' style={{ fontWeight: 500, fontsize: 24 }}>
                Contacts
            </div>
        </div>
    )
}
