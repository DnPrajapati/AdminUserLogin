import React from "react";
import { Button, Divider } from "antd";
import ProductCards from "./ProductCards";
import NoDataLogo from "../Assets/NoData.svg";

export default function Dashboard({ handleLogout, data, currentUser }) {
  return (
    <div className="DashBoard">
      <div className="productHeader">
        <h1>Dashboard</h1>
        <span>
          {currentUser}
          <Button onClick={handleLogout}>Logout</Button>
        </span>
      </div>
      <Divider />
      <div className="displayCardContainer">
        {data.length ? (
          <>
            {data.map((product, ind) => (
              <ProductCards key={ind} product={product} />
            ))}
          </>
        ) : (
          <div
            style={{
              display: "flex",
              flexFlow: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>No Data</h1>
            <img style={{ width: "35%" }} src={NoDataLogo} alt="NoDataImage" />
          </div>
        )}
      </div>
    </div>
  );
}
