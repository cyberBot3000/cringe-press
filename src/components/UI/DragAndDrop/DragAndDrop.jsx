import React, { useState } from "react";
import "./DragAndDrop.css";

const DragAndDrop = ({ dragText, dropText, onDrop}) => {
	const [isDragged, setIsDragged] = useState(false);
	function dragStartHandler(e) {
		e.preventDefault();
		setIsDragged(true);
	}
	function dragLeaveHandler(e) {
		e.preventDefault();
		setIsDragged(false);
	}
	function dropHandler(e){
		e.preventDefault();
		onDrop(e);
		setIsDragged(false);
	}

	return (
		<div className="drag">
			{isDragged ? (
				<div
					className="drag__area drag__area_drop"
					onDragStart={e => dragStartHandler(e)}
					onDragLeave={e => dragLeaveHandler(e)}
					onDragOver={e => dragStartHandler(e)}
					onDrop={e => dropHandler(e)}
				>
					{dropText}
				</div>
			) : (
				<div
					className="drag__area drag__area_drag"
					onDragStart={e => dragStartHandler(e)}
					onDragLeave={e => dragLeaveHandler(e)}
					onDragOver={e => dragStartHandler(e)}
				>
					{dragText}
				</div>
			)}
		</div>
	);
};

export default DragAndDrop;
