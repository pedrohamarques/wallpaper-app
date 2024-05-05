import { CategoriesTypes } from "@/constants/data";
import { useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export function useHomeScreen() {
    const { top } = useSafeAreaInsets();

    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] =
        useState<null | CategoriesTypes>(null);

    const searchInputRef = useRef(null);

    const paddingTop = top > 0 ? top + 10 : 30;

    function handleChangeCategory(category: CategoriesTypes | null) {
        setActiveCategory(category);
    }

    console.log(activeCategory);

    return {
        paddingTop,
        search,
        searchInputRef,
        activeCategory,
        setSearch,
        handleChangeCategory,
    };
}
