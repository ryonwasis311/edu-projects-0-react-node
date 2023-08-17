import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../layout/Navbar";
import Landing from "../layout/Landing";
import Footer from "../layout/Footer";
import Leftsidebar from "./Leftsidebar";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

const Productlist = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs lg="2">
          1 of 3
        </Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
      <Row>
        <Col>1 of 3</Col>
        <Col md="auto">Variable width content</Col>
        <Col xs lg="2">
          3 of 3
        </Col>
      </Row>
    </Container>
  );
};

export default Productlist;
