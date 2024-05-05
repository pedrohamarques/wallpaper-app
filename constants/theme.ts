import { TextStyle } from "react-native";

export const colors = {
    white: "#fff",
    black: "#000",
    grayBackground: "#e5e5e5",
    neutral: (opacity: number) => `rgba(10,10,10, ${opacity})`,
};

export const fontWeights = {
    medium: "500" as TextStyle["fontWeight"],
    semiBold: "600" as TextStyle["fontWeight"],
    bold: "700" as TextStyle["fontWeight"],
};

export const radius = {
    xs: 10,
    sm: 12,
    md: 14,
    lg: 16,
    xl: 18,
};
