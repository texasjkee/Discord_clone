import { Avatar } from '@mui/material';
import style from './Message.module.scss';

const Message = () => {
  return (
    <div className={style.message}>
      <Avatar />
      <div className={style.info}>
        <h4>texasjkee
          <span className={style.timestamp}> this is timestap</span>
        </h4>
      </div>
    </div>
  );
};

export default Message;