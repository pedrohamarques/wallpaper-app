import { View, StyleSheet } from "react-native";
import { MasonryFlashList } from "@shopify/flash-list";

import { getColumnCount, wp } from "@/utils/common";

import type { Hit } from "@/typings/responses";

import { ImageCard } from "./components/image-card";

type ImageGridProps = {
    images: Hit[];
    testID?: string;
};

export function ImageGrid({
    images,
    testID = "components.image-grid",
}: ImageGridProps) {
    const numbersOfColumns = getColumnCount();

    return (
        <View testID={testID} style={styles.container}>
            <MasonryFlashList
                contentContainerStyle={styles.listContainer}
                data={images}
                numColumns={numbersOfColumns}
                estimatedItemSize={200}
                renderItem={({ item, index }) => (
                    <ImageCard
                        item={item}
                        index={index}
                        columns={numbersOfColumns}
                    />
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        minHeight: 3,
        width: wp(100),
    },
    listContainer: {
        paddingHorizontal: wp(4),
    },
});
