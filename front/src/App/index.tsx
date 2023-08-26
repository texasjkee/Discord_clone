import Chat from '../components/Chat/Chat';
import Sidebar from '../components/Sidebar/Sidebar';

import style from './App.module.css';

const App = () => {
  return (
    <div className="App">
      <Sidebar/>
      <Chat/>
    </div>
  );
};

export default App;