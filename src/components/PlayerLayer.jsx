import React from 'react';
import { Button } from 'react-bootstrap';

const PlayerLayer = ({ player, deletePlayer}) => {

  const handleDelte = () => {
    deletePlayer(player)
  };

  return (
    <div className='player-layer'>
      <p>{player}</p>
      <Button variant="outline-primary" onClick={handleDelte}>X</Button>
    </div>
  )
}

export default PlayerLayer
