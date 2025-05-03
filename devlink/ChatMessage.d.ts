import * as React from "react";
import * as Types from "./types";

declare function ChatMessage(props: {
  as?: React.ElementType;
  gptMessage?: Types.Visibility.VisibilityConditions;
  userMessage?: Types.Visibility.VisibilityConditions;
  messageBody?: React.ReactNode;
}): React.JSX.Element;
