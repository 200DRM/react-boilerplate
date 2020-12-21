import React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LAUNCHES } from '../queries/getLaunchesPast';
import { Spinner } from '../components/Spinner/Spinner';

import { LaunchCard } from '../components/LaunchCard/LaunchCard';
import { LaunchPast } from '../components/models/LaunchPast';

interface GraphQlResult {
  launchesPast: LaunchPast[];
}

export const LaunchesPastListing : React.FC = () => {

  const { error, loading, data } = useQuery<GraphQlResult>(GET_LAUNCHES);

  if (error) {
    return <p>Oops, something went wrong.</p>
  }

  if (loading) {
    return <Spinner />
  }

  if (!data?.launchesPast) {
    return <p>No data.</p>
  }

  return (
    <section>
      <h2>Launches Past:</h2>
      {data.launchesPast.map(mission => <LaunchCard key={mission.id} {...mission} />)}
      <button type='button'>Load more</button>
    </section>
  );
};