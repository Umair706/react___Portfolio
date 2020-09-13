import About from "./About";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import Header from "./Header";
import Footer from "./Footer";
import { Image } from "react-bootstrap";
import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

const containerStyle = {
  flex: 1,
  position: 0,
};

const homeBlockStyle = {
  height: 790,
  //   backgroundColor: "black",
  //   color: "white",
  //   textAlign: "center",
  //   margin: "auto auto",
  //   paddingTop: "9%",
};

export default function Home() {
  const portfolioRef = React.useRef();
  const aboutRef = React.useRef();
  const contactRef = React.useRef();
  const footerRef = React.useRef();
  const homeRef = React.useRef();

  const scrollToRef = (ref) => window.scrollTo(0, ref.current.offsetTop);

  const executeScroll = (myRef) => scrollToRef(myRef);

  return (
    <>
      <Header
        portfolioRef={portfolioRef}
        aboutRef={aboutRef}
        contactRef={contactRef}
        footerRef={footerRef}
        homeRef={homeRef}
        executeScroll={executeScroll}
      />
      <div style={containerStyle}>
        <div style={homeBlockStyle} ref={homeRef}>
          <Image
            style={{
              position: "absolute",
              left: 0,
              width: "100%",
              height: "80%",
              margin: 0,
            }}
            src={require("../assets/background.jpg")}
          />
          <div
            style={{
              position: "absolute",
              float: "center",
              top: "30%",
              left: "35%",
            }}
          >
            <p
              style={{
                fontSize: "55px",
                fontFamily: "serif",
                textShadow: "2px 2px offwhite",

                color: "white",
                //   right: "40%",
              }}
            >
              I am Muhammad Umair
            </p>
            <p
              style={{
                fontSize: "20px",
                fontFamily: "serif",
                textShadow: "2px 2px offwhite",
                margin: "auto 55% auto auto",
                color: "white",
              }}
            >
              I am a MERN Stack Web developer with experience in React Native. I
              like dabbling in different parts of full stack developement and
              love to learn new technologies.
            </p>
            <div
              style={{
                flexDirection: "row",
                marginTop: "5%",
                marginLeft: "13%",
              }}
            >
              <a
                style={{ textDecoration: "none" }}
                href="https://www.linkedin.com/in/muhammad-umair-770678139/"
              >
                <FaLinkedin color="white" size={35} />
              </a>
              <a
                style={{ textDecoration: "none", marginLeft: "5%" }}
                href="https://github.com/Umair706"
              >
                <FaGithub color="white" size={35} />
              </a>
              <a
                style={{ textDecoration: "none", marginLeft: "5%" }}
                href="mailto:umairawan706@gmail.com"
              >
                <SiGmail color="white" size={35} />
              </a>
            </div>
          </div>
        </div>
        <About aboutRef={aboutRef} />
        <Portfolio portfolioRef={portfolioRef} />
        <Contact contactRef={contactRef} />
        <Footer footerRef={footerRef} />
      </div>
    </>
  );
}
