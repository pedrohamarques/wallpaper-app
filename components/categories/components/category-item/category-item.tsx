import { Pressable, Text, StyleSheet } from "react-native";

import { colors, fontWeights, radius } from "@/constants/theme";

import { hp } from "@/utils/common";
import { CategoriesTypes } from "@/constants/data";
import Animated, { FadeInRight } from "react-native-reanimated";

type CategoryItemProps = {
    title: CategoriesTypes;
    index: number;
    testID?: string;
    isActive: boolean;
    onChangeCategory: (item: CategoriesTypes | null) => void;
};

export function CategoryItem({
    title,
    testID = "components.categories.components.category-item",
    isActive,
    index,
    onChangeCategory,
}: CategoryItemProps) {
    const color = isActive ? colors.white : colors.neutral(0.8);
    const backgroundColor = isActive ? colors.neutral(0.8) : colors.white;

    return (
        <Animated.View
            testID={testID}
            entering={FadeInRight.delay(index * 200)
                .duration(1000)
                .springify()
                .damping(14)}>
            <Pressable
                style={[styles.category, { backgroundColor }]}
                onPress={() => onChangeCategory(isActive ? null : title)}>
                <Text style={[styles.title, { color }]}>{title}</Text>
            </Pressable>
        </Animated.View>
    );
}

export const styles = StyleSheet.create({
    category: {
        padding: 12,
        paddingHorizontal: 15,
        borderWidth: 1,
        borderColor: colors.grayBackground,
        backgroundColor: colors.white,
        borderRadius: radius.lg,
        borderCurve: "continuous",
    },
    title: {
        fontSize: hp(1.8),
        fontWeight: fontWeights.medium,
    },
});
