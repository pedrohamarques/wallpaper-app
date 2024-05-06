import { Text, View, StyleSheet, Pressable } from "react-native";
import { Image } from "expo-image";

import type { Hit } from "@/typings/responses";
import { getImageHeight } from "../../utils";
import { colors, radius } from "@/constants/theme";
import { wp } from "@/utils/common";

type ImageCardProps = {
    item: Hit;
    index: number;
    columns: number;
    testID?: string;
};

export function ImageCard({
    item,
    index,
    columns,
    testID = "components.image-grid.components.image-card",
}: ImageCardProps) {
    const imageHeight = getImageHeight(item);
    return (
        <Pressable testID={testID} style={styles.imageWrapper}>
            <Image
                style={[styles.image, { height: imageHeight }]}
                source={item.webformatURL}
                transition={250}
            />
        </Pressable>
    );
}

const styles = StyleSheet.create({
    image: {
        height: 300,
        width: "100%",
    },
    imageWrapper: {
        backgroundColor: colors.grayBackground,
        borderRadius: radius.xl,
        borderCurve: "continuous",
        overflow: "hidden",
        margin: wp(1),
    },
});
