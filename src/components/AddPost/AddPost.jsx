//import axios from "axios";
import React, { useRef, useState } from "react";
import ButtonAccent from "../UI/ButtonAccent/ButtonAccent";
import SelectImages from "../SelectImages/SelectImages";
import axios from "axios";

const AddPost = () => {
	const [uploadedFiles, setUploadedFiels] = useState([]); // elem : {fileObj: File, id: Number}
	const postBody = useRef('');

	function handleUpload(e){
		e.preventDefault();
		let formData = new FormData();
		formData.append('body', postBody);
		formData.append('attachments', uploadedFiles.map(elem => elem.fileObj));
		axios.post('someurl/', formData, {
			headers: {
				"Content-Type": "multipart/form-data",
			},
		}).then((result) => {
			console.log(result);
		}).catch((err) => {
			console.log(err);
		})
	}
	return (
		<form className="add-post-form">
			<input type="text" name="" id="" ref={postBody}/>
			<SelectImages uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiels}/>
			<ButtonAccent type={"submit"} onClick={handleUpload}>
				Опубликовать
			</ButtonAccent>
		</form>
	);
};

export default AddPost;
