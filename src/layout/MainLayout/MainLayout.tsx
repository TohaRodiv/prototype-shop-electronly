import { Container } from "react-grid-system";
import { Fragment } from "react";
import { TProps } from "./Types";
import { Head } from "@component/Head";
import { Header } from "@component/Header";
import { Footer } from "@component/Footer";
import classNames from "classnames";


export const MainLayout: React.FC <TProps> = ({
	children, title, noContainer, containerType = "fluid",
	noPaddingBottom, noPaddingTop,
}: TProps): JSX.Element => {

	const MainContainer = noContainer ? Fragment : Container;
	const MainContainerProps = noContainer ? {} : { [containerType]: true };
	const classes = classNames ("main", {
		"main_no-pb": noPaddingBottom,
		"main_no-pt": noPaddingTop,
	});
	
	return (
		<>
			<Head title={ title } />
			<Header />
			<main className={ classes }>
				<MainContainer { ...MainContainerProps }>
					{ children }
				</MainContainer>
			</main>
			<Footer />
		</>
	);
};