import { Fragment } from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/20/solid";
import { Transition } from "@headlessui/react";
import { useAppStore } from "../stores/useAppStore";

export default function Notification() {
	const notification = useAppStore((state) => state.notification);
	const hideNotification = useAppStore((state) => state.hideNotification);

	return (
		<div
			aria-live="assertive"
			className="fixed inset-0 flex items-end px-4 py-6 pointer-events-none sm:items-start sm:p-6">
			<div className="flex flex-col items-center w-full space-y-4 sm:items-end">
				<Transition
					show={notification.show}
					as={Fragment}
					enter="transform ease-out duration-300 transition"
					enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
					enterTo="translate-y-0 opacity-100 sm:translate-x-0"
					leave="transition ease-in duration-100"
					leaveFrom="opacity-100"
					leaveTo="opacity-0">
					<div className="w-full max-w-sm overflow-hidden bg-white rounded-lg shadow-lg pointer-events-auto ring-1 ring-black ring-opacity-5">
						<div className="p-4">
							<div className="flex items-start">
								<div className="flex-shrink-0">
									{notification.error ? (
										<XCircleIcon
											className="w-6 h-6 text-red-400"
											aria-hidden="true"
										/>
									) : (
										<CheckCircleIcon
											className="w-6 h-6 text-green-400"
											aria-hidden="true"
										/>
									)}
								</div>
								<div className="ml-3 w-0 flex-1 pt-0.5">
									<p className="text-sm font-medium text-gray-900">
										Notificación
									</p>
									<p className="mt-1 text-sm text-gray-500">
										{notification.text}
									</p>
								</div>
								<div className="flex flex-shrink-0 ml-4">
									<button
										type="button"
										className="inline-flex text-gray-400 bg-white rounded-md hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
										onClick={hideNotification}>
										<span className="sr-only">Cerrar</span>
										<XMarkIcon className="w-5 h-5" aria-hidden="true" />
									</button>
								</div>
							</div>
						</div>
					</div>
				</Transition>
			</div>
		</div>
	);
}
