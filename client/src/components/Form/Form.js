import React, { useState, useEffect } from "react";
import FileBase from "react-file-base64";
import useStyles from "./style";

import { useDispatch, useSelector } from "react-redux";
import { createPosts, updatePosts } from "../../actions/posts";

import { TextField, Button, Typography, Paper } from "@material-ui/core";

const Form = ({ currentId, setCurrentId }) => {
	const [postData, setPostData] = useState({
		creator: "",
		title: "",
		message: "",
		tags: "",
		selectedFile: "",
	});

	const classes = useStyles();
	const dispatch = useDispatch();
	const post = useSelector((state) => currentId ? state.posts.find(p => p._id === currentId) : null);

	const handleSubmit = (e) => {
		e.preventDefault();

		if (currentId) {
			dispatch(updatePosts(currentId, postData));
		} else {
			dispatch(createPosts(postData));
		}
	};

	const clear = () => {
		setCurrentId(null);
		setPostData({
			creator: "",
			title: "",
			message: "",
			tags: "",
			selectedFile: "",
		});
	};

	useEffect(() => {
		if (post) {
			setPostData(post);
		}
	}, [post]);

	return (
		<Paper className={classes.paper}>
			<form
				className={classes.form}
				noValidate
				autoComplete="off"
				onSubmit={handleSubmit}
			>
				{
					post ? <Typography variant="h6">Editing a Memory</Typography> : <Typography variant="h6">Creating a Memory</Typography>
				}
				
				<TextField
					className={classes.textField}
					name="creator"
					variant="outlined"
					label="Creator"
					fullWidth
					value={postData.creator}
					onChange={(e) =>
						setPostData({ ...postData, creator: e.target.value })
					}
				/>
				<TextField
					className={classes.textField}
					name="message"
					variant="outlined"
					label="Message"
					fullWidth
					value={postData.message}
					onChange={(e) =>
						setPostData({ ...postData, message: e.target.value })
					}
				/>
				<TextField
					className={classes.textField}
					name="title"
					variant="outlined"
					label="Title"
					fullWidth
					value={postData.title}
					onChange={(e) =>
						setPostData({ ...postData, title: e.target.value })
					}
				/>
				<TextField
					className={classes.textField}
					name="tags"
					variant="outlined"
					label="Tags"
					fullWidth
					value={postData.tags}
					onChange={(e) =>
						setPostData({ ...postData, tags: e.target.value })
					}
				/>
				<div className={classes.fileInput}>
					<FileBase
						type="file"
						multiple={false}
						onDone={({ base64 }) =>
							setPostData({ ...postData, selectedFile: base64 })
						}
					/>
				</div>
				<Button
					className={classes.buttonSubmit}
					variant="contained"
					color="primary"
					size="large"
					type="submit"
					fullWidth
				>
					Submit
				</Button>
				<Button
					variant="contained"
					color="secondary"
					size="small"
					onClick={clear}
					fullWidth
				>
					Clear
				</Button>
			</form>
		</Paper>
	);
};

export default Form;
