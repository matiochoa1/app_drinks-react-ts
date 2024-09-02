import { StateCreator } from "zustand";
import { getCategories, getRecipes } from "../services/RecipeService";
import type { Categories, Drinks, SearchFilters } from "../types";

export type RacipeSliceType = {
	categories: Categories;
	drinks: Drinks;
	fetchCategories: () => Promise<void>;
	searchRecipes: (searchFilters: SearchFilters) => Promise<void>;
};
export const createRecipeSlice: StateCreator<RacipeSliceType> = (set) => ({
	categories: {
		drinks: [],
	},
	drinks: {
		drinks: [],
	},
	fetchCategories: async () => {
		const categories = await getCategories();
		set({ categories });
	},
	searchRecipes: async (searchFilters) => {
		const drinks = await getRecipes(searchFilters);

		console.log(drinks);

		set({ drinks });
	},
});
