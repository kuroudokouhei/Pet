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
export declare type TestPosterPageOverridesProps = {
    TestPosterPage?: PrimitiveOverrideProps<ViewProps>;
    PosterDate?: PrimitiveOverrideProps<ViewProps>;
    "Creation-lostd&t-textbox"?: PrimitiveOverrideProps<ViewProps>;
    PosterImageButton?: PrimitiveOverrideProps<ViewProps>;
    T_SigU_Sub_Button?: PrimitiveOverrideProps<ViewProps>;
    T_SigU_Sub_Box?: PrimitiveOverrideProps<ViewProps>;
    T_SigU_Sub_Text?: PrimitiveOverrideProps<TextProps>;
    PosterPicButton?: PrimitiveOverrideProps<ViewProps>;
    PosterChoosePic?: PrimitiveOverrideProps<ViewProps>;
    PosterCosePic?: PrimitiveOverrideProps<TextProps>;
    PosterEtc?: PrimitiveOverrideProps<ViewProps>;
    "Creation-remarks-textbox"?: PrimitiveOverrideProps<ViewProps>;
    PosterFeature?: PrimitiveOverrideProps<ViewProps>;
    "Creation-feature-textbox"?: PrimitiveOverrideProps<ViewProps>;
    PosterColor?: PrimitiveOverrideProps<ViewProps>;
    "Creation-color-textbox"?: PrimitiveOverrideProps<ViewProps>;
    PosterAge?: PrimitiveOverrideProps<ViewProps>;
    "Creation-age-textbox"?: PrimitiveOverrideProps<ViewProps>;
    PosterType?: PrimitiveOverrideProps<ViewProps>;
    "Creation-catrgory-textbox"?: PrimitiveOverrideProps<ViewProps>;
    PosterAnimal?: PrimitiveOverrideProps<ViewProps>;
    "Creation-aniimal-textbox"?: PrimitiveOverrideProps<ViewProps>;
    PosterPlace?: PrimitiveOverrideProps<ViewProps>;
    "Creation-lostplace-textbox"?: PrimitiveOverrideProps<ViewProps>;
    PosterName?: PrimitiveOverrideProps<ViewProps>;
    "Creation-name-textbox"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-info649315"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-info649316"?: PrimitiveOverrideProps<TextProps>;
    "title text"?: PrimitiveOverrideProps<TextProps>;
    "\u304B\u3048\u3063\u307A"?: PrimitiveOverrideProps<TextProps>;
    "Creation-animal"?: PrimitiveOverrideProps<TextProps>;
    "Creation-age649320"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-age649321"?: PrimitiveOverrideProps<TextProps>;
    "Creation-remarks"?: PrimitiveOverrideProps<TextProps>;
    "Creation-feature649325"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-feature649326"?: PrimitiveOverrideProps<TextProps>;
    "Creation-category649327"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-category649328"?: PrimitiveOverrideProps<TextProps>;
    "Creation-lostplace649329"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-lostplace649330"?: PrimitiveOverrideProps<TextProps>;
    "Creation-name649331"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-name649332"?: PrimitiveOverrideProps<TextProps>;
    "Creation-lostd&t649333"?: PrimitiveOverrideProps<ViewProps>;
    "Creation-lostd&t649334"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type TestPosterPageProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: TestPosterPageOverridesProps | undefined | null;
}>;
export default function TestPosterPage(props: TestPosterPageProps): React.ReactElement;
