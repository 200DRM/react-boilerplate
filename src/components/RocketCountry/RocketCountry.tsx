import React from 'react';
import bemCssModules from 'bem-css-modules';
import { Rocket } from '../models/Rocket';

import { default as RocketCountryStyles } from './RocketCountry.module.scss';

type RocketCountryProps = Pick<Rocket, 'country'>;

const style = bemCssModules(RocketCountryStyles);

export const RocketCountry : React.FC<RocketCountryProps> = (
  { country }
) => (
  <p className={style()}>
    {country}
  </p>
);