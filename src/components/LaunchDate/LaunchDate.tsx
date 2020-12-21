import React from 'react';
import { LaunchPastViewModel } from '../models/LaunchPastViewModel';

type LaunchDateProps = Pick<LaunchPastViewModel, 'launchDateLocal'>;

export const LaunchDate: React.FC<LaunchDateProps> = (
  { launchDateLocal }
) => (
  <p>
    Mission date
    <time dateTime={launchDateLocal}>{launchDateLocal.toLocaleDateString()}</time>
  </p>
);