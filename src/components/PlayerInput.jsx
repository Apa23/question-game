import React, { useState } from 'react';
import { Button } from 'react-bootstrap';


const PlayerInput = ({ addPlayer }) => {
  const [inputValue, setInputValue] = useState("");

  const handleINputChance = (e) => {
    setInputValue(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(inputValue!==""){

      addPlayer(inputValue)
    }
    setInputValue("");
  }


  return (
    <div className='player-input'>
      <form onSubmit={(e) => { handleSubmit(e) }}>
        <input type="text" onChange={(e) => handleINputChance(e)} value={inputValue}/>
        <Button variant="primary" type="submit" > Agregar </Button>
      </form>
    </div>
  )
}

export default PlayerInput
