import { useEffect } from "react";
import { useAppStore } from "../stores/useAppStore";
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import Modal from "../components/Modal";
import Notification from "../components/Notification";

export const Layout = () => {
	const loadFromStorage = useAppStore((state) => state.loadFromStorage);

	useEffect(() => {
		loadFromStorage();
	}, []);

	return (
		<>
			<Header />
			<main className="container p-2 py-16 mx-auto">
				<Outlet />
			</main>

			<Modal />
			<Notification />
		</>
	);
};
