/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HomePageOverridesProps = {
    HomePage?: PrimitiveOverrideProps<ViewProps>;
    "\u304B\u3048\u3063\u307A"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 113"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 114"?: PrimitiveOverrideProps<ViewProps>;
    "\u30DD\u30B9\u30BF\u30FC\u4F5C\u6210\u30FB\u63B2\u8F09"?: PrimitiveOverrideProps<TextProps>;
    "Tips\u306E\u78BA\u8A8D"?: PrimitiveOverrideProps<TextProps>;
    "\u3053\u3053\u3067\u78BA\u8A8D\u3067\u304D\u308B\u3088"?: PrimitiveOverrideProps<TextProps>;
    "\u3053\u3053\u3067\u4F5C\u6210\u3057\u3088\u3046"?: PrimitiveOverrideProps<TextProps>;
    Button_Tip?: PrimitiveOverrideProps<ViewProps>;
    "ep:memo"?: PrimitiveOverrideProps<ViewProps>;
    Vector62074?: PrimitiveOverrideProps<IconProps>;
    Vector62075?: PrimitiveOverrideProps<IconProps>;
    Vector62076?: PrimitiveOverrideProps<IconProps>;
    "\u8FF7\u5B50\u306E\u30DA\u30C3\u30C8\u635C\u7D22\u5354\u529B\u3057\u307E\u3059\uFF01"?: PrimitiveOverrideProps<TextProps>;
    "Line 3"?: PrimitiveOverrideProps<IconProps>;
    "Line 6"?: PrimitiveOverrideProps<IconProps>;
    "Line 5"?: PrimitiveOverrideProps<IconProps>;
    "Line 4"?: PrimitiveOverrideProps<IconProps>;
    "MicrosoftTeams-image (5)62082"?: PrimitiveOverrideProps<ImageProps>;
    "MicrosoftTeams-image (5)62083"?: PrimitiveOverrideProps<ImageProps>;
    "Rectangle 115"?: PrimitiveOverrideProps<ViewProps>;
    "\u76EE\u6483\u60C5\u5831\u304C\u30DE\u30C3\u30D7\u306B\u8868\u793A"?: PrimitiveOverrideProps<TextProps>;
    "Line 7"?: PrimitiveOverrideProps<IconProps>;
    "Line 8"?: PrimitiveOverrideProps<IconProps>;
    "MicrosoftTeams-image (5)62088"?: PrimitiveOverrideProps<ImageProps>;
    STEP3?: PrimitiveOverrideProps<TextProps>;
    Button_MakePoster?: PrimitiveOverrideProps<ViewProps>;
    "Frame 1"?: PrimitiveOverrideProps<ViewProps>;
    "\u30A2\u30F3\u30B1\u30FC\u30C8\u30B7\u30FC\u30C8\u30A2\u30A4\u30B3\u30F3 1"?: PrimitiveOverrideProps<ImageProps>;
    "\u8089\u7403\u306E\u30A2\u30A4\u30B3\u30F31 1"?: PrimitiveOverrideProps<ImageProps>;
    Button_Map?: PrimitiveOverrideProps<ViewProps>;
    "\u76EE\u7684\u5730\u30A2\u30A4\u30B3\u30F32 1"?: PrimitiveOverrideProps<ImageProps>;
    "\u30D4\u30F3\u3092\u898B\u3066\u307F\u3088\u3046"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 116"?: PrimitiveOverrideProps<ViewProps>;
    "Line 9"?: PrimitiveOverrideProps<IconProps>;
    "Line 10"?: PrimitiveOverrideProps<IconProps>;
    "MicrosoftTeams-image (5)620100"?: PrimitiveOverrideProps<ImageProps>;
    STEP4?: PrimitiveOverrideProps<TextProps>;
    "\u635C\u7D22\u6E96\u5099\u5B8C\u4E86"?: PrimitiveOverrideProps<TextProps>;
    "\u63A2\u3057\u306B\u884C\u3053\u3046\uFF01"?: PrimitiveOverrideProps<TextProps>;
    Test_Exp_Flow_Box?: PrimitiveOverrideProps<ViewProps>;
    "title text"?: PrimitiveOverrideProps<TextProps>;
    STEP2?: PrimitiveOverrideProps<TextProps>;
    STEP1?: PrimitiveOverrideProps<TextProps>;
    "Test_Exp-Flow-text"?: PrimitiveOverrideProps<ViewProps>;
    "Test_Exp-Flow-text1"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type HomePageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: HomePageOverridesProps | undefined | null;
}>;
export default function HomePage(props: HomePageProps): React.ReactElement;
