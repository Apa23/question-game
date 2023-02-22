import React from 'react'
import { Link } from 'react-router-dom';
import PlayerInput from './PlayerInput'
import PlayerLayer from './PlayerLayer'
import '../styles/PlayerDisplay.scss';


const PlayerDisplay = ({playerList, handlePlayerList}) => {

  const addPlayer = (player) => {
    if (!playerList.some(indexedPlayer => indexedPlayer === player)) {
      handlePlayerList([...playerList, player])
    }
  }

  const deletePlayer = (player) => {
    handlePlayerList(playerList.filter(indexedPlayer => { return indexedPlayer !== player }))

  }
  return (
    <div className='player-display'>
      <div className='display-header'>
        <h1>Jugadores:</h1>
        <Link to='/game'> {'>'} </Link>
      </div>
      <div className='player-list'>
        <ol>
          {
            playerList.map((player, index) => (<li key={index} ><PlayerLayer player={player} deletePlayer={deletePlayer} /></li>))
          }
        </ol>
      </div>
      <PlayerInput addPlayer={addPlayer} />
    </div>
  )
}

export default PlayerDisplay
