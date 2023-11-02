import { useState } from 'react';

export default function NewPost() {
  
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  const [postContent, setPostContent] = useState('HI'); // Declare a state variable...
  const [backgroundColor, setBackgroundColor] = useState('white'); // Initial background color
  
  return (
    <>
    <label>
      Enter some markdown:
      <textarea
        value={postContent}
        onChange={e => setPostContent(e.target.value)}
      />
    </label>
    <hr />
  </>
  );
  
}

