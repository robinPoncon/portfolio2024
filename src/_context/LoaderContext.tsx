"use client";

import Loader from "@/_components/Loader/Loader";
import { LoaderContextType } from "@/_types/loaderType";
import { createContext, useState, useContext, ReactNode } from "react";

const LoaderContext = createContext<LoaderContextType>({
	isLoading: false,
	showLoader: () => {},
	hideLoader: () => {}
});

export const LoaderProvider = ({ children }: { children: ReactNode }) => {
	const [isLoading, setIsLoading] = useState(false);

	const showLoader = () => {
		setIsLoading(true);
	};

	const hideLoader = () => {
		setIsLoading(false);
	};

	return (
		<LoaderContext.Provider value={{ isLoading, showLoader, hideLoader }}>
			<Loader />
			{children}
		</LoaderContext.Provider>
	);
};

export const useLoader = () => {
	return useContext(LoaderContext);
};

export default LoaderContext;
