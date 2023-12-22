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
export declare type CheckPageOverridesProps = {
    CheckPage?: PrimitiveOverrideProps<ViewProps>;
    "check-photobase"?: PrimitiveOverrideProps<ViewProps>;
    "check-contact"?: PrimitiveOverrideProps<TextProps>;
    "check-caution608349"?: PrimitiveOverrideProps<ViewProps>;
    "check-caution608350"?: PrimitiveOverrideProps<TextProps>;
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
    Home_Cat_img?: PrimitiveOverrideProps<ImageProps>;
    "check-title-lost"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type CheckPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    mainImage?: any;
} & {
    overrides?: CheckPageOverridesProps | undefined | null;
}>;
export default function CheckPage(props: CheckPageProps): React.ReactElement;
