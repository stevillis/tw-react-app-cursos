import { ApiService } from "./ApiServices";

const endpoint = 'category';

export const CategoryService = {
    list() {
        return ApiService.get(endpoint);
    }
}