import React from 'react';

const VoteAverage = ({ vote, className = '', size , dix=false}) => {
  // Vérification si vote est une valeur valide, sinon définir 0 comme valeur par défaut
  const roundVote = vote ? Math.round(vote * 10) / 10 : 0;

  return (
    <div className={className}>
      <span className={`${size} `}>
        {roundVote}  {dix && <span className="ml-2 text-text-secondary">/10</span>}
      </span>
    </div>
  );
};

export default VoteAverage;
