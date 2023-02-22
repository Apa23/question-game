import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { questions } from '../assets/questions';
import "../styles/GameInterface.scss";

const GameInterface = ({ playerList }) => {
  const [player, setPlayer] = useState(playerList[0])
  const [selectedQuestion, setSelectedQuestion] = useState(questions[0])



  const handleNextPlayer = () => {
    let indexP = playerList.indexOf(player)
    indexP++
    if (indexP === playerList.length) {
      indexP = 0
    }
    setPlayer(playerList[indexP])

    let indexQ = questions.indexOf(selectedQuestion)
    indexQ++
    if (indexQ === questions.length) {
      indexQ = 0
    }
    setSelectedQuestion(questions[indexQ])

  }

  return (
    <div className='game-display'>
      <div className='display-header'>
        <Link to='/'> {'<'} </Link>
        <h1>{player}</h1>
      </div>
      <div className='question-container'>
        <p className='question-id'>Pregunta {questions.indexOf(selectedQuestion)+1}:</p>
        <p className='question'>{selectedQuestion.question}</p>
      </div>
      <Button variant="primary" type="submit" onClick={handleNextPlayer}> Siguiente </Button>
    </div>
  )
}

export default GameInterface
