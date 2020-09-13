import React from "react";
import { Card, Button, CardGroup, Container } from "react-bootstrap";
// AIzaSyAEaHbiW21EMYBaWW79zkV1NZq_cu0TUKQ
export default function Portfolio({ portfolioRef }) {
  return (
    <>
      {/* <div
        style={{
          height: 800,
          backgroundColor: "#FFFFFF",

          padding: "5rem 1rem",
        }} */}
      <Container fluid style={{ backgroundColor: "#ffff" }} ref={portfolioRef}>
        <p
          style={{
            flex: 1,
            fontSize: "18px",
            fontFamily: "sans-serif",
            fontWeight: "bold",
            color: "gray",
          }}
        >
          Portfolio
        </p>
        <CardGroup
          style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}
        >
          <Card
            className="card"
            style={{
              width: "25rem",
              height: "100%",
              flex: "33.33%",
              maxWidth: "33.33%",
              border: 0,
            }}
          >
            <Card.Img
              style={{ width: "37rem", height: "24rem" }}
              variant="top"
              src="https://images.pexels.com/photos/3993212/pexels-photo-3993212.jpeg?cs=srgb&dl=pexels-cdc-3993212.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>BioAI</Card.Title>
              <Card.Text>
                A web and mobile platform to detect 14 Lung Diseases in X-Ray
                Images and cancer in Biopsy Images. It also have a appointment
                scheduler and a patient's medical history management system. The
                patient's medical history is downloadbale in pdf fromat
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <Card.Text>
                <b>Technologies:</b> MongoDB, React, NodeJs, Express, React
                Native, Django, Python, Keras, Tensorflow, Numpy, OpenCV, HTML,
                CSS, javascript
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "25rem",
              height: "100%",
              flex: "33.33%",
              maxWidth: "33.33%",
              border: 0,
            }}
          >
            <Card.Img
              style={{ width: "37rem", height: "24rem" }}
              variant="top"
              src="https://images.pexels.com/photos/46924/pexels-photo-46924.jpeg?cs=srgb&dl=pexels-anton-46924.jpg&fm=jpg"
            />

            <Card.Body>
              <Card.Title>ChatWhat</Card.Title>
              <Card.Text>
                A web application that utilizes the Socket Programming and
                provides real time chat feature. User can create a group or join
                any group to chat with other group memebers. User can also
                broadcast a message to all users. The application also contains
                User Profiling feature and JWT Autherization for resource
                protection.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <Card.Text>
                <b>Technologies:</b> MongoDB, React, NodeJs, Express, Socket.io,
                HTML, CSS, javascript
              </Card.Text>
            </Card.Body>
          </Card>

          <Card
            style={{
              width: "25rem",
              height: "100%",
              flex: "33.33%",
              maxWidth: "33.33%",
              border: 0,
            }}
          >
            <Card.Img
              style={{ width: "37rem", height: "24rem" }}
              variant="top"
              src="https://images.pexels.com/photos/1112048/pexels-photo-1112048.jpeg?cs=srgb&dl=pexels-wendy-van-zyl-1112048.jpg&fm=jpg"
            />
            <Card.Body>
              <Card.Title>NovelWR</Card.Title>
              <Card.Text>
                A web application to for users to read or write a new novel.
                User can then publish the novel which will be visible to general
                public. Reader can read a novel, review it and can get
                recommendation based on the popularity of the novel. User can
                search novels based on the genre. User can also save a novel to
                its library. The novels can be searched based on the popularity
                and the genre.
              </Card.Text>
              {/* <Button variant="primary">Go somewhere</Button> */}
              <Card.Text>
                <b>Technologies:</b> React, NodeJs, Express, MongoDB, HTML, CSS,
                javascript
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
      {/* </div> */}
    </>
  );
}
