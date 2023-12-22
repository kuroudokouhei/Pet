/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Text, View } from "@aws-amplify/ui-react";
export default function LoginSignupButton(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="341px"
      height="69px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LoginSignupButton")}
      {...rest}
    >
      <View
        width="341px"
        height="69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="0%"
        bottom="0%"
        left="0%"
        right="0%"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,243,180,1)"
        {...getOverrideProps(overrides, "Home_Signup_Box")}
      ></View>
      <Text
        fontFamily="Inter"
        fontSize="32px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="38.727272033691406px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="137px"
        height="32px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="26.09%"
        bottom="27.54%"
        left="29.91%"
        right="29.91%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="新規登録"
        {...getOverrideProps(overrides, "Home_Signup_Text")}
      ></Text>
    </View>
  );
}
