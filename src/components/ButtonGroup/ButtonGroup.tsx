import React from "react";

interface IButtonGroupData {
  onClick: () => void;
  text: string;
}

interface IButtonGroup {
  data: IButtonGroupData[];
}

const Button = ({ onClick, text }: IButtonGroupData & any) => {
  return (
    <div
      style={{
        backgroundColor: "rgb(206,14,45)",
        color: "white",
        width: "200px",
        padding: "12px 25px",
        textAlign: "center",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "30px",
        textTransform: "uppercase",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      {text}
    </div>
  );
};

const ButtonGroup = ({ data, style }: IButtonGroup & any) => {
  return (
    <div style={{ display: "flex", justifyContent: "space-around", ...style }}>
      {data.map((x: IButtonGroupData) => (
        <Button {...x} />
      ))}
    </div>
  );
};

export default ButtonGroup;
