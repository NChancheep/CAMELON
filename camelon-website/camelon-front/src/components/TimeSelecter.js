import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";

export default function TimeSelecter() {
  const months = [
    { id: "1", name: "มกราคม" },
    { id: "2", name: "กุมภาพันธ์" },
    { id: "3", name: "มีนาคม" },
    { id: "4", name: "เมษายน" },
    { id: "5", name: "พฤษภาคม" },
    { id: "6", name: "มิถุนายน" },
    { id: "7", name: "กรกฎาคม" },
    { id: "8", name: "สิงหาคม" },
    { id: "9", name: "กันยายน" },
    { id: "10", name: "ตุลาคม" },
    { id: "11", name: "พฤศจิกายน" },
    { id: "12", name: "ธันวาคม" },
  ];
  const [year, setYear] = useState("all_year");
  const year_list = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023,
  ];

  return (
    <>
      <Container style={{marginTop:"1%"}}>
        <Card>
          <Row xs style={{ height: "100%", padding: 10, fontFamily: "Kanit" }}>
            <Col sm>
              <Row>
                <Col sm style={{marginBottom:"1%"}}>
                  <select
                    onChange={(e) => {
                      setYear(e.target.value);
                    }}
                  >
                    <option value="" disabled>
                      เลือกปี
                    </option>
                    {year_list.map((year) => {
                      return <option value={year}>{year}</option>;
                    })}
                    <option value="all_year" selected>
                      เลือกทุกปี
                    </option>
                  </select>
                </Col>
              </Row>
             
              <Row>
                {months.map((data) => (
                  <Col sm key={data.id}>
                    <button
                      style={{ width: "100%" }}
                      class="bg-white text-black hover:bg-black hover:text-white"
                      type="submit"
                      onClick={() => {}}
                    >
                      <Card>
                        <text style={{ color: "#479B5F", fontWeight: "bold" }}>
                          {data.name}
                        </text>
                        <text>100</text>
                        <text>เหตุการณ์</text>
                      </Card>
                    </button>
                  </Col>
                ))}
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}
