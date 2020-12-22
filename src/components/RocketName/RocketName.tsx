import React from 'react';
import { Link } from 'react-router-dom';
import bemCssModules from 'bem-css-modules';
import { RocketViewModel } from '../models/RocketViewModel';
import { default as RocketNameStyles } from './RocketName.module.scss';

type RocketNameProps = Pick<RocketViewModel, 'name' | 'id'>;

const style = bemCssModules(RocketNameStyles);

export const RocketName: React.FC<RocketNameProps> = (
  { id, name }
) => (
  <Link className={style()} to={`/rocket/${id}`}>
    {name}
  </Link>
);

export default RocketName;