import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RacipeSliceType } from "./recipeSlice";

export const useAppStore = create<RacipeSliceType>()(
	devtools((...a) => ({
		...createRecipeSlice(...a),
	}))
);
