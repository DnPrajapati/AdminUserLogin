import { Button } from "antd";
import React from "react";
import { useNavigate } from "react-router";
import NoPageLogo from "../Assets/NoPageFound.svg";

const style = {
  body: { display: "flex", flexDirection: "column", alignItems: "center" },
  heading: { textAlign: "center", color: "#fb8500", fontSize: "40px" },
  Button: {},
  image: { width: "60%", textAlign: "center", marginTop: 40 },
};
export default function NoPage() {

  const navigate = useNavigate();
  const loginPage = () => {
    navigate("/");
  };
  
  return (
    <div style={style.body}>
      <h1 style={style.heading}>Error! No Page Matched</h1>
      <Button type="primary" style={style.Button} onClick={loginPage}>
        Click to Login
      </Button>
      <img style={style.image} src={NoPageLogo} alt="No Page Found" />
    </div>
  );
}
