/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type LoginPageOverridesProps = {
    LoginPage?: PrimitiveOverrideProps<ViewProps>;
    T_Home_Cat_img?: PrimitiveOverrideProps<ViewProps>;
    Home_Cat_img?: PrimitiveOverrideProps<ImageProps>;
    T_Home_LogExp_Text?: PrimitiveOverrideProps<ViewProps>;
    Home_LogExp_Text?: PrimitiveOverrideProps<TextProps>;
    T_Home_SignExp_Text?: PrimitiveOverrideProps<ViewProps>;
    Home_SignExp_Text?: PrimitiveOverrideProps<TextProps>;
    T_Home_SubTitle_Text?: PrimitiveOverrideProps<TextProps>;
    "title text"?: PrimitiveOverrideProps<TextProps>;
    "\u304B\u3048\u3063\u307A"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type LoginPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: LoginPageOverridesProps | undefined | null;
}>;
export default function LoginPage(props: LoginPageProps): React.ReactElement;
