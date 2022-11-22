import React, { useState } from "react";
import DragAndDrop from "../UI/DragAndDrop/DragAndDrop";
import UploadedGallary from "../UploadedGallary/UploadedGallary";

const SelectImages = ({ uploadedFiles, setUploadedFiles }) => {
	const [fileId, setFileId] = useState(0);
	function increaseFileId() {
		setFileId(currentId => {
			return currentId + 1;
		});
	}
	async function onDrop(e) {
		let files = e.dataTransfer.files;
		addFiles(Array.from(files));
	}

	/**
	 *
	 * @param {Array<File>} filesArr
	 */
	function addFiles(filesArr) {
		let newFiles = [];
		let currentId = fileId;
		filesArr.forEach(element => {
			newFiles.push({
				fileObj: element,
				id: currentId,
			});
			increaseFileId();
			currentId++;
		});
		setUploadedFiles([...uploadedFiles, ...newFiles]);
	}
	function deleteFile(uploadedfile) {
		setUploadedFiles([
			...uploadedFiles.filter(elem => elem.id != uploadedfile.id),
		]);
	}

	return (
		<div className="image-field">
			{uploadedFiles.length != 0 ? (
				<UploadedGallary
					addFiles={addFiles}
					deleteFile={deleteFile}
					uploadedFiles={uploadedFiles}
				/>
			) : (
				<DragAndDrop
					dragText={"перетащите файлы"}
					dropText={"отпустите файлы"}
					onDrop={onDrop}
				/>
			)}
		</div>
	);
};

export default SelectImages;
