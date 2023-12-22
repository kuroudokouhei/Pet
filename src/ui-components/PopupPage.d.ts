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
export declare type PopupPageOverridesProps = {
    PopupPage?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 128"?: PrimitiveOverrideProps<ViewProps>;
    PopupPic?: PrimitiveOverrideProps<IconProps>;
    "Polygon 6"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 7"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 8"?: PrimitiveOverrideProps<IconProps>;
    "Polygon 9"?: PrimitiveOverrideProps<IconProps>;
    "Group 5"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 11659642"?: PrimitiveOverrideProps<ViewProps>;
    "Line 959643"?: PrimitiveOverrideProps<IconProps>;
    "Line 1059644"?: PrimitiveOverrideProps<IconProps>;
    "MicrosoftTeams-image (5)59645"?: PrimitiveOverrideProps<ImageProps>;
    "\u65E5\u6642"?: PrimitiveOverrideProps<TextProps>;
    "Group 6"?: PrimitiveOverrideProps<ViewProps>;
    "Group 2"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 11659649"?: PrimitiveOverrideProps<ViewProps>;
    "Line 959650"?: PrimitiveOverrideProps<IconProps>;
    "Line 1059651"?: PrimitiveOverrideProps<IconProps>;
    "MicrosoftTeams-image (5)59652"?: PrimitiveOverrideProps<ImageProps>;
    "\u5834\u6240"?: PrimitiveOverrideProps<TextProps>;
    "Group 7"?: PrimitiveOverrideProps<ViewProps>;
    "Group 1"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 11659656"?: PrimitiveOverrideProps<ViewProps>;
    "Line 959657"?: PrimitiveOverrideProps<IconProps>;
    "Line 1059658"?: PrimitiveOverrideProps<IconProps>;
    "MicrosoftTeams-image (5)59659"?: PrimitiveOverrideProps<ImageProps>;
    "\u5099\u8003"?: PrimitiveOverrideProps<TextProps>;
    "Rectangle 129"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 130"?: PrimitiveOverrideProps<ViewProps>;
    "\u76EE\u6483\u60C5\u5831"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PopupPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PopupPageOverridesProps | undefined | null;
}>;
export default function PopupPage(props: PopupPageProps): React.ReactElement;
