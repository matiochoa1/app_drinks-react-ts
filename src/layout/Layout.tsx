import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";

export const Layout = () => {
	return (
		<>
			<Header />
			<main className="container mx-auto py-16">
				<Outlet />
			</main>
		</>
	);
};
