import React from 'react';
import { CardContent } from '../CardContent/CardContent';
import CardImage from '../CartImage/CardImage';
import { LaunchPast } from '../models/LaunchPast';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';

export const LaunchCard : React.FC<LaunchPast> = props => {

  const data = new LaunchPastViewModel(props);

  return (
    <article>
      <CardImage {...data } />
      <CardContent {...data} />
    </article>
  );
};