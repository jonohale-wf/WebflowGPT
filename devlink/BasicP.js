"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./BasicP.module.css";

export function BasicP({
  as: _Component = _Builtin.Block,
  text = "Need some design help? Ask Webflow-GPT!",
}) {
  return (
    <_Component className={_utils.cx(_styles, "paragraph-1-25")} tag="div">
      <_Builtin.Paragraph>{text}</_Builtin.Paragraph>
    </_Component>
  );
}
