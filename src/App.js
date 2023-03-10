import React from 'react';
import Amazing from './components/Amazing';
import TopCollection from './components/TopCollection';
import DiscoverCollect from './components/DiscoverCollect';
import Feature from './components/Feature';
import Sell from './components/Sell';
import DiscoverMoreNft from './components/DiscoverMoreNft';

function App() {
  return (
    <div>
      <DiscoverCollect />  
      <Amazing /> 
      <TopCollection /> 
      <Feature /> 
      <Sell />
      <DiscoverMoreNft />
    </div>
  );
}

export default App;
