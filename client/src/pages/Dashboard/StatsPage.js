import { useEffect } from 'react';
import { useAppContext } from '../../context/appContext';
import { StatsContainer, Loading } from '../../components';
import React from 'react';

const StatsPage = () => {
  const { showStats, isLoading } = useAppContext();
  useEffect(() => {
    showStats();
  }, []);

  if (isLoading) {
    return <Loading center />;
  }

  return <StatsContainer />;
  // return <div>Stats page</div>;
};

export default StatsPage;
