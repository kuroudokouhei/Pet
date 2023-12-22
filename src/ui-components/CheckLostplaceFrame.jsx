/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon } from "@aws-amplify/ui-react";
export default function CheckLostplaceFrame(props) {
  const { overrides, ...rest } = props;
  return (
    <Icon
      width="174px"
      height="20px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      viewBox={{ minX: 0, minY: 0, width: 174, height: 20 }}
      paths={[
        {
          d: "M10 1L164 1L164 -1L10 -1L10 1ZM164 19L10 19L10 21L164 21L164 19ZM10 19C5.02944 19 1 14.9706 1 10L-1 10C-1 16.0751 3.92487 21 10 21L10 19ZM173 10C173 14.9706 168.971 19 164 19L164 21C170.075 21 175 16.0751 175 10L173 10ZM164 1C168.971 1 173 5.02944 173 10L175 10C175 3.92487 170.075 -1 164 -1L164 1ZM10 -1C3.92487 -1 -1 3.92487 -1 10L1 10C1 5.02944 5.02944 1 10 1L10 -1Z",
          stroke: "rgba(0,0,0,1)",
          fillRule: "nonzero",
          strokeWidth: 1,
          style: { transform: "translate(0%, 0%)" },
        },
        {
          d: "M0 10C0 4.47715 4.47715 0 10 0L164 0C169.523 0 174 4.47715 174 10L174 10C174 15.5228 169.523 20 164 20L10 20C4.47715 20 0 15.5228 0 10L0 10Z",
          fill: "rgba(255,255,255,1)",
          fillRule: "nonzero",
          style: { transform: "translate(0%, 0%)" },
        },
      ]}
      {...getOverrideProps(overrides, "CheckLostplaceFrame")}
      {...rest}
    ></Icon>
  );
}
