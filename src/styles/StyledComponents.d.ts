import "styled-components";
import {
    AppBreakpointsType,
    AppColorsType,
    AppFontWeightType,
    AppFSType,
    AppLineHeightsType,
    AppSpacingType,
} from "./DesignVariables";

declare module "styled-components" {
    export interface DefaultTheme {
        theme: "pplTheme";
        colors: AppColorsType;
        media: AppBreakpointsType;
        fontWeights: AppFontWeightType;
        fontSizes: AppFSType;
        lineHeights: AppLineHeightsType;
        spacings: AppSpacingType;
    }
}
