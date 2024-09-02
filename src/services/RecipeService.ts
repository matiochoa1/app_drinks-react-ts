import axios from "axios";
import {
	categoriesApiResponseSchema,
	DrinksApiResponse,
} from "../schemas/recipes-schemas";
import { SearchFilters } from "../types";

export async function getCategories() {
	const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";

	const { data } = await axios(url);

	const result = categoriesApiResponseSchema.safeParse(data);

	if (result.success) {
		return result.data;
	}
}

export async function getRecipes(filters: SearchFilters) {
	const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${filters.category}&i=${filters.ingredient}`;

	const { data } = await axios(url);

	const result = DrinksApiResponse.safeParse(data);

	if (result.success) {
		return result.data;
	}
}
