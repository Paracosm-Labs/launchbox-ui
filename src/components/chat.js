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
      recognition.current.onstart = () => {
        setIsListening(true);
      };
      recognition.current.onend = () => {
        setIsListening(false);
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
  };

  const toggleListen = () => {
    setIsListening(!isListening);
    recognition.current.start();    
  };

  return (
    <div className="chat-window">
      <div className="chat-messages mb-3 text-start">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender}`}>
            {message.text}
          </div>
        ))}
      </div>

         <div className="row">
            <div className="col">
              <div className="chat-input bottom-fixed p-3">
                <div className="input-group">
                  <input type="textarea" className="form-control" placeholder="Type your message here..." onKeyPress={(event) => {
                    if (event.key === 'Enter') {
                      handleSendMessage(event.target.value);
                      event.target.value = '';
                    }
                  }} />
                  <button className="send-button" onClick={() => {
                    handleSendMessage(document.querySelector('.chat-input input').value);
                    document.querySelector('.chat-input input').value = '';
                  }}>
                    <i className="fa fa-lg fa-paper-plane"></i>
                  </button>
                </div>
                  <button className="btn btn-outline-info m-3" onClick={toggleListen}>{isListening ? 'Listening...' : 'Start Speaking'}</button>
              </div>
            </div>
            <div className="col-md-3 d-md-block d-sm-none">

            </div>
          </div>


    </div>
  );
}

export default Chat;
