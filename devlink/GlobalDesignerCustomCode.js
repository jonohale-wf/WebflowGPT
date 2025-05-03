"use client";
import React from "react";
import * as _Builtin from "./_Builtin";
import * as _utils from "./utils";
import _styles from "./GlobalDesignerCustomCode.module.css";

export function GlobalDesignerCustomCode({
  as: _Component = _Builtin.HtmlEmbed,
}) {
  return (
    <_Component
      className={_utils.cx(_styles, "styles__global-embed-code")}
      value="%3Cstyle%3E%0A%2F*%20Text%20link%20underline%20size%20and%20spacing%20*%2F%0Aa%20%7B%0A%09text-underline-position%3A%20under%3B%20%0A%09text-decoration-thickness%3A%200.1em%3B%0A%09text-underline-offset%3A%200.05em%3B%0A%7D%0A%2F*%20Remove%20top%20margin%20on%20rich%20text%20first%20child%20*%2F%0A.w-richtext%3E%3Afirst-child%20%7B%0A%09margin-top%3A%200%3B%0A%7D%0A%2F*%20Remove%20bottom%20margin%20of%20rich%20text%20last%20child%20*%2F%0A.w-richtext%3E%3Alast-child%2C%20.w-richtext%20ol%20li%3Alast-child%2C%20.w-richtext%20ul%20li%3Alast-child%20%7B%0A%09margin-bottom%3A%200%3B%0A%7D%0A%0A.fx%20%7Bpointer-events%3A%20none%3B%7D%0A%3C%2Fstyle%3E"
    />
  );
}
