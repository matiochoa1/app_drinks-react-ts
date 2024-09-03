import { useMemo } from "react";
import { DrinkCard } from "../components/DrinkCard";
import { useAppStore } from "../stores/useAppStore";

export const FavoritesPage = () => {
	const favorites = useAppStore((state) => state.favorites);

	const hasFavorites = useMemo(() => favorites.length > 0, [favorites]);
	return (
		<>
			<h1 className="text-6xl font-extrabold">Favoritos</h1>

			{hasFavorites ? (
				<>
					<div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 2xl:grid-cols-3">
						{favorites.map((recipe) => (
							<DrinkCard key={recipe.idDrink} drink={recipe} />
						))}
					</div>
				</>
			) : (
				<>
					<p className="my-10 text-2xl">
						No hay favoritos aún, utiliza el formulario para buscar recetas
					</p>
				</>
			)}
		</>
	);
};
