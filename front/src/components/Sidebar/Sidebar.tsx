import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt'
import InfoOutLinedIcon from '@mui/icons-material/InfoOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SettingsIcon from '@mui/icons-material/Settings';
import HeadsetIcon from '@mui/icons-material/Headset';
import CallIcon from '@mui/icons-material/Call';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import Avatar from '@mui/material/Avatar';

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

        <div className={style.voice}>
          <SignalCellularAltIcon
            className={style.voiceIcon}
            fontSize="large"
          />
          <div className={style.voiceInfo}>
            <h3>Voice Connected</h3>
            <p>Stream</p>
          </div>
          <div className={style.voiceIcons}>
            <InfoOutLinedIcon/>
            <CallIcon/>
          </div>
        </div>

        <div className={style.profile}>
          <Avatar/>
          <div className={style.profileInfo}>
           <h3>@texasjkee</h3> 
           <p>#thisIsMyID</p>
          </div>
          <div className={style.profileIcons}>
            <MicIcon/>
            <HeadsetIcon/>
            <SettingsIcon/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;