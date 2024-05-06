import { useEffect, useRef, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import { CategoriesTypes } from "@/constants/data";

import { apiCall } from "@/services/api";

import { Hit } from "@/typings/responses";

export function useHomeScreen() {
    const { top } = useSafeAreaInsets();

    const [search, setSearch] = useState("");
    const [activeCategory, setActiveCategory] =
        useState<null | CategoriesTypes>(null);
    const [images, setImages] = useState<Hit[]>([]);

    const searchInputRef = useRef(null);

    const paddingTop = top > 0 ? top + 10 : 30;

    function handleChangeCategory(category: CategoriesTypes | null) {
        setActiveCategory(category);
    }

    async function fetchImages() {
        const response = await apiCall({ page: 1 });
        if (response.success && response.data?.hits) {
            setImages(previousImages => [
                ...previousImages,
                ...response.data.hits,
            ]);
        }
    }

    useEffect(() => {
        fetchImages();
    }, []);

    return {
        paddingTop,
        search,
        searchInputRef,
        activeCategory,
        setSearch,
        handleChangeCategory,
        images,
    };
}
