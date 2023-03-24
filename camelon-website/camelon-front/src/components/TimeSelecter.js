import React, { useState } from "react";
import { Col, Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
function TimeSelecter() {
  const [selectedYear, setSelectedYear] = useState("2021");
  const { news } = useSelector((state) => state.data);
  function count(year, month) {
    let count = 0;
    for (let i = 0; i < news.length; i++) {
      if (
        news[i].publish_date.split("-")[0] === year &&
        news[i].publish_date.split("-")[1] === month
      ) {
        count++;
      }
    }
    return count;
  }

  const months = [
    { name: "ม.ค.", number: "01" },
    { name: "ก.พ.", number: "02" },
    { name: "มี.ค.", number: "03" },
    { name: "เม.ย.", number: "04" },
    { name: "พ.ค.", number: "05" },
    { name: "มิ.ย.", number: "06" },
    { name: "ก.ค.", number: "07" },
    { name: "ส.ค.", number: "08" },
    { name: "ก.ย.", number: "09" },
    { name: "ต.ค.", number: "10" },
    { name: "พ.ย.", number: "11" },
    { name: "ธ.ค.", number: "12" },
  ];

  return (
    <Card style={{ marginTop: "2%", fontFamily: "Kanit" }}>
      <Row xs>
        <Col sm style={{ margin: "1%" }}>
          <label>
            กรุณาเลือกปีที่ต้องการจะทราบข้อมูล:
            <select
              value={selectedYear}
              onChange={(e) => setSelectedYear(e.target.value)}
            >
              <option value="" disabled>
                เลือกปี
              </option>
              <option value="2016">2016</option>
              <option value="2017">2017</option>
              <option value="2018">2018</option>
              <option value="2019">2019</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
              <option value="2022">2022</option>
              <option value="2023">2023</option>
            </select>
          </label>
        </Col>
      </Row>
      <Row xs style={{ padding: 10 }}>
        {months.map((month) => (
          <Col sm key={month.number}>
            <button
              style={{ width: "100%" }}
              className="bg-white text-black hover:bg-black hover:text-white"
              type="submit"
              onClick={() => {}}
            >
              <Card style={{ padding: "10%" }}>
                <text style={{ color: "#479B5F", fontWeight: "bold" }}>
                  {month.name}
                </text>
                <text>{count(selectedYear, month.number)}</text>
                <text>เหตุการณ์</text>
              </Card>
            </button>
          </Col>
        ))}
      </Row>
    </Card>
  );
}

export default TimeSelecter;
