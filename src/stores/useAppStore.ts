import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipeSlice, RacipeSliceType } from "./recipeSlice";
import { createFavoritesSlice, FavoritesSliceType } from "./favoritesSlice";
import {
	createNotificationSlice,
	NotificationSliceType,
} from "./notificationSlice";

export const useAppStore = create<
	RacipeSliceType & FavoritesSliceType & NotificationSliceType
>()(
	devtools((...a) => ({
		...createRecipeSlice(...a),
		...createFavoritesSlice(...a),
		...createNotificationSlice(...a),
	}))
);
