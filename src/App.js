import { Component } from "react";

import GladiatorService from "./services/gladiatorService.js";
import React, { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import logo from "./assets/American_Gladiators.png";
import icon from "./assets/icon.png";
import icon2 from "./assets/person-icon.png";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [state, setState] = useState("");

  useEffect(() => {
    GladiatorService.get().then((res) => {
      setState(res);
    });
  });

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img className="logo" src={logo} alt="logo" />
          <div style={{ maxWidth: "1500px", padding: "100px" }}>
            <input
              type="text"
              id="search-criteria"
              placeholder="Search for Gladiator.."
              title="Type in a name"
              className="search"
            />
            <CardColumns
              id="cardGroup"
              style={{ columnCount: "3", columnGap: "1.5em" }}
            >
              {Object.keys(state).map((key) => (
                <Card
                  className="card"
                  style={{
                    color: "black",
                    textAlign: "left",
                    fontSize: "0.5em",
                    borderRadius: "5%",
                    boxShadow: " 0 0px 20px 0 rgba(0, 0, 0, 0.10)",
                    marginBottom: "1.75em",
                    minWidth: "300px",
                  }}
                >
                  <Card.Header>
                    <b>{state[key]["gladiator name"]}</b>
                  </Card.Header>
                  <Card.Body>
                    <Row>
                      <Col
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                        }}
                      >
                        <Card.Text>
                          <p>
                            <b>Name:</b> <br /> {state[key]["real name"]}
                          </p>
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Img src={icon} max />
                      </Col>
                    </Row>
                  </Card.Body>
                  <Card.Footer style={{ border: "none", background: "none" }}>
                    <small>
                      <b style={{ float: "left" }}>Active Years:</b>{" "}
                      <p style={{ float: "right" }}>
                        {" "}
                        19{state[key]["first year"]} to 19
                        {state[key]["last year"]}{" "}
                      </p>
                    </small>
                  </Card.Footer>
                </Card>
              ))}
            </CardColumns>
          </div>
        </header>
      </div>
    </>
  );
}

export default App;
