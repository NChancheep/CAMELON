import React, { useState, useEffect } from "react";
import BarChart from "./chart/BarChart";
import RadarChart from "./chart/RadarChart";
import LineChart from "./chart/LineChart";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CamelonApi from "../../api/CamelonApi";
import { ThreeDots } from "react-loader-spinner";

export default function Overview() {
  const [startYear, setStartYear] = useState(2016);
  const [endYear, setEndYear] = useState(2020);
  const [crimeType, setCrimeType] = useState("");
  const [lineChartData, setLineChartData] = useState({});
  const [yearList, setYearList] = useState([
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022,
  ]);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [specificYear, setSpecificYear] = useState("");
  const [raderChartData, setRadarChartData] = useState({});

  const [yearBarChart, setYearBarChart] = useState("");

  // useEffect(() => {
  //   CamelonApi.get("years")
  //     .then((response) => {
  //       setYearList(response.data);
  //     })
  //     .then(() => {
  //       setIsPageLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      startYear: startYear,
      endYear: endYear,
      crimeType: crimeType,
    };

    setLineChartData(data);
  };

  const handleRaderChartSubmit = (e) => {
    e.preventDefault();
    const data = {
      year: specificYear,
    };

    setRadarChartData(data);
  };

  const handleStartYearChange = (e) => {
    setStartYear(e.target.value);
  };

  const handleEndYearChange = (e) => {
    setEndYear(e.target.value);
  };

  const handleCrimeTypeChange = (e) => {
    setCrimeType(e.target.value);
  };

  const handleSpecificYearChange = (e) => {
    setSpecificYear(e.target.value);
  };

  return (
    <div
      class="sm"
      style={{ marginTop: 16, display: "flex", justifyContent: "center" }}
    >
      {isPageLoading ? (
        <ThreeDots
          height="80"
          width="80"
          radius="9"
          color="#4fa94d"
          ariaLabel="three-dots-loading"
          visible={true}
        />
      ) : (
        <Container style={{ width: "100%", fontFamily: "Kanit" }}>
          <Row xs className="justify-content-center">
            <Col sm={6} style={{ height: "100%" }}>
              <LineChart data={lineChartData} />
            </Col>
            <Col sm={6} style={{ height: "100%" }}>
              <Form>
                <Form.Group>
                  <Form.Label>Year Range:</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      as="select"
                      value={startYear}
                      onChange={handleStartYearChange}
                    >
                      <option value="">Select year</option>
                      {yearList.map((val) => {
                        return <option value={val}>{val}</option>;
                      })}
                    </Form.Control>
                    <span className="mx-2">-</span>
                    <Form.Control
                      as="select"
                      value={endYear}
                      onChange={handleEndYearChange}
                    >
                      <option value="">Select year</option>
                      {yearList.map((val) => {
                        return <option value={val}>{val}</option>;
                      })}
                    </Form.Control>
                  </div>
                  <Form.Label className="mt-3">Crime Type:</Form.Label>
                  <Form.Control
                    as="select"
                    value={crimeType}
                    onChange={handleCrimeTypeChange}
                  >
                    <option value="">ทุกประเภท</option>
                    <option value="Accident">Accident</option>
                    <option value="Battery/Assault">Battery/Assault</option>
                    <option value="Drug">Drug</option>
                    <option value="Gambling">Gambling</option>
                    <option value="Murder">Murder</option>
                    <option value="Sexual Abuse">Sexual Abuse</option>
                    <option value="Theft/Burglary">Theft/Burglary</option>
                  </Form.Control>
                </Form.Group>
                <Button
                  type="submit"
                  className="mt-3"
                  variant="success"
                  onClick={handleSubmit}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row xs className="justify-content-center mt-5">
            <Col sm={6} style={{ height: "100%" }}>
              <RadarChart data={raderChartData} />
            </Col>
            <Col sm={6} style={{ height: "100%" }}>
              <Form>
                <Form.Group>
                  <Form.Label>เลือกปี:</Form.Label>
                  <div className="d-flex">
                    <Form.Control
                      as="select"
                      value={specificYear}
                      onChange={handleSpecificYearChange}
                    >
                      <option value="">เลือกทุกปี</option>
                      {yearList.map((val) => {
                        return <option value={val}>{val}</option>;
                      })}
                    </Form.Control>
                  </div>
                </Form.Group>
                <Button
                  type="submit"
                  className="mt-3"
                  variant="success"
                  onClick={handleRaderChartSubmit}
                >
                  Submit
                </Button>
              </Form>
            </Col>
          </Row>
          <Row xs className="justify-content-center mt-5">
            <Col sm={6} style={{ height: "100%" }}>
              <BarChart data={raderChartData} />
            </Col>
            <Col sm={6} style={{ height: "100%" }}>
              
            </Col>
          </Row>
          <div style={{ marginBottom: "10%" }}></div>
        </Container>
      )}
    </div>
  );
}
