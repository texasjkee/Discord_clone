import Chat from '../components/Chat/Chat';
import Sidebar from '../components/Sidebar/Sidebar';

import style from './App.module.scss';

const App = () => {
  return (
    <div className={style.App}>
      <Sidebar/>
      <Chat/>
    </div>
  );
};

export default App;