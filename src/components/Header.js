import React from "react";
import { Nav } from "react-bootstrap";

export default function Header({
  portfolioRef,
  aboutRef,
  contactRef,
  footerRef,
  homeRef,
  executeScroll,
}) {
  return (
    <>
      <Nav
        style={{ backgroundColor: "#050708", opacity: 0.8 }}
        className="justify-content-center"
      >
        <Nav.Item>
          <Nav.Link
            style={{ color: "white" }}
            onClick={() => {
              executeScroll(homeRef);
            }}
          >
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "white" }}
            onClick={() => {
              executeScroll(aboutRef);
            }}
          >
            About
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "white" }}
            onClick={() => {
              executeScroll(portfolioRef);
            }}
          >
            Portfolio
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            style={{ color: "white" }}
            onClick={() => {
              executeScroll(contactRef);
            }}
          >
            Contact
          </Nav.Link>
        </Nav.Item>
      </Nav>
    </>
  );
}
