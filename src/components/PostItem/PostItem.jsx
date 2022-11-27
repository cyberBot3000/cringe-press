import React, { useEffect, useRef } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ReactComponent as ChevronRight } from "../../assets/icons/chevron-right.svg";
import { ReactComponent as ChevronLeft } from "../../assets/icons/chevron-left.svg";
import "swiper/css";
import "swiper/css/navigation";
import "./PostItem.css";

const PostItem = ({ post, ...props }) => {

	useEffect(() => {
		console.log(post.attachments);
	}, [])

	const nextSlideBtn = useRef(null);
	const prevSlideBtn = useRef(null);


	return (
		<div className="post-item">
			<div className="post-item__padding-wrapper">
				<div className="post-item__before-post">
					<div className="post-item__user-block">
						<div className="post-item__user-info">
							<div className="post-item__username">Mark Oxxxymironoff</div>
							<div className="post-item__publication-date">
								24.11.2022, 9:43
							</div>
						</div>
					</div>
				</div>
				<div className="post-item__content-wrapper">
					<div className="post-item__content">
						<div className="post-item__body">{post.content}</div>
					</div>
				</div>
			</div>
			{ post.attachments.length != 0 &&
				<div className="post-item__attachment-block">
				<div className="post-item__swiper-navigation-block">
					<div className="post-item__nav-btn post-item__nav-btn_prev" ref={prevSlideBtn}>
						<ChevronLeft className="post-item__nav-btn-icon" />
					</div>
					<div className="post-item__nav-btn post-item__nav-btn_next" ref={nextSlideBtn}>
						<ChevronRight className="post-item__nav-btn-icon" />
					</div>
				</div>
				<Swiper
					className="post-item__swiper"
					slidesPerView={1}
					loop={false}
					modules={[Navigation]}
					spaceBetween={10}
					navigation={{
						prevEl: prevSlideBtn.current,
						nextEl: nextSlideBtn.current,
						disabledClass: "post-item__nav-btn_disabled",
					}}
				>
					{post.attachments.map(attachment => {
						return (
							<SwiperSlide className="post-item__swiper-slide" key={attachment.id}>
								<div className="post-item__single-attachment">
									<img
										src={attachment.path}
										alt=""
										className="post-item__atachment-img"
									/>
								</div>
							</SwiperSlide>
						);
					})}
				</Swiper>
			</div>}
		</div>
	);
};

export default PostItem;
