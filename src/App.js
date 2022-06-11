import MainCard from './components/MainCard';
import MyBalance from './components/MyBalance';
import './index.css';
const data = require('./data.json')

function App() {
  return (
    <div className="App bg-cream flex justify-center  ">
      <div className="h-screen max-h-screen flex flex-col py-6 px-4 justify-center w-1/2">
        <MyBalance balance={"$921.48"}/>
        <MainCard data={data} />
      </div>
    </div>
  );
}

export default App;
