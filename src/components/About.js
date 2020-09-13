import React from "react";
import { Image } from "react-bootstrap";

export default function About({ aboutRef }) {
  return (
    <>
      <div
        style={{
          height: 800,
          backgroundColor: "#ffff",
          textAlign: "center",
          paddingTop: "6rem",
        }}
        ref={aboutRef}
      >
        <Image
          src="https://media-exp1.licdn.com/dms/image/C5635AQGkkZgHDuPlmg/profile-framedphoto-shrink_400_400/0?e=1600099200&v=beta&t=Na8y_mqt1UYucTIarQ6h_OKOs36THJt4ZBqj6NX8oyk"
          roundedCircle
        />
        <p style={{ fontSize: "30px" }}>
          Hey<b>!</b> I am <b>Umair</b>
        </p>
        <p style={{ margin: "auto auto", paddingTop: "1rem" }}>
          I am a computer science student and a graduate from{" "}
          <b>Comsats {<br></br>} University Islamabad</b>. I am a Full Stack
          Developer.
          <br />
          And when I am free, I like to read newspaper, novels, watch Korean
          Dramas or simply play video games.
        </p>
      </div>
    </>
  );
}
