/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function PosterPicButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="168px"
      height="38px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "PosterPicButton")}
      {...rest}
    >
      <View
        width="168px"
        height="38px"
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
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,243,180,1)"
        {...getOverrideProps(overrides, "PosterChoosePic")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="19.363636016845703px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="161px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="26.32%"
        bottom="23.68%"
        left="4.17%"
        right="0%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="写真を選択"
        {...getOverrideProps(overrides, "PosterCosePic")}
      ></Text>
    </View>
  );
}
