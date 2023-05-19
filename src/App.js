import './App.less';
import Sidebar from './components/sidebar'
import SayHello from './components/sayHello'
import { useEffect, useState } from 'react';
import Contacts from './components/contacts'
import Statistic from './components/statistic'
function App() {
  const [theme, setTheme] = useState('dark')
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
  const lightAppClassname = theme === 'light' ? 'App-light' : ''
  const lightDashboardClassname = theme === 'light' ? 'dashboard-light' : ''
  const model1DashboardClassname = theme === 'light' ? 'model1-light' : ''
  const trendDashboardClassname = theme === 'light' ? 'trend-light' : ''
  const contendBoxRightDashboardClassname = theme === 'light' ? 'contendBox-right-light' : ''


  return (
    <div className={`App ${lightAppClassname}`}>
      <div className={`dashboard ${lightDashboardClassname}`}>
        <Sidebar theme={theme} setPage={setPage} />
        {page === 'home' && <div className='contentBox'>
          <div className='contendBox-left'>
            <SayHello theme={theme} userName={userInfo.name} />
            <div className='contendBox-left-subTop'>
              <Contacts theme={theme} />
              <Statistic theme={theme} />
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
  );
}

export default App;
