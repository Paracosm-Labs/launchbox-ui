import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SyncLoader from "react-spinners/SyncLoader";
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { ChatContainer, MessageList, Avatar, TypingIndicator, Message, MessageInput } from '@chatscope/chat-ui-kit-react';

function Chat({ setQuickActions }) {
  const [messages, setMessages] = useState([]);
  const [isListening, setIsListening] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const recognition = useRef(null);
  const [input, setInput] = useState('');
  const [aiLastResponse, setAiLastResponse] = useState('nothing to respond.');
  const [autoSpeak, setAutoSpeak] = useState(false);



  useEffect(() => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      recognition.current = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.current.interimResults = true;
      recognition.current.onresult = (event) => {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal) {
            handleSendMessage(event.results[i][0].transcript);
            // setInput(event.results[i][0].transcript);
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
      toast.error("Speech recognition not supported");
    }
  }, []);

  const handleSendMessage = async(message) => {
    if (message) {
      setMessages(prevMessages => [...prevMessages, { text: message, sender: 'user' }]);
      setInput('');     
    }
    setIsTyping(true);
    try {
      const response = await axios.post('http://localhost:9000/api/openai', { message: message });
      setMessages(prevMessages => [...prevMessages, { text: response.data.response, sender: 'aia' }]);
      setAiLastResponse(response.data.response);  // Set the AI's last response
      if (autoSpeak) {  // If auto-speak is enabled, speak the AI's response
        const utterance = new SpeechSynthesisUtterance(response.data.response);
        const voices = window.speechSynthesis.getVoices();
        // console.log(voices);
        utterance.voice = voices[0]; // Change this to select a different voice
        window.speechSynthesis.speak(utterance);
      }
      setIsTyping(false);
    } catch (error) {
      console.error('Error sending message:', error);
      toast.error(`Error sending message: ${error}`);
      setIsTyping(false);
    }
  };


const handleSpeakClick = () => {
  console.log(aiLastResponse);
  const utterance = new SpeechSynthesisUtterance(aiLastResponse);
  const voices = window.speechSynthesis.getVoices();
  // console.log(voices);
  utterance.voice = voices[0]; // Change this to select a different voice
  window.speechSynthesis.speak(utterance);
};



  async function processMessageAIA(chatMessages){


    let apiMessages = chatMessages.map((messageObject) =>{
      let role='';
      if (messageObject.sender === "aia") {
        role="assistant"
      } else {
        role="user"
      }
      return  {role:role, content: messageObject.message};
    });

  };


  const toggleAutoSpeak = () => {
    setAutoSpeak(!autoSpeak);
    
  };

  const toggleListen = () => {
    setIsListening(!isListening);
    recognition.current.start();    
  };

  return (<>
    <div className="row">
    <div className="col">
    <ChatContainer className="p-4 chat-window">
      <MessageList>
        {messages.map((message, index) => (<>
          <Message className="mb-3" key={index} model={{
            message: message.text,
            direction: message.sender === 'user' ? 'outgoing' : 'incoming',
            sender: message.sender,
          }}>
            <Avatar src={`https://dummyimage.com/32/000/fff/&text=${message.sender}`} name={`${message.sender}`} />
          </Message>
        </>))}
        {isTyping && <TypingIndicator content="aia is typing" />}
      </MessageList>
      <MessageInput placeholder="Type a message here"  onSend={handleSendMessage} attachButton={false} />

    </ChatContainer>
    

      <ToastContainer
        position="top-center"
        autoClose={3000}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
      />
    </div>
    </div>
    <div className="row">
    <div className="col text-center">
      <div className="form-check form-switch text-start">
        <input className="form-check-input bg-success" type="checkbox" id="autoSpeakToggle" checked={autoSpeak} onChange={() => setAutoSpeak(!autoSpeak)} />
        <label className="form-check-label" htmlFor="autoSpeakToggle">Auto Speak</label>
      </div>
      <button className="btn btn-lg btn-outline-success m-2" onClick={toggleListen}>
        {isListening ? (<><SyncLoader color="#36d7b7"  size={3} /><br/><small>Listening...</small></>) : (<><i className="fa fa-lg fa-microphone"></i></>)}
      </button>
      <button className="btn btn-lg btn-outline-info m-2 d-none" onClick={handleSpeakClick}>
        Voice
      </button>


    </div>
    </div>
    </>
  );
}

export default Chat;
