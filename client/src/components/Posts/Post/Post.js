import React from "react";
import useStyles from "./style";
import moment from "moment";
import {
	Card,
	CardActions,
	CardContent,
	CardMedia,
	Button,
	Typography,
} from "@material-ui/core";

import { useDispatch } from "react-redux";
import { deletePosts, likePosts } from "../../../actions/posts";

import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import DeleteIcon from "@material-ui/icons/Delete";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Post = ({ post, setCurrentId }) => {
	const classes = useStyles();
	const dispatch = useDispatch();
	return (
		<Card className={classes.card}>
			<CardMedia
				className={classes.media}
				image={post.selectedFile}
				title={post.title}
			/>
			<div className={classes.overlay}>
				<Typography variant="h6">{post.creator}</Typography>
				<Typography variant="h6">{post.title}</Typography>
				<Typography variant="body2">
					{moment(post.createdAt).fromNow()}
				</Typography>
			</div>
			<div className={classes.overlay2}>
				<Button
					style={{ color: "white" }}
					size="small"
					onClick={() => setCurrentId(post._id)}
				>
					<MoreHorizIcon fontSize="medium" />
				</Button>
			</div>
			<div className={classes.details}>
				<Typography variant="body2" color="textSecondary">
					{post.tags.map((tag, index) => (
						<span key={index}>{`#${tag}`}</span>
					))}
				</Typography>
			</div>
			<CardContent>
				<Typography className={classes.title} variant="h5" gutterBottom>
					{post.message}
				</Typography>
			</CardContent>
			<CardActions className={classes.cardActions}>
				<Button
					size="small"
					color="primary"
					onClick={() => dispatch(likePosts(post._id))}
				>
					<ThumbUpAltIcon fontSize="small" />
					Like
					{post.likeCount}
				</Button>
				<Button
					size="small"
					color="primary"
					onClick={() => dispatch(deletePosts(post._id))}
				>
					<DeleteIcon fontSize="small" />
					Delete
				</Button>
			</CardActions>
		</Card>
	);
};

export default Post;
