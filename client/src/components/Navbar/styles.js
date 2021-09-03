import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	appBar: {
		borderRadius: 15,
		margin: "30px 0",
		display: "flex",
		paddingLeft: "20px",
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
	},
    heading: {
		color: "rgba(0,183,255, 1)",
	},
	image: {
		marginLeft: "15px",
		paddingTop: "12px"
	},
}));