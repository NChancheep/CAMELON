import { useState } from 'react';
import React from "react";
import Sidebar2 from "./Sidebar2";
import Emercontroller from "./emerController";
import Heading from './Heading';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Emergency() {
  return (
    
    <main>
      <div id="outer-container">
        <Sidebar2
          pageWrapId={"page-wrap"}
          outerContainerId={"outer-container"}
        />
      </div>
      
      <Row>
          <Col sm={7}></Col>
          <Col sm={5} style={{ marginTop: 46 }}>
            <Heading></Heading>
          </Col>
        </Row>
        <Emercontroller/>
        
    </main>
  );
}

export default Emergency;