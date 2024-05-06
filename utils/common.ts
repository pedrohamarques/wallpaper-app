import { Dimensions } from "react-native";

const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

const DESKTOP_WIDTH = 1024;
const TABLET_WIDTH = 768;

export function wp(percentage: number) {
    const width = deviceWidth;
    return (percentage * width) / 100;
}

export function hp(percentage: number) {
    const height = deviceHeight;
    return (percentage * height) / 100;
}

export function getColumnCount() {
    if (deviceWidth >= DESKTOP_WIDTH) {
        return 4;
    } else if (deviceWidth >= TABLET_WIDTH) {
        return 3;
    } else {
        return 2;
    }
}
