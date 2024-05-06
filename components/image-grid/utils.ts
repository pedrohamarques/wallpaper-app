import { Hit } from "@/typings/responses";

function getImageSize(height: number, width: number) {
    if (width > height) {
        // landscape
        return 250;
    } else if (width < height) {
        // portrait
        return 300;
    } else {
        // square
        return 200;
    }
}

export function getImageHeight(image: Hit) {
    const { imageHeight: height, imageWidth: width } = image;

    const imageHeight = getImageSize(height, width);

    return imageHeight;
}
