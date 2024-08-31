import { Link } from "react-router-dom";

export const Header = () => {
	return (
		<header className="bg-slate-800">
			<div className="mx-auto container px-5 py-16">
				<div className="flex justify-between items-center">
					<div>
						<img src="/public/logo.svg" alt="Logotipo" className="w-32" />
					</div>

					<nav className="flex gap-4">
						<Link
							to="/"
							className="text-white font-bold uppercase hover:text-orange-300">
							Inicio
						</Link>
						<Link
							to="/favoritos"
							className="text-white font-bold uppercase hover:text-orange-300">
							Favoritos
						</Link>
					</nav>
				</div>
			</div>
		</header>
	);
};
