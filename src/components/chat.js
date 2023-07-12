import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Chat() {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const recognition = useRef(null);
  const [input, setInput] = useState('');

  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.interimResults = true;
      recognition.current.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            // handleSendMessage(event.results[i][0].transcript);
            setInput(event.results[i][0].transcript);
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
      alert("Speech recognition not supported");
    }
  }, []);

  const handleSendMessage = async(message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Here you would typically send the message to your backend or AI model
    // and then add the response to the messages array.
    setInput('');
    try {
      const response = await axios.post('http://localhost:9000/api/openai', { message: message });
      setMessages([...messages, { text: response.data.response, sender: 'aia' }]);
    } catch (error) {
      console.error('Error sending message:', error);
       toast.error(`Error sending message: ${error}`);
    }

  };



  const toggleListen = () => {
    setIsListening(!isListening);
    recognition.current.start();    
  };

  return (
    <div className="p-5 chat-window">
      <div className="px-5 chat-messages mb-3 text-start">
        {messages.map((message, index) => (<>
          <div className="d-flex align-items-start mb-2">
          <img src={`https://dummyimage.com/32/ffffff/000000/&text=${message.sender}`} class="rounded-circle m-2 mt-4" alt="..." />
          <div key={index} className={`w-100 p-4 chat-message ${message.sender}`}>
            {message.text}
          </div>
          </div>
        </>))}
      </div>

         <div className="row">
            <div className="col">
              <div className="chat-input bottom-fixed p-3">

                <form onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage(e.target.message.value);
                  e.target.message.value = '';
                }}>

                  <div className="input-group">
                    <input type="textarea" name="message" value={input} onChange={e => setInput(e.target.value)} className="form-control" placeholder="Type your message here..." />
                    <button type="submit" className="send-button">
                      <i className="fa fa-lg fa-paper-plane text-info"></i>
                    </button>

                  </div>
                </form>
                  <button className="btn btn-outline-info m-3" onClick={toggleListen}>
                    {isListening ? 'Listening...' : 'Start Speaking'}
                  </button>
              </div>
            </div>

          </div>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
}

export default Chat;
