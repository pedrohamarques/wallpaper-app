import { CategoriesTypes } from "@/constants/data";
import { PIXABAY_KEY } from "@env";

const API_URL = `https://pixabay.com/api/?key=${PIXABAY_KEY}`;

export type ParamsProps = {
    q?: string;
    page?: number;
    category?: CategoriesTypes;
    order?: string;
};

export function formattedUrl(params: ParamsProps) {
    let url = API_URL + "&per_page=25&safesearch=true&editors_choice=true";

    if (!params) {
        return url;
    }

    let paramsKeys = Object.keys(params);
    paramsKeys.map(key => {
        let value =
            key === "q"
                ? encodeURIComponent(params[key] as keyof ParamsProps)
                : params[key as keyof ParamsProps];

        url += `&${key}=${value}`;
    });

    console.log(paramsKeys, "here");

    console.log("final url: ", url);

    return url;
}
