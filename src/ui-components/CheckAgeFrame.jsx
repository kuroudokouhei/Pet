/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function CheckAgeFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="106px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 106, height: 20 }}
      paths={[
        {
          d: "M10 1L96 1L96 -1L10 -1L10 1ZM96 19L10 19L10 21L96 21L96 19ZM10 19C5.02944 19 1 14.9706 1 10L-1 10C-1 16.0751 3.92487 21 10 21L10 19ZM105 10C105 14.9706 100.971 19 96 19L96 21C102.075 21 107 16.0751 107 10L105 10ZM96 1C100.971 1 105 5.02944 105 10L107 10C107 3.92487 102.075 -1 96 -1L96 1ZM10 -1C3.92487 -1 -1 3.92487 -1 10L1 10C1 5.02944 5.02944 1 10 1L10 -1Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 10C0 4.47715 4.47715 0 10 0L96 0C101.523 0 106 4.47715 106 10L106 10C106 15.5228 101.523 20 96 20L10 20C4.47715 20 0 15.5228 0 10L0 10Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "CheckAgeFrame")}
      {...rest}
    ></Icon>
  );
}
