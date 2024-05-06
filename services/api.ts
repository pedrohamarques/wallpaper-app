import axios from "axios";
import { ParamsProps, formattedUrl } from "./utils";

import { SearchAPIResponse } from "@/typings/responses";

export async function apiCall(params: ParamsProps) {
    try {
        const response = await axios.get<SearchAPIResponse>(
            formattedUrl(params),
        );
        return { success: true, data: response.data };
    } catch (error: any) {
        console.log("got error:", error.message);
        return {
            success: false,
            message: error.message,
        };
    }
}
