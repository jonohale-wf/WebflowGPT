"use client";

import { Section, Block } from "../../devlink/_Builtin";
import { Screen, ChatMessage, BasicP, UserInputGroup } from "../../devlink";

export default function Home() {
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
                <Block tag="div" className="chat-container">
                  <ChatMessage
                    messageBody="Hello! I'm WebflowGPT, your friendly AI assistant. How can I help you today?"
                    gptMessage={true}
                    userMessage={false}
                  />
                </Block>
                <Block tag="div" className="chat-input-container">
                  <UserInputGroup />
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
