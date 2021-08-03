import React, { useEffect, useState } from "react";
import { Container, Grow, Grid } from "@material-ui/core";
import { useDispatch } from "react-redux";

//import actions from actions folder for redux that is imported from the backend api
import { getPosts } from "./actions/posts";


import useStyles from "./styles";

import Navbar from "./components/Navbar/Navbar";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

const App = () => {
	const [currentId, setCurrentId] = useState(null);
	const classes = useStyles();
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getPosts());
	}, [currentId, dispatch]);

	return (
		<Container maxWidth="lg">
			<Navbar />
			<Grow in>
				<Container>
					<Grid
						className={classes.mainContainer}
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
