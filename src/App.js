import './App.less';
import Sidebar from './components/sidebar'

function App() {
  return (
    <div className="App">
      <div className='sidebar'>

      </div>
      <div className='contentBox'>
        <div className='contendBox-left'>
          <div className='sayHello'>
            Hello Leon <br />
            Welcome to the fitness app
          </div>
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
      </div>
    </div>
  );
}

export default App;
