import React, { useRef } from "react";
import UploadedImage from "../UploadedImage/UploadedImage";
import "./UploadedGallary.css";

const UploadedGallary = ({ addFiles, deleteFile, uploadedFiles }) => {
	const newFiles = useRef(null);
	return (
		<div className="uploaded-gallery">
			<div className="uploaded-gallery__files-list">
				{uploadedFiles.map(elem => (
					<UploadedImage
						uploadedFile={elem}
						onDelete={deleteFile}
						className={"uploaded-gallery__file-elem"}
					/>
				))}
				<input
					type="file"
					name=""
					id=""
					multiple
					onChange={e => addFiles(Array.from(e.target.files))}
					ref={newFiles}
					className="uploaded-gallery__input uploaded-gallery__input_hidden"
				/>
				<div
					className="uploaded-gallery__add-files"
					onClick={() => {
						newFiles.current.click();
					}}
				>
					+
				</div>
			</div>
		</div>
	);
};

export default UploadedGallary;
