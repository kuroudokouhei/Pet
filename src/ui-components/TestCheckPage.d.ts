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
export declare type TestCheckPageOverridesProps = {
    TestCheckPage?: PrimitiveOverrideProps<ViewProps>;
    "check-photobase"?: PrimitiveOverrideProps<ViewProps>;
    "check-contact"?: PrimitiveOverrideProps<TextProps>;
    "check-caution"?: PrimitiveOverrideProps<TextProps>;
    "check-name"?: PrimitiveOverrideProps<TextProps>;
    "check-lostplace"?: PrimitiveOverrideProps<TextProps>;
    "check-category"?: PrimitiveOverrideProps<TextProps>;
    "check-age"?: PrimitiveOverrideProps<TextProps>;
    "check-calor"?: PrimitiveOverrideProps<TextProps>;
    "check-feature"?: PrimitiveOverrideProps<TextProps>;
    "check-animal"?: PrimitiveOverrideProps<TextProps>;
    "\u304B\u3048\u3063\u307A"?: PrimitiveOverrideProps<TextProps>;
    "title text"?: PrimitiveOverrideProps<TextProps>;
    "check-petphoto"?: PrimitiveOverrideProps<ViewProps>;
    Home_Cat_img646284?: PrimitiveOverrideProps<ImageProps>;
    "check-title-lost"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 131"?: PrimitiveOverrideProps<ViewProps>;
    "\u5B8C\u6210"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 133"?: PrimitiveOverrideProps<ViewProps>;
    "\u623B\u308B"?: PrimitiveOverrideProps<TextProps>;
    "check-remarks-frame"?: PrimitiveOverrideProps<ViewProps>;
    "check-lostplace-frame"?: PrimitiveOverrideProps<IconProps>;
    "check-name-frame"?: PrimitiveOverrideProps<IconProps>;
    "check-animal-frame"?: PrimitiveOverrideProps<IconProps>;
    "check-category-frame"?: PrimitiveOverrideProps<IconProps>;
    "check-age-frame"?: PrimitiveOverrideProps<IconProps>;
    "check-calor-frame"?: PrimitiveOverrideProps<IconProps>;
    "check-feature-frame"?: PrimitiveOverrideProps<IconProps>;
    "check-contact-frame"?: PrimitiveOverrideProps<IconProps>;
    "Rectangle 134"?: PrimitiveOverrideProps<ViewProps>;
    "\u898B\u304B\u3051\u305F\u65B9\u3001\u4FDD\u8B77\u3057\u3066\u304F\u3060\u3055\u3063\u305F\u65B9\u306F\u3001\u4E0B\u8A18QR\u30B3\u30FC\u30C9\u3092\u8AAD\u307F\u8FBC\u307F\u3001Form\u3067\u306E\u60C5\u5831\u63D0\u4F9B\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    Home_Cat_img646312?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type TestCheckPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    add?: any;
} & {
    overrides?: TestCheckPageOverridesProps | undefined | null;
}>;
export default function TestCheckPage(props: TestCheckPageProps): React.ReactElement;