import { Card } from "antd";
import React from "react";

const style = {
  card: { width: 300, margin: 10, borderRadius: "5%" },
  desc: { color: "#888" },
  variants: {
    display: "flex",
    justifyContent: "space-between",
    backgroundColor: "#f5f5f5",
    padding: "10px 5px",
  },
  variantChild: {
    maxWidth: 100,
    overflow: "hidden",
  },
};

export default function ProductCards({ product }) {
  return (
    <Card size="small" title={product.productName} style={style.card}>
      <p style={style.desc}>{product.productDescription}</p>
      {product.variants !== undefined && (
        <>
          {product.variants.map((x,id) => (
            <div key={id} style={style.variants}>
              <span style={style.variantChild}>{x.variantName}</span>
              <span style={style.variantChild}>&#8377; {x.variantAmount}</span>
            </div>
          ))}
        </>
      )}
    </Card>
  );
}
