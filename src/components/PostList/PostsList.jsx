import React, {useState, useEffect } from "react";
import { useFetching } from "../../hooks/useFetching";
import PostItem from "../PostItem/PostItem";
import Loader from "../UI/Loader/Loader";
import './PostList.css'

const PostsList = ({postsService, posts, setPosts}) => {
	const [getAllPosts, isPostsLoading, errorMessage] = useFetching(async () => {
		const response = await postsService.getPosts();
		setPosts(response.data);
	});
	useEffect(() => {
		getAllPosts();
	}, []);
	useEffect(() => {
		console.log(posts)
	}, [posts]);
	return (
		<div className="post-list">
			{errorMessage && <h1>произошла ошибка {errorMessage}</h1>}
			{isPostsLoading ? (
				<Loader />
			) : posts.length !== 0 ? (
				<div className="post-list__post-items">
					{posts.posts.map(elem => {
						return (
							<PostItem post={elem} key={elem.id} />
						);
					})}
				</div>
			) : (
				"записей не найдено"
			)}
		</div>
	);
};

export default PostsList;
