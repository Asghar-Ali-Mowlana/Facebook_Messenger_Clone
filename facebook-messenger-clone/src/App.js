import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);

  console.log(input);
  console.log(messages);

  const sendMessage = (Event) => {
    Event.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Facebook Messenger Clone</h1>

      <form>
        <input value={input} onChange={Event => setInput(Event.target.value)} />
        <button type='submit' onClick={sendMessage}>Send Message</button>
        {/* Input Field */}
        {/* Buttons */}
      </form>


      {/* Messages */}

      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
