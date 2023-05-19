import './App.less';
import Sidebar from './components/sidebar'
import SayHello from './components/sayHello'
import { useEffect, useState } from 'react';

function App() {
  const [theme, setTheme] = useState('light')
  const [page, setPage] = useState('home')
  const [userInfo, setUserInfo] = useState({
    name: 'leon666',
    preferTheme: 'dark',
  })

  useEffect(() => {
    console.log('page', page);
  }, [page])
  useEffect(() => {

  }, [])
  return (
    <div className="App">
      <Sidebar theme={theme} setPage={setPage} />
      {page == 'home' && <div className='contentBox'>
        <div className='contendBox-left'>
          <SayHello userName={userInfo.name} />
          <div className='contendBox-left-subTop'>
            <div className='contacts'></div>
            <div className='statistic'></div>
          </div>
          <div className='contendBox-left-subBottom'>
            <div className='model1'></div>
            <div className='trend'></div>
          </div>
        </div>
        <div className='contendBox-right'></div>
      </div>}
    </div>
  );
}

export default App;
