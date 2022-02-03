import React from "react";
import twitterIcon from "../../assets/Footer/twitter.png";
import linkedinIcon from "../../assets/Footer/linkedin.png";
import ag from "../../assets/Footer/ag.svg";
import menzies from "../../assets/Footer/menzies.svg";
import Csiro from "../../assets/Footer/CSIRO.png";
import utas from "../../assets/Footer/utas.svg";
import cast from "../../assets/logo.svg";

interface IImage {
  src: any;
  navTo?: string;
}

interface IFooterSection {
  imgProps: IImage[];
  text: string;
}

const FooterSection = ({ text, imgProps }: IFooterSection) => {
  return (
    <div>
      <div
        style={{
          color: "rgb(206,14,45)",
          fontSize: "25px",
          paddingBottom: "10px",
          fontWeight: "600",
        }}
      >
        {text}
      </div>
      {/* margin here to offset the first image */}
      <div style={{ marginLeft: "-20px" }}>
        {imgProps.map((x) => (
          <img
            style={{
              height: "48px",
              width: "auto",
              marginLeft: "20px",
              cursor: "pointer",
            }}
            src={x.src}
            onClick={() => window.open(x.navTo, "_blank")}
          />
        ))}
      </div>
    </div>
  );
};

const Footer = () => {
  const footerData = [
    {
      text: "External Link",
      imgProps: [
        { src: cast, navTo: "https://www.cast-collaboration.org.au/" },
        
      ],
    },
    {
      text: "Partners",
      imgProps: [
        { src: ag, navTo: "https://www.antarctica.gov.au/" },
        
        { src: Csiro, navTo: "https://www.csiro.au/en/" },
        { src: utas, navTo: "https://www.utas.edu.au/" },
      ],
    },
  ];

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          backgroundColor: "rgb(234,234,234)",
          paddingTop: "40px",
          paddingBlock: "40px",
        }}
      >
        {footerData.map((x) => (
          <FooterSection text={x.text} imgProps={x.imgProps} />
        ))}
      </div>
      <div
        style={{
          backgroundColor: "rgb(206,14,45)",
        }}
      >
        <div
          style={{
            color: "white",
            marginLeft: "180px",
            paddingTop: "30px",
            paddingBottom: "30px",
          }}
        >
          © 2019–{new Date().getFullYear()} CAST. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
