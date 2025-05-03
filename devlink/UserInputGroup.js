"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./UserInputGroup.module.css";

export function UserInputGroup({ as: _Component = _Builtin.Block }) {
  return (
    <_Component className={_utils.cx(_styles, "user-input-group")} tag="div">
      <_Builtin.FormWrapper>
        <_Builtin.FormForm
          name="wf-form-user-compose"
          data-name="user-compose"
          method="get"
          id="wf-form-user-compose"
        >
          <_Builtin.FormTextInput
            className={_utils.cx(_styles, "text-field")}
            autoFocus={false}
            maxLength={256}
            name="user-chat-message-create"
            data-name="user-chat-message-create"
            placeholder="Ask Webflow-GPT a design question..."
            type="text"
            disabled={false}
            required={true}
            id="user-chat-message-create"
          />
          <_Builtin.FormButton
            className={_utils.cx(_styles, "submit-button")}
            type="submit"
            value="Submit"
            data-wait="Please wait..."
          />
        </_Builtin.FormForm>
        <_Builtin.FormSuccessMessage>
          <_Builtin.Block tag="div">
            {"Thank you! Your submission has been received!"}
          </_Builtin.Block>
        </_Builtin.FormSuccessMessage>
        <_Builtin.FormErrorMessage>
          <_Builtin.Block tag="div">
            {"Oops! Something went wrong while submitting the form."}
          </_Builtin.Block>
        </_Builtin.FormErrorMessage>
      </_Builtin.FormWrapper>
    </_Component>
  );
}
