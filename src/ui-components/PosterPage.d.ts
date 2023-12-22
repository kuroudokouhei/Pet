/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PosterPageOverridesProps = {
    PosterPage?: PrimitiveOverrideProps<ViewProps>;
    "Creation-info597228"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-info597229"?: PrimitiveOverrideProps<TextProps>;
    "title text"?: PrimitiveOverrideProps<TextProps>;
    "\u304B\u3048\u3063\u307A"?: PrimitiveOverrideProps<TextProps>;
    "Creation-animal"?: PrimitiveOverrideProps<TextProps>;
    "Creation-age597234"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-age597235"?: PrimitiveOverrideProps<TextProps>;
    "Creation-age599119"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-age599120"?: PrimitiveOverrideProps<TextProps>;
    "Creation-remarks"?: PrimitiveOverrideProps<TextProps>;
    "Creation-feature597238"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-feature597239"?: PrimitiveOverrideProps<TextProps>;
    "Creation-category597243"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-category597244"?: PrimitiveOverrideProps<TextProps>;
    "Creation-lostplace597246"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-lostplace597247"?: PrimitiveOverrideProps<TextProps>;
    "Creation-name597248"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-name597249"?: PrimitiveOverrideProps<TextProps>;
    "Creation-lostd&t597250"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-lostd&t597251"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type PosterPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: PosterPageOverridesProps | undefined | null;
}>;
export default function PosterPage(props: PosterPageProps): React.ReactElement;
