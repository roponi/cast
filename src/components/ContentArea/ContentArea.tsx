import React, { ReactElement } from "react";
import { Colours } from "../../theme/Colours";

interface IContentArea {
  style?: any;
  text: any[];
}

const ContentArea = ({ text, style }: IContentArea) => {
  return (
    <div
      style={{
        backgroundColor: Colours.DarkBlue,
      }}
    >
      <div
        style={{
          padding: "50px",
          display: "flex",
          justifyContent: "center",
          color: "white",
          lineHeight: "1.5",
          fontSize: "20px",
          ...style,
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
          }}
        >
          {text[0]}
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div
          style={{
            backgroundColor: Colours.DarkBlue,
            display: "flex",
            justifyContent: "space-between",
            maxWidth: "1000px",
            ...style,
          }}
        >
          {text.slice(1, 3).map((x) => (
            <div
              style={{
                padding: "30px",
                maxWidth: "400px",
                color: "white",
                lineHeight: "1.5",
                fontSize: "20px",
              }}
            >
              {x}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentArea;
