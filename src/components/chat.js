import React, { useState, useEffect, useRef } from 'react';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.interimResults = true;
      recognition.current.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            handleSendMessage(event.results[i][0].transcript);
          }
        }
      };
    } else {
      console.log('Speech recognition not supported');
      alert("not supported");
    }
  }, []);

  const handleSendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Here you would typically send the message to your backend or AI model
    // and then add the response to the messages array.
    alert(message);
  };

  const toggleListen = () => {
    setIsListening(!isListening);
    if (isListening) {
      recognition.current.start();
    } else {
      recognition.current.stop();
    }
  };

  return (
    <div className="chat-window">
      <div className="chat-messages mb-3">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input type="textarea" className="form-control" placeholder="Type your message here..." onKeyPress={(event) => {
          if (event.key === 'Enter') {
            handleSendMessage(event.target.value);
            event.target.value = '';
          }
        }} />
        <button className="btn btn-outline-info m-3" onClick={toggleListen}>{isListening ? 'Stop' : 'Start Speaking'}</button>
      </div>
    </div>
  );
}

export default Chat;
