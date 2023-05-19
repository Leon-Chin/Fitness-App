import './App.less';
import Sidebar from './components/sidebar'
import SayHello from './components/sayHello'
import { useEffect, useState } from 'react';
import Contacts from './components/contacts'
import Statistic from './components/statistic'
import { ConfigProvider, theme } from 'antd';

function App() {
  const [currenttheme, setCurrenttheme] = useState('light')
  const [page, setPage] = useState('home')
  const [userInfo, setUserInfo] = useState({
    name: 'leon666',
    preferTheme: 'dark',
    avator: ''
  })

  useEffect(() => {
    console.log('page', page);
  }, [page])
  useEffect(() => {

  }, [])
  const lightAppClassname = currenttheme === 'light' ? 'App-light' : ''
  const lightDashboardClassname = currenttheme === 'light' ? 'dashboard-light' : ''
  const model1DashboardClassname = currenttheme === 'light' ? 'model1-light' : ''
  const trendDashboardClassname = currenttheme === 'light' ? 'trend-light' : ''
  const contendBoxRightDashboardClassname = currenttheme === 'light' ? 'contendBox-right-light' : ''


  return (
    <ConfigProvider
      theme={currenttheme === 'dark' ? {
        algorithm: theme.darkAlgorithm,
      } : {
        algorithm: theme.defaultAlgorithm,
      }}
    >
      <div className={`App ${lightAppClassname}`}>
        <div className={`dashboard ${lightDashboardClassname}`}>
          <Sidebar theme={currenttheme} setPage={setPage} setCurrenttheme={setCurrenttheme} />
          {page === 'home' && <div className='contentBox'>
            <div className='contendBox-left'>
              <SayHello theme={currenttheme} userName={userInfo.name} />
              <div className='contendBox-left-subTop'>
                <Contacts theme={currenttheme} />
                <Statistic theme={currenttheme} />
              </div>
              <div className='contendBox-left-subBottom'>
                <div className={`model1 ${model1DashboardClassname}`}></div>
                <div className={`trend ${trendDashboardClassname}`}></div>
              </div>
            </div>
            <div className={`contendBox-right ${contendBoxRightDashboardClassname}`}>

            </div>
          </div>}
        </div>
      </div>
    </ConfigProvider>
  );
}

export default App;
