import AddCircleIcon from '@mui/icons-material/AddCircle';
import { CardGiftcard, EmojiEmotions, Gif } from '@mui/icons-material';

import ChatHead from './ChatHead';
import Message from './Message';

import style from './Chat.module.scss';

const Chat = () => {
  return (
    <div className={style.chat}>
      <ChatHead />

      <div className={style.messages}>
        <Message />
      </div>
      <div className={style.input}>
        <AddCircleIcon fontSize='large' />
        <form action="">
          <input type='text' placeholder='Message #TestChannel' />
          <button type='submit'>Send Message</button>
        </form>
      </div>

      <div className={style.inputIcons}>
        <CardGiftcard fontSize='large' />
        <Gif fontSize='large' />
        <EmojiEmotions fontSize='large' />
      </div>
    </div>
  );
};

export default Chat;