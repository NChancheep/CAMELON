import React, { useState, useEffect } from "react";
import BarChart from "./chart/BarChart";
import RadarChart from "./chart/RadarChart";
import LineChart from "./chart/LineChart";
import "react-datepicker/dist/react-datepicker.css";
import { Form, Button, Container, Row, Col } from "react-bootstrap";
import CamelonApi from "../../api/CamelonApi";
import { ThreeDots } from "react-loader-spinner";
import Card from "react-bootstrap/Card";

export default function Overview() {
  const [startYear, setStartYear] = useState(2016);
  const [endYear, setEndYear] = useState(2020);
  const [crimeType, setCrimeType] = useState("");
  const [lineChartData, setLineChartData] = useState({});
  const [yearList, setYearList] = useState([
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
  ]);
  const [isPageLoading, setIsPageLoading] = useState(false);
  const [specificYear, setSpecificYear] = useState("");
  const [raderChartData, setRadarChartData] = useState({});

  const [yearBarChart, setYearBarChart] = useState("");
  const [newsSource, setNewsSource] = useState("thairath")

  useEffect(() => {
    if (startYear > endYear) {
      alert("โปรดเลือกปีให้ถูกต้อง");
      setStartYear(2016);
      setEndYear(2020);
    }
  }, [startYear, endYear]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      startYear: startYear,
      endYear: endYear,
      crimeType: crimeType,
      newsSource: newsSource
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

  const handleNewsSourceChange = (e) => {
    setNewsSource(e.target.value);
  };
  // function getCrimeTypeName(crimeTypeMetadata) {
  //   switch (crimeTypeMetadata) {
  //     case "SexualAbuse":
  //       return "การล่วงละเมิด";
  //     case "Murder":
  //       return "ฆาตกรรม";
  //     case "Gambling":
  //       return "การพนัน";
  //     case "Accident":
  //       return "อุบัติเหตุ";
  //     case "Theft_Burglary":
  //       return "ลักทรัพย์";
  //     case "Battery_Assault":
  //       return "ทำร้ายร่างกาย";
  //     case "Drug":
  //       return "ยาเสพติด";
  //     default:
  //       return "อื่นๆ";
  //   }
  // }

  return (
    <div
      class="sm"
      style={{ marginTop: 5, display: "flex", justifyContent: "center" }}
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
          <Row>
            <Col xs>
              <Form>
                <Form.Group>
                  <Row>
                    <Col sm={6}>
                      <Form.Label>กรุณาเลือกระยะเวลาของปี</Form.Label>
                      <div className="d-flex">
                        <Form.Control
                          as="select"
                          value={startYear}
                          onChange={handleStartYearChange}
                        >
                          <option value="">
                            กรุณาเลือกปีที่ต้องการจะทราบข้อมูล
                          </option>
                          {yearList.map((val) => {
                            return <option value={val}>{val}</option>;
                          })}
                        </Form.Control>
                        <span className="mx-2 mt-2">ถึง</span>
                        <Form.Control
                          as="select"
                          value={endYear}
                          onChange={handleEndYearChange}
                        >
                          <option value="">
                            กรุณาเลือกปีที่ต้องการจะทราบข้อมูล
                          </option>
                          {yearList.map((val) => {
                            return <option value={val}>{val}</option>;
                          })}
                        </Form.Control>
                      </div>
                    </Col>
                    <Col>
                      <Form.Label>กรุณาเลือกแหล่งข่าว</Form.Label>
                      <div className="d-flex">
                        <Form.Control
                          as="select"
                          value={newsSource}
                          onChange={handleNewsSourceChange}
                        >
                          <option value="" disabled>แหล่งข่าว</option>
                          <option value="Thairath" selected>ไทยรัฐ</option>
                          <option value="Dailynews">เดลินิวส์</option>
                        </Form.Control>
                      </div>
                    </Col>
                    {/* <Col>
                      <Form.Label>กรุณาเลือกประเภท</Form.Label>
                      <Form.Control
                        as="select"
                        value={crimeType}
                        onChange={handleCrimeTypeChange}
                      >
                        <option value="">ทุกประเภท</option>
                        <option value="Accident">อุบัติเหตุ</option>
                        <option value="Battery/Assault">ทำร้ายร่างกาย</option>
                        <option value="Drug">ยาเสพติด</option>
                        <option value="Gambling">การพนัน</option>
                        <option value="Murder">ฆาตกรรม</option>
                        <option value="Sexual Abuse">การล่วงละเมิด</option>
                        <option value="Theft/Burglary">ลักทรัพย์</option>
                      </Form.Control>
                    </Col> */}
                  </Row>
                </Form.Group>
              </Form>

              <Row style={{ marginLeft: 1, marginRight: 1, marginTop: "3%" }}>
                <Button type="submit" variant="success" onClick={handleSubmit}>
                  ตกลง
                </Button>
              </Row>
              <LineChart data={lineChartData} />
            </Col>
            <Col xs className="justify-content-center">
              <Form>
                <Form.Group>
                  <Form.Label>
                    กรุณาเลือกระยะเวลาของปีที่คุณต้องการจะทราบจำนวนข่าวอาชญากรรมที่เกิดขึ้นในแต่ละปี
                  </Form.Label>
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
              </Form>
              <Row style={{ marginLeft: 1, marginRight: 1, marginTop: "3%" }}>
                <Button
                  type="submit"
                  variant="success"
                  onClick={handleRaderChartSubmit}
                >
                  ตกลง
                </Button>
              </Row>
              <Col>
                <Row>
                  {/* <Col>
                    <BarChart
                      style={{ width: "100%", height: "100%" }}
                      data={raderChartData}
                    />
                  </Col> */}
                  <Col>
                    <RadarChart
                      style={{}}
                      data={raderChartData}
                    />
                  </Col>
                </Row>
              </Col>
            </Col>
          </Row>
        </Container>
      )}
    </div>
  );
}
