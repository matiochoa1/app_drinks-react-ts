import { Drink } from "../types";
import { useAppStore } from "../stores/useAppStore";

type DrinkCardProps = {
	drink: Drink;
};

export const DrinkCard = ({ drink }: DrinkCardProps) => {
	const selectRecipe = useAppStore((state) => state.selectRecipe);

	return (
		<div className="border shadow-lg">
			<div className="overflow-hidden">
				<img
					src={drink.strDrinkThumb}
					alt={`Imagen de ${drink.strDrink}`}
					className="transition-transform hover:scale-125 hover:rotate-2 "
				/>
			</div>

			<div className="p-5">
				<h2 className="text-2xl font-black truncate">{drink.strDrink}</h2>
				<button
					type="button"
					className="w-full p-3 mt-5 text-lg font-bold text-white bg-orange-400 hover:bg-orange-500"
					onClick={() => selectRecipe(drink.idDrink)}>
					Ver Receta
				</button>
			</div>
		</div>
	);
};
