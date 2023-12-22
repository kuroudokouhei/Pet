/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function CheckCompleteButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="116px"
      height="46px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CheckCompleteButton")}
      {...rest}
    >
      <View
        width="116px"
        height="46px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        border="1px SOLID rgba(172,172,172,1)"
        borderRadius="5px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,243,180,1)"
        {...getOverrideProps(overrides, "Rectangle 131")}
      ></View>
      <Text
        fontFamily="Abhaya Libre ExtraBold"
        fontSize="16px"
        fontWeight="800"
        color="rgba(0,0,0,1)"
        lineHeight="18.875px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="28.26%"
        bottom="30.43%"
        left="36.21%"
        right="36.21%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="完成"
        {...getOverrideProps(overrides, "\u5B8C\u6210")}
      ></Text>
    </View>
  );
}
