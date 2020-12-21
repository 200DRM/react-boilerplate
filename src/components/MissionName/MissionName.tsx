import React from 'react';
import bemCssModules from 'bem-css-modules';
import { default as MissionNameStyles } from './MissionName.module.scss';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';

type MissionNameProps = Pick<LaunchPastViewModel, 'missionName' | 'articleLink'>;

const style = bemCssModules(MissionNameStyles);

export const MissionName : React.FC<MissionNameProps> = (
  { articleLink, missionName }
) => {
  return (
    <a className={style()} href={articleLink}>
      <strong>{missionName}</strong>
    </a>
  );
};

export default MissionName;