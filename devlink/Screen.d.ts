import * as React from "react";
import * as Types from "./types";

declare function Screen(props: {
  as?: React.ElementType;
  screenPrint?: Types.Devlink.Slot;
  powerOff?: Types.Visibility.VisibilityConditions;
  powerOn?: Types.Visibility.VisibilityConditions;
}): React.JSX.Element;
