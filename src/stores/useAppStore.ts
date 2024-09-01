import { create } from "zustand";
import { createReceipesSlice } from "./receipeSlice";

export const useAppStore = create((...a) => ({
	...createReceipesSlice(...a),
}));
