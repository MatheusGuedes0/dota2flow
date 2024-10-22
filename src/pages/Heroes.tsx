import React from 'react';
import HeroCards from 'src/components/HeroCards';

const Heroes: React.FC = () => (
  <div>
    <h1 className="text-4xl font-bold text-center py-8">Heróis do Dota 2</h1>
    <HeroCards />
  </div>
);

export default Heroes;
