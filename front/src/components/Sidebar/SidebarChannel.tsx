import { FC } from 'react';

import style from './SidebarChannel.module.scss';

interface SidebarChannelProps {
  id: string;
  channel: string;
};

const SidebarChannel: FC<SidebarChannelProps> = ({ id, channel }) => {
  return (
    <div className={style.sidebarChannel}>
      <h4>
        <span className={style.hash}>#</span> Genereal
      </h4>
    </div>
  );
};

export default SidebarChannel;