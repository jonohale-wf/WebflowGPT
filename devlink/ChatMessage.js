"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./ChatMessage.module.css";

export function ChatMessage({
  as: _Component = _Builtin.Block,
  gptMessage = true,
  userMessage = true,
  messageBody = "example message.",
}) {
  return (
    <_Component className={_utils.cx(_styles, "chat-message")} tag="div">
      {gptMessage ? (
        <_Builtin.Block className={_utils.cx(_styles, "gpt-message")} tag="div">
          <_Builtin.Block
            className={_utils.cx(_styles, "message-sender")}
            tag="div"
          >
            {"Webflow-GPT"}
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "message-body")}
            tag="div"
          >
            <_Builtin.Block tag="div">{messageBody}</_Builtin.Block>
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
      {userMessage ? (
        <_Builtin.Block
          className={_utils.cx(_styles, "user-message")}
          tag="div"
        >
          <_Builtin.Block
            className={_utils.cx(_styles, "message-body")}
            tag="div"
          >
            <_Builtin.Block tag="div">{messageBody}</_Builtin.Block>
          </_Builtin.Block>
          <_Builtin.Block
            className={_utils.cx(_styles, "message-sender")}
            tag="div"
          >
            {"me"}
          </_Builtin.Block>
        </_Builtin.Block>
      ) : null}
    </_Component>
  );
}
