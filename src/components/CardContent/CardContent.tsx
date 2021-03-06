import React from 'react';
import bemCssModules from 'bem-css-modules';

import { default as CardContentStyles } from './CardContent.module.scss';
import { LaunchDate } from '../LaunchDate/LaunchDate';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';
import MissionName from '../MissionName/MissionName';
import { RocketCountry } from '../RocketCountry/RocketCountry';
import { RocketName } from '../RocketName/RocketName';
import { RocketViewModel } from '../models/RocketViewModel';

const style = bemCssModules(CardContentStyles);

type CardContentProps = Omit<LaunchPastViewModel, 'image' | 'id'>;

export const CardContent: React.FC<CardContentProps> = props => {
  const rocket = new RocketViewModel(props.rocket);

  return (
    <div>
      <MissionName {...props} />
      <LaunchDate {...props} />
      <RocketName {...rocket} />
      <RocketCountry {...rocket} />
    </div>
  );
};