import React, { useState } from 'react';
import './Jokenpo.css';

const Jokenpo = () => {
  const [result, setResult] = useState('');
  const [humanScore, setHumanScore] = useState(0);
  const [machineScore, setMachineScore] = useState(0);
  const [machineChoice, setMachineChoice] = useState('');

  const playHuman = (humanChoice) => {
    const machineChoice = playMachine();
    setMachineChoice(machineChoice); // Armazena a escolha da máquina
    playTheGame(humanChoice, machineChoice);
  };

  const playMachine = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    return randomChoice;
  };

  const playTheGame = (human, machine) => {
    console.log('Human:', human, 'Machine:', machine);
    if (human === machine) {
      setResult('Deu empate');
    } else if (
      (human === 'paper' && machine === 'rock') ||
      (human === 'rock' && machine === 'scissors') ||
      (human === 'scissors' && machine === 'paper')
    ) {
      setHumanScore(prevScore => prevScore + 1);
      setResult('Você ganhou');
    } else {
      setMachineScore(prevScore => prevScore + 1);
      setResult('Você perdeu');
    }
  };

  return (
    <div className="container">
      <h1>JOKENPÔ</h1>
      <div className="buttons">
        <button id="rock" onClick={() => playHuman('rock')}>&#128074;</button>
        <button id="paper" onClick={() => playHuman('paper')}>&#128400;</button>
        <button id="scissors" onClick={() => playHuman('scissors')}>&#9996;</button>
      </div>
      <p className="result">{result}</p>
      <p className="machine-choice">A máquina jogou: {machineChoice}</p>
      <p className="yourPoint">Sua pontuação <span id="human-score">{humanScore}</span></p>
      <p className="botPoint">Pontuação do bot <span id="bot-score">{machineScore}</span></p>
    </div>
  );
};

export default Jokenpo;

