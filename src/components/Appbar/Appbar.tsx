import React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import NavLinks from "../NavLinks/NavLinks";
import { Link } from "@material-ui/core";
import logo from "../../assets/logo.svg";
import p1 from "../../assets/Partners/p1.png";
import p2 from "../../assets/Partners/p2.png";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      justifyContent: "center",
      display: "flex",
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    imageSize: {
      height: "120px",
      padding: "50px",
    },
    partnerSize: {
      height: "70px",
    },
    mainWrapper: {
      display: "flex",
      alignItems: "center",
    },
  })
);

export default function DenseAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.mainWrapper}>
      <div>
        <img className={classes.imageSize} src={logo} />
        <div
          style={{ display: "flex", marginTop: "-50px", marginLeft: "30px" }}
        >
          <img className={classes.partnerSize} src={p1} />
          <img className={classes.partnerSize} src={p2} />
        </div>
      </div>
      <div className={classes.root}>
        <NavLinks />
      </div>
    </div>
  );
}
