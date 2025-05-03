"use client";

import { Section, Block } from "../../devlink/_Builtin";
import { Screen, ChatMessage, BasicP } from "../../devlink";
import { useState, useEffect, useRef } from "react";
import * as _utils from "../../devlink/utils";
import _styles from "../../devlink/UserInputGroup.module.css";
import { aiMessages } from "./ai-messages";

function TypingIndicator() {
  return (
    <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
      <span style={{ 
        animation: 'bounce 1.4s infinite ease-in-out',
        animationDelay: '0s'
      }}>.</span>
      <span style={{ 
        animation: 'bounce 1.4s infinite ease-in-out',
        animationDelay: '0.2s'
      }}>.</span>
      <span style={{ 
        animation: 'bounce 1.4s infinite ease-in-out',
        animationDelay: '0.4s'
      }}>.</span>
      <style jsx>{`
        @keyframes bounce {
          0%, 80%, 100% { 
            transform: translateY(0);
            opacity: 0.4;
          }
          40% { 
            transform: translateY(-4px);
            opacity: 1;
          }
        }
      `}</style>
    </div>
  );
}

function SimpleInput({ onSubmit, isEnded, onRestart }: { 
  onSubmit: (message: string) => void;
  isEnded: boolean;
  onRestart: () => void;
}) {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSubmit(inputValue.trim());
      setInputValue('');
    }
  };

  if (isEnded) {
    return (
      <div className={_utils.cx(_styles, "user-input-group")}>
        <button 
          onClick={onRestart}
          style={{
            width: '100%',
            padding: '20px',
            fontSize: '16px',
            backgroundColor: 'transparent',
            border: '1px solid var(--primary-ba25d908)',
            color: 'var(--primary-ba25d908)',
            cursor: 'pointer',
            borderRadius: '4px'
          }}
        >
          Start New Conversation
        </button>
      </div>
    );
  }

  return (
    <div className={_utils.cx(_styles, "user-input-group")}>
      <form onSubmit={handleSubmit} style={{ width: '100%' }}>
        <input
          className={_utils.cx(_styles, "text-field")}
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Ask Webflow-GPT a design question..."
          maxLength={256}
          style={{
            width: '100%',
            padding: '20px',
            fontSize: '16px'
          }}
        />
        <button 
          type="submit" 
          className={_utils.cx(_styles, "submit-button")}
          style={{ display: 'none' }}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default function Home() {
  const [messages, setMessages] = useState<Array<{
    body: string;
    isGPT: boolean;
    isUser: boolean;
    isTyping?: boolean;
    displayText?: string;
  }>>([]);
  const [responseCount, setResponseCount] = useState(0);
  const [isEnded, setIsEnded] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const beepBoopInterval = useRef<NodeJS.Timeout>();

  // Initialize with a random welcome message
  useEffect(() => {
    const welcomeMessage = aiMessages.welcome[Math.floor(Math.random() * aiMessages.welcome.length)];
    setMessages([{
      body: welcomeMessage,
      isGPT: true,
      isUser: false,
      displayText: welcomeMessage
    }]);
  }, []);

  // Scroll to bottom when messages change or typing state changes
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // Handle beep boop sounds during typing
  useEffect(() => {
    if (isTyping) {
      const beepBoops = ['beep', 'boop', 'bop', 'bleep', 'bloop', 'buzz', 'whirr', 'click'];
      beepBoopInterval.current = setInterval(() => {
        const randomBeepBoop = beepBoops[Math.floor(Math.random() * beepBoops.length)];
        console.log(randomBeepBoop);
      }, 300);
    } else {
      if (beepBoopInterval.current) {
        clearInterval(beepBoopInterval.current);
      }
    }

    return () => {
      if (beepBoopInterval.current) {
        clearInterval(beepBoopInterval.current);
      }
    };
  }, [isTyping]);

  const typeMessage = (message: string, messageIndex: number) => {
    let currentIndex = 0;
    const typingSpeed = 30; // milliseconds per character

    const typingInterval = setInterval(() => {
      if (currentIndex <= message.length) {
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[messageIndex] = {
            ...newMessages[messageIndex],
            displayText: message.substring(0, currentIndex)
          };
          return newMessages;
        });
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[messageIndex] = {
            ...newMessages[messageIndex],
            isTyping: false
          };
          return newMessages;
        });
      }
    }, typingSpeed);
  };

  const handleNewMessage = (message: string) => {
    // Add user message
    setMessages(prev => [...prev, {
      body: message,
      isGPT: false,
      isUser: true,
      displayText: message
    }]);

    // Show typing indicator
    setIsTyping(true);

    // Add AI response after delay
    setTimeout(() => {
      let aiMessage: string;
      if (responseCount >= 3) {
        // Use ending message
        aiMessage = aiMessages.ending[Math.floor(Math.random() * aiMessages.ending.length)];
        setIsEnded(true);
      } else {
        // Use response message
        aiMessage = aiMessages.responses[Math.floor(Math.random() * aiMessages.responses.length)];
      }

      setMessages(prev => {
        const newMessages = [...prev, {
          body: aiMessage,
          isGPT: true,
          isUser: false,
          isTyping: true,
          displayText: ''
        }];
        
        // Start typing animation for the new message
        typeMessage(aiMessage, newMessages.length - 1);
        
        return newMessages;
      });

      setResponseCount(prev => prev + 1);
      setIsTyping(false);
    }, 1000);
  };

  const handleRestart = () => {
    const welcomeMessage = aiMessages.welcome[Math.floor(Math.random() * aiMessages.welcome.length)];
    setMessages([{
      body: welcomeMessage,
      isGPT: true,
      isUser: false,
      displayText: welcomeMessage
    }]);
    setResponseCount(0);
    setIsEnded(false);
  };

  return (
    <Section
      tag="section"
      className="page-wrapper home-page"
    >
      <Block tag="div" className="section">
        <Block tag="div" className="container">
          <Screen
            screenPrint={
              <Block tag="div">
                <h1 style={{ color: "var(--primary-ba25d908)", fontSize: "2rem" }}>
                  Welcome to WebflowGPT
                </h1>
                <BasicP text="Just some chat thing." />
                <Block 
                  tag="div" 
                  className="chat-container" 
                  style={{ maxHeight: "45vh", overflowY: "auto" }}
                  ref={chatContainerRef}
                >
                  {messages.map((message, index) => (
                    <ChatMessage
                      key={index}
                      messageBody={message.displayText || ''}
                      gptMessage={message.isGPT}
                      userMessage={message.isUser}
                    />
                  ))}
                  {isTyping && (
                    <ChatMessage
                      messageBody={<TypingIndicator />}
                      gptMessage={true}
                      userMessage={false}
                    />
                  )}
                </Block>  
                <Block tag="div" className="chat-input-container">
                  <SimpleInput 
                    onSubmit={handleNewMessage} 
                    isEnded={isEnded}
                    onRestart={handleRestart}
                  />
                </Block>
              </Block>
            }
            powerOn={true}
          />
        </Block>
      </Block>
    </Section>
  );
}
