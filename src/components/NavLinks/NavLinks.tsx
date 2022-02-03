/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Link from "@material-ui/core/Link";
import "./NavLinks.css";
import { Colours } from "../../theme/Colours";

const NavLinks = () => {
  const LinkData = [
    {
      name: "Home",
      route: "",
    },
    {
      name: "Engagement and Collaboration",
      route: "",
    },
    {
      name: "People",
      route: "",
    },
    {
      name: "Technology",
      route: "",
    },
    {
      name: "Shared Data Services",
      route: "",
    },
    {
      name: "About",
      route: "",
    },
    {
      name: "Contact us",
      route: "",
    },
  ];

  return (
    <div className="NavLinks">
      {LinkData.map((x) => (
        <Link
          style={{ color: Colours.DarkBlue, fontSize: "18px" }}
          component="button"
          variant="body2"
          onClick={() => {
            console.info("I'm a button.");
          }}
        >
          {x.name}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
