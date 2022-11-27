import React, { useState } from "react";
import AddPost from "../../components/AddPost/AddPost";
import PageWrapper from "../../components/PageWrapper/PageWrapper";
import PostsList from "../../components/PostList/PostsList";
import Sidebar from "../../components/Sidebar/Sidebar";
import WidthContainer from "../../components/WidthContainer/WidthContainer";
import './HomePage.css'

const HomePage = ({postsService}) => {
	const [posts, setPosts] = useState([]);
	return (
		<PageWrapper className="home-page">
			<WidthContainer>
				<div className="col col-2-1">
					<div className="home-page_main">
						<AddPost postsService={postsService} posts={posts} setPosts={setPosts}/>
						<PostsList
							heading={"вау"}
							postsService={postsService}
							posts={posts}
							setPosts={setPosts}
						/>
					</div>
					<Sidebar/>
				</div>
			</WidthContainer>
		</PageWrapper>
	);
};

export default HomePage;
