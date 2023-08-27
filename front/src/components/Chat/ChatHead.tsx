import EditLocationRoundedIcon from '@mui/icons-material/EditLocationAltRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import NotificationIcon from '@mui/icons-material/Notifications';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import HelpRoundedIcon from '@mui/icons-material/HelpRounded';

import style from './ChatHead.module.scss';

const ChatHead = () => {
  return (
    <div className={style.chatHead}>
      <h3>I am the header</h3>
      <div className={style.left}>
        <h3>
          <span className="hash">#</span>
          Test Channel Name
        </h3>
      </div>
      <div className={style.right}>
        <NotificationIcon />
        <EditLocationRoundedIcon />
        <PeopleAltRoundedIcon />
      </div>
      <div className={style.search}>
        <input type="text" placeholder='Seacrch' />
        <SearchRoundedIcon />
      </div>

      <SendRoundedIcon />
      <HelpRoundedIcon />
    </div>
  );
};

export default ChatHead;