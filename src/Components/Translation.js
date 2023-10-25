// speech recognation k liye command jo apko npm pkg k through instal krni hy 
// npm install --save react-speech-recognition

// copy k liye jo apny pkag instal krna hy us k liye

// (npm i --save copy-to-clipboard)

import React from 'react'
import './Translate.css';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import copy from 'copy-to-clipboard';
import useClipboard from "react-use-clipboard";
import { useState } from 'react';

function Translation() {
    const [textToCopy, setTextToCopy] = useState();
    
    const [isCopied, setCopied] = useClipboard(textToCopy, {
        successDuration:1000
    });
    const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
    const { transcript, browserSupportsSpeechRecognition } = useSpeechRecognition();

    const[speech,setSpeech]=useState(transcript);

    if (!browserSupportsSpeechRecognition) {
        return null
    }
  return (
    <>
    

    
      <div className="container">
        <h2>Speech To Text Converter</h2>
        <br />
        <p>React Hook that Convert the speech from the microphone to text and make it avalible to your React Component</p>

        {/* Speech Text show area */}

        <div className="main-content" onClick={()=>setTextToCopy(transcript)}>
             {transcript}
        </div>

        {/* button */}

        <div className="btn-style">
          
           <button onClick={setCopied}>
              {isCopied ? 'Copied!' : 'Copy to clipboard'}
           </button>
            <button onClick={startListening}>Start Listening</button>
            <button onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
      </div>
      
    </>
  )
}

export default Translation
