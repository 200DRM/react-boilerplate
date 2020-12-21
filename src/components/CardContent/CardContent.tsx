import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as CardContentStyles } from './CardContent.module.scss';
import { LaunchDate } from '../LaunchDate/LaunchDate';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';
import MissionName from '../MissionName/MissionName';

const style = bemCssModules(CardContentStyles);

type CardContentProps = Omit<LaunchPastViewModel, 'image' | 'id'>;

export const CardContent: React.FC<CardContentProps> = props => {
  return (
    <div>
      <MissionName {...props} />
      <LaunchDate {...props} />
    </div>
  );
};