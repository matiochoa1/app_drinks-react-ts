import { z } from "zod";
import {
	categoriesApiResponseSchema,
	DrinkApiResponse,
	DrinksApiResponse,
	searchFiltersSchema,
} from "../schemas/recipes-schemas";

export type Categories = z.infer<typeof categoriesApiResponseSchema>;
export type SearchFilters = z.infer<typeof searchFiltersSchema>;
export type Drinks = z.infer<typeof DrinksApiResponse>;
export type Drink = z.infer<typeof DrinkApiResponse>;
