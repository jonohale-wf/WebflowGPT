"use client";

import { Section, Block, Link } from "../../devlink/_Builtin";
import { Screen } from "../../devlink";

export default function Home() {
  return (
    <Section
      tag="section"
      className="page-wrapper home-page"
    >
      <Block tag="div" className="container">
        <Block
          tag="div"
          className="hero-split"
          style={{
            textAlign: "center",
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <Screen
            screenPrint={
              <Block tag="div">
                <h1 style={{ color: "var(--primary-ba25d908)", fontSize: "2rem" }}>
                  Welcome to WebflowGPT
                </h1>
                <p style={{ color: "var(--primary-ba25d908)", marginTop: "1rem" }}>
                  Your AI-powered Webflow assistant
                </p>
              </Block>
            }
            powerOn={true}
          />
        </Block>
      </Block>
    </Section>
  );
}
