import { useMemo } from "react";
import { NavLink, useLocation } from "react-router-dom";

export const Header = () => {
	const { pathname } = useLocation();

	const isHome = useMemo(() => pathname === "/", [pathname]);
	return (
		<header
			className={isHome ? "bg-header bg-center bg-cover" : "bg-slate-800"}>
			<div className="container px-5 py-16 mx-auto">
				<div className="flex items-center justify-between">
					<div>
						<img src="/public/logo.svg" alt="Logotipo" className="w-32" />
					</div>

					<nav className="flex gap-4">
						<NavLink
							to="/"
							className={({ isActive }) =>
								isActive
									? "text-orange-500 font-bold uppercase hover:text-orange-500"
									: "text-white font-bold uppercase hover:text-orange-500"
							}>
							Inicio
						</NavLink>
						<NavLink
							to="/favoritos"
							className={({ isActive }) =>
								isActive
									? "text-orange-500 font-bold uppercase hover:text-orange-500"
									: "text-white font-bold uppercase hover:text-orange-500"
							}>
							Favoritos
						</NavLink>
					</nav>
				</div>
				{isHome && (
					<form className="p-10 my-32 space-y-6 bg-orange-400 rounded-lg shadow md:w-1/2 2xl:w-1/3">
						<div className="space-y-4 ">
							<label
								htmlFor="ingredient"
								className="block text-lg font-black text-white uppercase">
								Nombre o Ingredientes
							</label>

							<input
								type="text"
								id="ingredient"
								className="w-full p-3 rounded-lg focus:outline-none"
								placeholder="Ej. Vodka, Tequila, etc"
								name="ingredient"
							/>
						</div>

						<div className="space-y-4 ">
							<label
								htmlFor="category"
								className="block text-lg font-black text-white uppercase">
								Categoria
							</label>

							<select
								id="category"
								className="w-full p-3 rounded-lg focus:outline-none"
								name="category">
								<option value="">-- Seleccione --</option>
							</select>
						</div>
						<input
							type="submit"
							value={"Buscar Recetas"}
							className="w-full p-2 font-extrabold text-white uppercase bg-orange-800 rounded-lg cursor-pointer hover:bg-orange:900"
						/>
					</form>
				)}
			</div>
		</header>
	);
};
