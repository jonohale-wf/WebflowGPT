"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./Screen.module.css";

export function Screen({
  as: _Component = _Builtin.Block,
  screenPrint,
  powerOff = false,
  powerOn = true,
}) {
  return (
    <_Component className={_utils.cx(_styles, "_64-bdy")} tag="div">
      <_Builtin.Block className={_utils.cx(_styles, "printer-stuff")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "ui-wrap")} tag="div">
          {powerOff ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "_64-scrn", "off")}
              tag="div"
            />
          ) : null}
          <_Builtin.Block
            className={_utils.cx(_styles, "_64-scrn")}
            tag="div"
          />
          {powerOn ? (
            <_Builtin.Block
              className={_utils.cx(_styles, "_64-block")}
              tag="div"
            >
              <_Builtin.Block tag="div">
                {screenPrint ?? (
                  <_Builtin.Heading
                    className={_utils.cx(_styles, "game-title")}
                    tag="h2"
                  >
                    {"No messages"}
                  </_Builtin.Heading>
                )}
              </_Builtin.Block>
            </_Builtin.Block>
          ) : null}
          <_Builtin.Block
            className={_utils.cx(_styles, "fx", "screen")}
            tag="div"
          />
          <_Builtin.Block
            className={_utils.cx(_styles, "fx", "light")}
            tag="div"
          >
            <_Builtin.Block
              className={_utils.cx(_styles, "light-reflection")}
              tag="div"
            />
          </_Builtin.Block>
        </_Builtin.Block>
      </_Builtin.Block>
      <_Builtin.Block className={_utils.cx(_styles, "_64-brand")} tag="div">
        <_Builtin.Block className={_utils.cx(_styles, "screenstamp")} tag="div">
          {"Webflow-gpt"}
        </_Builtin.Block>
        {powerOn ? (
          <_Builtin.Block className={_utils.cx(_styles, "power")} tag="div" />
        ) : null}
        {powerOff ? (
          <_Builtin.Block
            className={_utils.cx(_styles, "power", "off")}
            tag="div"
          />
        ) : null}
      </_Builtin.Block>
    </_Component>
  );
}
