import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

import style from './Sidebar.module.scss';

const Sidebar = () => {
  return (
    <div className={style.sidebar}>
      <div className={style.top}>
        <h3> I'am a sidebar</h3>
        <ExpandMoreIcon />
      </div>

      <div className={style.channels}>
        <div className={style.channels}>
          <div className={style.channels__header}>
            <ExpandMoreIcon />
            <h4>Text Channels</h4>
          </div>

          <AddIcon className={style.add__channel} />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;