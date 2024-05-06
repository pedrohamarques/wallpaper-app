import {
    Text,
    View,
    StyleSheet,
    Pressable,
    ScrollView,
    TextInput,
} from "react-native";
import { Feather, FontAwesome6, Ionicons } from "@expo/vector-icons";

import { Categories } from "@/components/categories";
import { ImageGrid } from "@/components/image-grid";

import { colors, fontWeights, radius } from "@/constants/theme";

import { hp, wp } from "@/utils/common";

import { useHomeScreen } from "@/hooks/app/home.hook";

export default function HomeScreen() {
    const {
        paddingTop,
        search,
        searchInputRef,
        activeCategory,
        images,
        setSearch,
        handleChangeCategory,
    } = useHomeScreen();
    return (
        <View style={[styles.container, { paddingTop }]}>
            <View style={styles.header}>
                <Pressable>
                    <Text style={styles.title}>Pixels</Text>
                </Pressable>
                <Pressable>
                    <FontAwesome6
                        name='bars-staggered'
                        size={hp(3)}
                        color={colors.neutral(0.7)}
                    />
                </Pressable>
            </View>

            <ScrollView contentContainerStyle={{ gap: 15 }}>
                <View style={styles.searchBar}>
                    <View style={styles.searchIcon}>
                        <Feather
                            name='search'
                            size={hp(3)}
                            color={colors.neutral(0.4)}
                        />
                    </View>
                    <TextInput
                        placeholder='Search for photos'
                        style={styles.searchInput}
                        ref={searchInputRef}
                        value={search}
                        onChangeText={setSearch}
                        placeholderTextColor={colors.neutral(0.4)}
                    />
                    {search && (
                        <Pressable style={styles.closeIcon}>
                            <Ionicons
                                name='close'
                                size={hp(3)}
                                color={colors.neutral(0.6)}
                            />
                        </Pressable>
                    )}
                </View>

                <View style={styles.categories}>
                    <Categories
                        activeCategory={activeCategory}
                        onChangeCategory={handleChangeCategory}
                        testID='app.home.categories'
                    />
                </View>

                <View>
                    {images.length > 0 && (
                        <ImageGrid
                            images={images}
                            testID='app.home.image-grid'
                        />
                    )}
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 15,
    },
    title: {
        fontSize: hp(4),
        fontWeight: fontWeights.semiBold,
        color: colors.neutral(0.9),
    },
    header: {
        marginHorizontal: wp(4),
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },
    searchBar: {
        marginHorizontal: wp(4),
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        borderWidth: 1,
        borderColor: colors.grayBackground,
        borderRadius: radius.lg,
        backgroundColor: colors.white,
        padding: 6,
        paddingLeft: 10,
    },
    searchIcon: {
        padding: 8,
    },
    searchInput: {
        flex: 1,
        borderRadius: radius.sm,
        paddingVertical: 10,
        fontSize: hp(1.8),
    },
    closeIcon: {
        backgroundColor: colors.neutral(0.1),
        padding: 8,
        borderRadius: radius.sm,
    },
    categories: {},
});
