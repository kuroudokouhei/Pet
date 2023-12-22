/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function CheckFeatureFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="106px"
      height="65px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 106, height: 65 }}
      paths={[
        {
          d: "M10 1L96 1L96 -1L10 -1L10 1ZM105 10L105 55L107 55L107 10L105 10ZM96 64L10 64L10 66L96 66L96 64ZM1 55L1 10L-1 10L-1 55L1 55ZM10 64C5.02944 64 1 59.9706 1 55L-1 55C-1 61.0751 3.92487 66 10 66L10 64ZM105 55C105 59.9706 100.971 64 96 64L96 66C102.075 66 107 61.0751 107 55L105 55ZM96 1C100.971 1 105 5.02944 105 10L107 10C107 3.92487 102.075 -1 96 -1L96 1ZM10 -1C3.92487 -1 -1 3.92487 -1 10L1 10C1 5.02944 5.02944 1 10 1L10 -1Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 10C0 4.47715 4.47715 0 10 0L96 0C101.523 0 106 4.47715 106 10L106 55C106 60.5229 101.523 65 96 65L10 65C4.47715 65 0 60.5228 0 55L0 10Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "CheckFeatureFrame")}
      {...rest}
    ></Icon>
  );
}
