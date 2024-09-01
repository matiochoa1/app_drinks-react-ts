import { StateCreator } from "zustand";
import { getCategories } from "../services/RecipeService";
import type { Categories, SearchFilter } from "../types";

export type RacipeSliceType = {
	categories: Categories;
	fetchCategories: () => Promise<void>;
	searchRecipes: (searchFilter: SearchFilter) => Promise<void>;
};
export const createRecipeSlice: StateCreator<RacipeSliceType> = (set) => ({
	categories: {
		drinks: [],
	},
	fetchCategories: async () => {
		const categories = await getCategories();
		set({ categories });
	},
	searchRecipes: async (searchFilter) => {
		console.log(searchFilter);
	},
});
