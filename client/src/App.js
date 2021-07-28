import React, { useEffect, useState } from "react";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

//import actions from actions folder for redux that is imported from the backend api
import { getPosts } from "./actions/posts";

import memories from "./images/memories.png";
import useStyles from "./styles";

import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [dispatch]);

	return (
		<Container maxWidth="lg">
			<AppBar
				className={classes.appBar}
				position="static"
				color="inherit"
			>
				<Typography
					className={classes.heading}
					variant="h2"
					align="center"
				>
					Memories
				</Typography>
				<img
					className={classes.image}
					src={memories}
					alt="memories"
					height="60"
				/>
			</AppBar>
			<Grow in>
				<Container>
					<Grid
						container
						justifyContent="space-between"
						align-items="stretch"
						spacing={3}
					>
						<Grid item xs={12} sm={7}>
							<Posts setCurrentId={setCurrentId} />
						</Grid>
						<Grid item xs={12} sm={4}>
							<Form currentId={currentId} setCurrentId={setCurrentId} />
						</Grid>
					</Grid>
				</Container>
			</Grow>
		</Container>
	);
};

export default App;
