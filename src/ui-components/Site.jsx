/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Site(props) {
  const { image, overrides, ...rest } = props;
  return (
    <View
      width="408px"
      height="844px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,248,239,1)"
      {...getOverrideProps(overrides, "Site")}
      {...rest}
    >
      <Text
        fontFamily="Abhaya Libre ExtraBold"
        fontSize="48px"
        fontWeight="800"
        color="rgba(240,130,30,1)"
        lineHeight="56.625px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="381px"
        height="78px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 39px - 376px)"
        left="calc(50% - 190.5px - 8.5px)"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Lost Pet&#xA;"
        {...getOverrideProps(overrides, "Lost Pet")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(240,130,30,1)"
        lineHeight="19.363636016845703px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="344px"
        height="58px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="103px"
        left="28px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="迷子のペットを捜索するためのサイトです"
        {...getOverrideProps(overrides, "text")}
      ></Text>
      <View
        width="341px"
        height="69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="226px"
        left="36px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,243,180,1)"
        {...getOverrideProps(overrides, "new Box")}
      ></View>
      <View
        width="341px"
        height="69px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="374px"
        left="32px"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
        borderRadius="6px"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(255,243,180,1)"
        {...getOverrideProps(overrides, "login Box")}
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
        width="335px"
        height="75px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="244px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="新規登録"
        {...getOverrideProps(overrides, "new log")}
      ></Text>
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
        width="335px"
        height="75px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="389px"
        left="35px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="ログイン"
        {...getOverrideProps(overrides, "login")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.94318199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="297px"
        height="51px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="455px"
        left="32px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={image?.LoginText}
        {...getOverrideProps(overrides, "user")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="14px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="16.94318199157715px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="239px"
        height="51px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="307px"
        left="36px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="初めての方はこちら"
        {...getOverrideProps(overrides, "new user")}
      ></Text>
      <Image
        width="369px"
        height="281px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="519px"
        left="22px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={image?.image}
        {...getOverrideProps(overrides, "neko hako 1")}
      ></Image>
    </View>
  );
}
