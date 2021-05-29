import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Joke from './components/Joke';
import './jokes';
import { jokes } from './jokes';

const App = () => {
  return (
    <div className="container">
      {jokes.map((joke) => (
        <Joke
          userAvatar={joke.avatar}
          userName={joke.name}
          text={joke.text}
          likes={joke.likes}
          dislikes={joke.dislikes}
          key={joke.id}
        />
      ))}
    </div>
  );
};

render(<App />, document.querySelector('#app'));
