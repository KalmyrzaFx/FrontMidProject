import React, { useState } from 'react';

function TextArea() {
  const [text, setText] = useState('');
  const [position, setPosition] = useState({ top: '50%', left: '50%' });
  const [boxShadowColor, setBoxShadowColor] = useState('#333');

  const handleChange = (event) => {
    setText(event.target.value);
     const parentWidth = 1200;
     const parentHeight = 800;
 
     const randomTop = (parentHeight - 400) * Math.random();
     const randomLeft = (parentWidth - 200) * Math.random();
    setPosition({ top: randomTop, left: randomLeft });
    const randomColor = RandomColor();
    setBoxShadowColor(randomColor);
  };

  const textAreaStyles = {
    position: 'absolute',
    top: `${position.top}px`,
    left: `${position.left}px`,
    boxShadow: `0 0 20px ${boxShadowColor}`,
  };

  const RandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  return (
    <textarea
          rows="8"
          cols="25"
          placeholder="Type something..."
          value={text}
          onChange={handleChange}
          className="textarea"
          style={textAreaStyles}
        />
  );
}

export default TextArea;