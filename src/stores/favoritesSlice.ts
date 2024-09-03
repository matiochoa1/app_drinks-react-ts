import { StateCreator } from "zustand";
import { Recipe } from "../types";
import {
	createNotificationSlice,
	NotificationSliceType,
} from "./notificationSlice";

export type FavoritesSliceType = {
	favorites: Recipe[];
	addFavorite: (recipe: Recipe) => void;
	loadFromStorage: () => void;
};

export const createFavoritesSlice: StateCreator<
	FavoritesSliceType & NotificationSliceType,
	[],
	[],
	FavoritesSliceType
> = (set, get, api) => ({
	favorites: [],
	addFavorite: (recipe: Recipe) => {
		const hasFavorite = get().favorites;
		if (hasFavorite.some((favorite) => favorite.idDrink === recipe.idDrink)) {
			set({
				favorites: hasFavorite.filter(
					(favorite) => favorite.idDrink !== recipe.idDrink
				),
			});
			createNotificationSlice(set, get, api).showNotification({
				text: "Se ha eliminado de favoritos",
				error: false,
			});
		} else {
			set({
				favorites: [...get().favorites, recipe], // otra alternative seria pasar el state en un callback y hacer el spread. Ambas son validas
			});
			createNotificationSlice(set, get, api).showNotification({
				text: "Se ha agregado a favoritos",
				error: false,
			});
		}

		localStorage.setItem("favorites", JSON.stringify(get().favorites));
	},
	loadFromStorage: () => {
		const storedFavorites = localStorage.getItem("favorites");

		if (storedFavorites) {
			set({
				favorites: JSON.parse(storedFavorites),
			});
		}
	},
});
