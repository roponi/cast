import React, { useCallback, useRef } from "react";
import "./ImageCard.css";
import demo1 from "../../assets/ImageButtons/1.jpeg";
import demo2 from "../../assets/ImageButtons/2.jpg";
import demo3 from "../../assets/ImageButtons/3.jpg";
import demo4 from "../../assets/ImageButtons/4.jpg";

interface IImageCard {
  src: any;
  text: string;
}

const ImageCard = ({ src, text }: IImageCard) => {
  const animationRef = useRef<HTMLDivElement>(null);

  const triggerHover = useCallback(() => {
    const event = new MouseEvent("mouseover", {
      view: window,
      bubbles: true,
      cancelable: true,
    });

    animationRef.current!.dispatchEvent(event);
  }, []);

  return (
    <div style={{ marginTop: "25px" }} onFocus={triggerHover}>
      <div ref={animationRef} className="hvr-sweep-to-right " />
      <div
        style={{
          fontSize: "32px",
          fontWeight: "lighter",
          textTransform: "uppercase",
        }}
      >
        {text}
      </div>

      <img
        style={{ width: "600px", height: "320px", marginTop: "20px" }}
        src={src}
      />
    </div>
  );
};

const ImageCards = () => {
  const imageData = [
    { src: demo1, text: "Engagement & Collaboration" },
    { src: demo2, text: "People" },
    { src: demo3, text: "Technology" },
    { src: demo4, text: "Shared Data Services" },
  ];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
      }}
    >
      {imageData.map((x) => (
        <ImageCard {...x} />
      ))}
    </div>
  );
};

export default ImageCards;
