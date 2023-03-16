import React, { useState } from "react";
import BarChart from "./chart/BarChart";
import RadarChart from "./chart/RadarChart";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Overview() {
  let dateMockStart = new Date("2000-01-01T00:00:00");
  let dateMockEnd = new Date("2030-01-01T00:00:00");
  const [dateRange, setDateRange] = useState([dateMockStart, dateMockEnd]);
  const [startDate, endDate] = dateRange;
  const [year, setYear] = useState("all_year");

  const year_list = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023,
  ];
  return (
    <div class="sm" style={{ marginTop: 16 }}>
      <Container>
        <Row>
          <Col>
            <BarChart date={dateRange} />
            <DatePicker
              selectsRange={true}
              startDate={startDate}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
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
          <Col>
            <RadarChart year={year} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}
