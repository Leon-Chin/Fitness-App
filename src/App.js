import './App.less';
import Sidebar from './components/sidebar'
import SayHello from './components/sayHello'
import { useEffect, useState } from 'react';

function App() {
  const [page, setPage] = useState('home')
  useEffect(() => {
    console.log('page', page);
  }, [page])
  return (
    <div className="App">
      <Sidebar setPage={setPage} />
      {page == 'home' && <div className='contentBox'>
        <div className='contendBox-left'>
          <SayHello />
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
