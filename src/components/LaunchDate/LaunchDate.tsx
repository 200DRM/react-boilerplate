import React from 'react';
import bemCssModules from 'bem-css-modules';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';
import { default as LaunchDateStyles } from './LaunchDate.module.scss';

type LaunchDateProps = Pick<LaunchPastViewModel, 'launchDateLocal'>;

const style = bemCssModules(LaunchDateStyles);

export const LaunchDate: React.FC<LaunchDateProps> = (
  { launchDateLocal }
) => (
  <p className={style()}>
    Mission date
    <time dateTime={launchDateLocal.toISOString()}>{launchDateLocal.toLocaleDateString()}</time>
  </p>
);