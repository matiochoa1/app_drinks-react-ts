import { BrowserRouter, Routes, Route } from "react-router-dom";
import { IndexPage } from "./pages/IndexPage";
import { FavoritesPage } from "./pages/FavoritesPage";
import { Layout } from "./layout/Layout";

export default function AppRouter() {
	return (
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<IndexPage />} index />
					<Route path="/favoritos" element={<FavoritesPage />} />
				</Route>
			</Routes>
		</BrowserRouter>
	);
}
