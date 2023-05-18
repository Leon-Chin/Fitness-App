import React, { useState, useRef, useEffect } from 'react'
import {
    VideoCameraTwoTone,
    HomeTwoTone,
    MessageTwoTone,
    CalendarTwoTone,
    SettingTwoTone,
    AntDesignOutlined
} from '@ant-design/icons';
import { Avatar, Popover, ConfigProvider } from 'antd';
import './index.less'
export default function Index(props) {
    const [clicked, setClicked] = useState(false);
    const { setPage } = props
    const [selectPage, setSelectPage] = useState('home');
    const navRef = useRef(null);
    const [navShrink, setNavShrink] = useState()
    useEffect(() => {
        console.log("props", props);
        handleResize()
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])
    useEffect(() => {
        setPage(selectPage)
    }, [selectPage])
    const handleResize = () => {
        if (navRef.current) {
            console.log(window.innerWidth);
            setNavShrink(navRef.current.offsetWidth < 90);
        }
    }
    const handleClickChange = (open) => {
        setClicked(open);
    };
    const hide = () => {
        setClicked(false);
    };
    return (
        <div className='sidebar'>
            <div className='content'>
                <div className='logo'>
                    Fitness
                </div>
                <div className='navigationBar'>
                    <div className='navigation' ref={navRef} onClick={() => setSelectPage('home')}>
                        <HomeTwoTone className={navShrink ? 'navigationCenteredItem' : 'navigationItem'} twoToneColor={selectPage == 'home' ? '#4e8df5' : "#3d3d3d"} style={{ fontSize: 18 }} />
                        {!navShrink && <span className='navigationName navigationItem'>Home</span>}
                    </div>
                    <div className='navigation' onClick={() => setSelectPage('chat')}>
                        <MessageTwoTone className={navShrink ? 'navigationCenteredItem' : 'navigationItem'} twoToneColor={selectPage == 'chat' ? '#4e8df5' : "#3d3d3d"} style={{ fontSize: 18 }} />
                        {!navShrink && <span className='navigationName navigationItem'>Chat</span>}
                    </div>
                    <div className='navigation' onClick={() => setSelectPage('calender')}>
                        <CalendarTwoTone className={navShrink ? 'navigationCenteredItem' : 'navigationItem'} twoToneColor={selectPage == 'calender' ? '#4e8df5' : "#3d3d3d"} style={{ fontSize: 18 }} />
                        {!navShrink && <span className='navigationName navigationItem'>Calender</span>}
                    </div>
                    <div className='navigation' onClick={() => setSelectPage('tutorial')}>
                        <VideoCameraTwoTone className={navShrink ? 'navigationCenteredItem' : 'navigationItem'} twoToneColor={selectPage == 'tutorial' ? '#4e8df5' : "#3d3d3d"} style={{ fontSize: 18 }} />
                        {!navShrink && <span className='navigationName navigationItem'>Tutorial</span>}
                    </div>
                    <div className='navigation' onClick={() => setSelectPage('setting')}>
                        <SettingTwoTone className={navShrink ? 'navigationCenteredItem' : 'navigationItem'} twoToneColor={selectPage == 'setting' ? '#4e8df5' : "#3d3d3d"} style={{ fontSize: 18 }} />
                        {!navShrink && <span className='navigationName navigationItem'>Setting</span>}
                    </div>
                </div>
                <div className='avator'>
                    <ConfigProvider
                        theme={{
                            token: {
                                colorPrimary: '#949494',
                            },
                        }}
                    >
                        <Popover
                            content={
                                <div>
                                    clickContent
                                    <a onClick={hide}>Close</a>
                                </div>
                            }
                            placement="rightBottom"
                            title="Click title"
                            trigger="click"
                            open={clicked}
                            onOpenChange={handleClickChange}
                        >
                            <Avatar
                                size={{
                                    xs: 24,
                                    sm: 32,
                                    md: 40,
                                    lg: 64,
                                    xl: 80,
                                    xxl: 100,
                                }}
                                icon={<AntDesignOutlined />}
                            />
                        </Popover>
                    </ConfigProvider>
                </div>
            </div>
        </div>
    )
}
