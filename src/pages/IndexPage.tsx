import { useMemo } from "react";
import { useAppStore } from "../stores/useAppStore";
import { DrinkCard } from "../components/DrinkCard";

export const IndexPage = () => {
	const drinks = useAppStore((state) => state.drinks);

	const hasDrinks = useMemo(() => drinks.drinks.length > 0, [drinks]);

	return (
		<>
			<h1 className="text-6xl font-extrabold text-center">Recetas</h1>

			{hasDrinks ? (
				<>
					<div className="grid grid-cols-1 gap-10 my-10 md:grid-cols-2 2xl:grid-cols-3">
						{drinks.drinks.map((drink) => (
							<DrinkCard key={drink.idDrink} drink={drink} />
						))}
					</div>
				</>
			) : (
				<>
					<p className="my-10 text-2xl text-center">
						No hay resultados aún, utiliza el formulario para buscar recetas
					</p>
				</>
			)}
		</>
	);
};
