import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "../css/Filtter.css";
import Axios from "axios";


function FiltterComponent() {

  const [geographyList, setGeographyList] = useState([]);
  const [provinceList, setProvinceList] = useState([]);
  const [amphureList, setAmphureList] = useState([]);
  const [tambonList, setTambonList] = useState([]);
  
 
  const getGeographyList = () => {
    Axios.get("http://localhost:3001/thai_geographies")
      .then((response) => {
        setGeographyList(response.data);
      })
      .then(() => {});
  };

  const getProvinceList = (id) => {
    
    Axios.get(`http://localhost:3001/thai_geographies/${id}/thai_provinces`)
      .then((response) => {
        setProvinceList(response.data);
      })
      .then(() => {});
      
  };


 const getAmphureList = (province_id) => {
  Axios.get(`http://localhost:3001/thai_provinces/${province_id}/thai_amphures`)
      .then((response) => {
        setAmphureList(response.data);
      })
      .then(() => {});
 }

 const getTambonList = (amphure_id) => {
  Axios.get(`http://localhost:3001/thai_amphures/${amphure_id}/thai_tambons`)
      .then((response) => {
        setTambonList(response.data);
      })
      .then(() => {});
      
 }


  useEffect(() => {

      getGeographyList();
    
  }, [])
  

  return (
    <Container className={`nav-bar-select-locati`} style={{height:55}}>
      <Row className="rectangle-1378">
        <Col className="text">
            <select onChange={e => getProvinceList(e.target.value)}>
              <option value="" disabled selected>เลือกภูมิภาค</option>
              {geographyList.map((val, key) => {
                return (
                  <option value={val.id}>{val.name}</option>
                );
              })}
            </select>
        </Col>
        <Col className="text-1">
        <select onChange={e => getAmphureList(e.target.value)}> 
              <option value="" disabled selected>เลือกจังหวัด</option>
              {provinceList.map((val, key) => {
                return (
                  <option value={val.id}>{val.name_th}</option>
                );
              })}
            </select>
        </Col>
        <Col className="text-2">
        <select onChange={e => getTambonList(e.target.value)}>
              <option value="" disabled selected>อำเภอ/เขต</option>
              {amphureList.map((val, key) => {
                return (
                  <option value={val.id}>{val.name_th}</option>
                );
              })}
        </select>
        </Col>
        <Col className="text-3">
        <select>
              <option value="" disabled selected>เเขวง/ตำบล</option>
              {tambonList.map((val, key) => {
                return (
                  <option value={val.id}>{val.name_th}</option>
                );
              })}
        </select>
        </Col>
        <Col className="text-4">
        <select>
              <option value="" disabled selected>ช่วงเวลา</option>
              <option>safsa</option>
        </select>
        </Col>
        <Col className="text-5">
        <select>
              <option value="" disabled selected>ประเภทอาชญากรรม</option>
              <option>safsa</option>
        </select>
        </Col>
        <Col className="rectangle-1379">{"ค้นหา"}</Col>
      </Row>
    </Container>
  );
}

export default FiltterComponent;
