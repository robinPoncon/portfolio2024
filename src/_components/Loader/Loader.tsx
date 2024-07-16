import LoaderContext from "@/_context/LoaderContext";
import Image from "next/image";
import { useContext } from "react";
import "./Loader.scss";

const Loader = () => {
	const { isLoading } = useContext(LoaderContext);

	return isLoading ? (
		<div className="loaderComponent">
			<Image
				alt="Animation d'un loader avec des cercles turquoises"
				width={200}
				height={200}
				src="/loader.svg"
			></Image>
		</div>
	) : null;
};

export default Loader;
