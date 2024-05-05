import { FlatList, StyleSheet } from "react-native";

import { CategoriesTypes, categories } from "@/constants/data";

import { wp } from "@/utils/common";

import { CategoryItem } from "./components/category-item";

type CategoryProps = {
    testID?: string;
    activeCategory: string | null;
    onChangeCategory: (item: CategoriesTypes | null) => void;
};

export function Categories({
    activeCategory,
    testID = "components.categories",
    onChangeCategory,
}: CategoryProps) {
    return (
        <FlatList
            horizontal
            contentContainerStyle={styles.flatListContainer}
            showsHorizontalScrollIndicator={false}
            keyExtractor={item => item}
            data={categories}
            renderItem={categories => (
                <CategoryItem
                    title={categories.item}
                    index={categories.index}
                    isActive={activeCategory === categories.item}
                    onChangeCategory={onChangeCategory}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    flatListContainer: {
        paddingHorizontal: wp(4),
        gap: 8,
    },
});
