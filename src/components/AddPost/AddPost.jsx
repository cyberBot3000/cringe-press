//import axios from "axios";
import React, { useRef, useState } from "react";
import ButtonAccent from "../UI/ButtonAccent/ButtonAccent";
import SelectImages from "../SelectImages/SelectImages";
import "./AddPost.css";

const AddPost = ({ postsService, posts, setPosts }) => {
	const [uploadedFiles, setUploadedFiels] = useState([]); // elem : {fileObj: File, id: Number}
	const postContent = useRef("");
	async function handleUpload(e) {
		e.preventDefault();
		const response = await postsService.create(
			postContent.current.value,
			uploadedFiles
		);
		setPosts([...posts, response.data]);
		setUploadedFiels([]);
		postContent.current.value = "";
	}
	return (
		<form className="add-post-form">
			<input
				type="text"
				name=""
				id=""
				ref={postContent}
				placeholder={"введите заголовок поста"}
				className="add-post-form__input add-post-form__input_text"
			/>
			<SelectImages
				uploadedFiles={uploadedFiles}
				setUploadedFiles={setUploadedFiels}
				className="add-post-form__images-select"
			/>
			<ButtonAccent
				type={"submit"}
				onClick={handleUpload}
				className="add-post-form__btn add-post-form__btn_submit"
			>
				Опубликовать
			</ButtonAccent>
		</form>
	);
};

export default AddPost;
