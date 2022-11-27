import React from "react";
import "./PageWrapper.css";

const PageWrapper = ({ children, className, ...props}) => {
	return <div className={`page-wrapper ${className}`} props={true}>{children}</div>;
};

export default PageWrapper;
