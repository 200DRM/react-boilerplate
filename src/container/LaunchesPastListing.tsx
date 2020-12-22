import React, { useEffect, useState } from 'react';
import { useQuery } from '@apollo/react-hooks';
import { GET_LAUNCHES } from '../queries/getLaunchesPast';
import { Spinner } from '../components/Spinner/Spinner';

import { LaunchCard } from '../components/LaunchCard/LaunchCard';
import { LaunchPast } from '../components/models/LaunchPast';

interface GraphQlResult {
  launchesPast: LaunchPast[];
}

const ELEMENTS_LIMIT = 3;

export const LaunchesPastListing : React.FC = () => {
  const [offset, setOffset] = useState(0);
  const { error, loading, data } = useQuery<GraphQlResult>(GET_LAUNCHES, {
    variables : { offset, limit : ELEMENTS_LIMIT }
  });

  const [cards, setCards] = useState<LaunchPast[]>([]);

  const handleOnClick = () => setOffset(currentValue => currentValue += ELEMENTS_LIMIT);

  useEffect(() => {
    if (data?.launchesPast.length) {
      setCards([...cards, ...data.launchesPast]);
    }
  }, [data?.launchesPast]);

  if (error) {
    return <p>Oops, something went wrong.</p>
  }

  if (loading && !cards.length) {
    return <Spinner />;
  }

  if (!cards?.length) {
    return <p>No data.</p>
  }

  return (
    <section>
      <h2 style={{ textAlign: 'center' }}>Launches Past:</h2>
      {cards.map(mission => <LaunchCard key={mission.id} {...mission} />)}
      <button onClick={handleOnClick} type='button'>Load more</button>
    </section>
  );
};