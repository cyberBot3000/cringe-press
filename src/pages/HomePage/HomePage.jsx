import React from "react";
import Header from "../../components/Header/Header";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import WidthContainer from "../../components/WidthContainer/WidthContainer";

const HomePage = () => {
	return (
		<PageWrapper>
			<Header />
			<WidthContainer>some text</WidthContainer>
		</PageWrapper>
	);
};

export default HomePage;
