import React from "react";

export default function Footer({ footerRef }) {
  return (
    <>
      <div
        style={{ height: 500, backgroundColor: "black" }}
        ref={footerRef}
      ></div>
    </>
  );
}
