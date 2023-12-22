/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function CheckQR(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="106px"
      height="100px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "CheckQR")}
      {...rest}
    >
      <Icon
        width="106px"
        height="100px"
        viewBox={{ minX: 0, minY: 0, width: 106, height: 100 }}
        paths={[
          {
            d: "M10 1L96 1L96 -1L10 -1L10 1ZM105 10L105 90L107 90L107 10L105 10ZM96 99L10 99L10 101L96 101L96 99ZM1 90L1 10L-1 10L-1 90L1 90ZM10 99C5.02944 99 1 94.9706 1 90L-1 90C-1 96.0751 3.92487 101 10 101L10 99ZM105 90C105 94.9706 100.971 99 96 99L96 101C102.075 101 107 96.0751 107 90L105 90ZM96 1C100.971 1 105 5.02944 105 10L107 10C107 3.92487 102.075 -1 96 -1L96 1ZM10 -1C3.92487 -1 -1 3.92487 -1 10L1 10C1 5.02944 5.02944 1 10 1L10 -1Z",
            stroke: "rgba(0,0,0,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
          {
            d: "M0 10C0 4.47715 4.47715 0 10 0L96 0C101.523 0 106 4.47715 106 10L106 90C106 95.5228 101.523 100 96 100L10 100C4.47715 100 0 95.5228 0 90L0 10Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="5%"
        bottom="-5%"
        left="0%"
        right="0%"
        {...getOverrideProps(overrides, "check-contact-frame")}
      ></Icon>
      <View
        width="45px"
        height="45px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="54%"
        bottom="1%"
        left="29.25%"
        right="28.3%"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(217,217,217,1)"
        {...getOverrideProps(overrides, "Rectangle 134")}
      ></View>
      <Text
        fontFamily="Yinmar"
        fontSize="7px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="8.819999694824219px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="98.2px"
        height="17.2px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="13.9%"
        bottom="68.9%"
        left="3.68%"
        right="3.68%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="見かけた方、保護してくださった方は、下記QRコードを読み込み、Formでの情報提供をお願いします。"
        {...getOverrideProps(
          overrides,
          "\u898B\u304B\u3051\u305F\u65B9\u3001\u4FDD\u8B77\u3057\u3066\u304F\u3060\u3055\u3063\u305F\u65B9\u306F\u3001\u4E0B\u8A18QR\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u8FBC\u307F\u3001Form\u3067\u306E\u60C5\u5831\u63D0\u4F9B\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002"
        )}
      ></Text>
      <Image
        width="42.45%"
        height="45%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="54%"
        bottom="1%"
        left="29.25%"
        right="28.3%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        {...getOverrideProps(overrides, "Home_Cat_img")}
      ></Image>
    </View>
  );
}
