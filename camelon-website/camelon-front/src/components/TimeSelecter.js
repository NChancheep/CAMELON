import React, { useState } from "react";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Card from "react-bootstrap/Card";
// import { news_info } from "../store/data/news_info";
// import { news } from "../store/data/news";
import { useSelector } from "react-redux";

export default function TimeSelecter() {
  const months = [
    { id: "01", name: "มกราคม" },
    { id: "02", name: "กุมภาพันธ์" },
    { id: "03", name: "มีนาคม" },
    { id: "04", name: "เมษายน" },
    { id: "05", name: "พฤษภาคม" },
    { id: "06", name: "มิถุนายน" },
    { id: "07", name: "กรกฎาคม" },
    { id: "08", name: "สิงหาคม" },
    { id: "09", name: "กันยายน" },
    { id: "10", name: "ตุลาคม" },
    { id: "11", name: "พฤศจิกายน" },
    { id: "12", name: "ธันวาคม" },
  ];
  const [year, setYear] = useState("all_year");
  const year_list = [
    2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021,
    2022, 2023,
  ];
  const { news_info } = useSelector((state) => state.data);
  const { news } = useSelector((state) => state.data);
  const [selectedYear, setSelectedYear] = useState("2021");
  const [selectedMonth, setSelectedMonth] = useState("01");
  function count(year, month) {
    console.log(news.length);
    count = 0;
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
  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  return (
    <>
      <Container style={{ marginTop: "1%" }}>
        <Card>
          <Row xs style={{ height: "100%", padding: 10, fontFamily: "Kanit" }}>
            <Col sm>
              <Row>
                <Col sm style={{ marginBottom: "1%" }}>
                  {/* <select
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
                  </select> */}
                  <div>
                    <label>
                      Select a year:
                      <select value={selectedYear} onChange={handleYearChange}>
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
                    <br />
                    <label>
                      Select a month:
                      <select
                        value={selectedMonth}
                        onChange={handleMonthChange}
                      >
                        <option value="01">January</option>
                        <option value="02">February</option>
                        <option value="03">March</option>
                        <option value="04">April</option>
                        <option value="05">May</option>
                        <option value="06">June</option>
                        <option value="07">July</option>
                        <option value="08">August</option>
                        <option value="09">September</option>
                        <option value="10">October</option>
                        <option value="11">November</option>
                        <option value="12">December</option>
                      </select>
                    </label>
                    <br />
                    <div>
                      Number of news articles:{" "}
                      {count(selectedYear, selectedMonth)}
                    </div>
                  </div>
                </Col>
              </Row>

              <Row>
                {/* <text>{count("2021", "01")}</text> */}
                {/* {months.map((data) => (
                  <Col sm key={data.id}>
                    <button
                      style={{ width: "100%" }}
                      class="bg-white text-black hover:bg-black hover:text-white"
                      type="submit"
                      onClick={() => {}}
                    >
                      <Card>
                        <text style={{ color: "#479B5F", fontWeight: "bold" }}>
                          {data.name}{" "}
                        </text>
                        <text value={data.id}>{count(selectedYear, "01")}</text>

                        <text>เหตุการณ์</text>
                      </Card>
                    </button>
                  </Col>
                ))} */}
              </Row>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
}
