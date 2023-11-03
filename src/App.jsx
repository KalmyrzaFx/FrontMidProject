import React, { useState } from 'react';
import AlaToo from './assets/images/Alatoo.png';
import './App.css';

function TextArea() {
  const [text, setText] = useState('');
  const [position, setPosition] = useState({ top: 0, left: 0 });
  const [boxShadowColor, setBoxShadowColor] = useState('#333');

  const handleChange = (event) => {
    setText(event.target.value);
    const randomTop = Math.random() * 440;
    const randomLeft = Math.random() * 440; 
    setPosition({ top: randomTop, left: randomLeft });

    const randomColor = getRandomColor();
    setBorderColor(randomColor);
  };

  const textAreaStyles = {
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`,
    borderColor: borderColor
  };

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };


  return (
    <div className="myApp">
      <img src={AlaToo} alt="Ala too logo"  className='rotate'/>
      <h1>Impossible TextArea</h1>
      <div className="textarea-container">
        <textarea
          rows="8"
          cols="25"
          placeholder="Type something..."
          value={text}
          onChange={handleChange}
          className="textarea"
          style={textAreaStyles}
        />
      </div>
    </div>
  );
}

export default TextArea;