//import axios from "axios";
import React, { useRef, useState } from "react";
import ButtonAccent from "../UI/ButtonAccent/ButtonAccent";
import SelectImages from "../SelectImages/SelectImages";
import axios from "axios";
import './AddPost.css'

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
			<input type="text" name="" id="" ref={postBody} placeholder={"введите заголовок поста"} className="add-post-form__input add-post-form__input_text"/>
			<SelectImages uploadedFiles={uploadedFiles} setUploadedFiles={setUploadedFiels} className="add-post-form__images-select"/>
			<ButtonAccent type={"submit"} onClick={handleUpload} className="add-post-form__btn add-post-form__btn_submit">
				Опубликовать
			</ButtonAccent>
		</form>
	);
};

export default AddPost;
