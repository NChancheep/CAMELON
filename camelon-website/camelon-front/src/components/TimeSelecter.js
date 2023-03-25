import React from "react";
import { Col, Card, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { change_selected_months } from "../store/Reducer";
import { change_selected_year } from "../store/Reducer";

function TimeSelecter() {
  
  const { selectedMonths } = useSelector((state) => state.data);
  const { selectedYear } = useSelector((state) => state.data);

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


  const dispatch = useDispatch();
  
 

  function handleMonthClick(clickedMonth) {
    let newMonths = [...selectedMonths];
    newMonths.forEach((month, index) => {
      if (month.name === clickedMonth.name) {
        newMonths[index] = {...month, isSelected: !month.isSelected};
      }
    });
    dispatch(change_selected_months(newMonths));
  }

  return (
    <Card style={{ marginTop: "2%", fontFamily: "Kanit" }}>
      <Row xs>
        <Col sm style={{ margin: "1%" }}>
          <label>
            กรุณาเลือกปีที่ต้องการจะทราบข้อมูล:
            <select
              value={selectedYear}
              onChange={(e) => dispatch(change_selected_year(e.target.value))}
            >
              <option disabled>
                เลือกปี
              </option>
              <option value="" selected>เลือกทุกปี</option>
              <option value="2018">2018</option>
              <option value="2020">2020</option>
              <option value="2021">2021</option>
            </select>
          </label>
        </Col>
      </Row>
      <Row xs style={{ padding: 10 }}>
        {selectedMonths.map((month) => (
          <Col sm key={month.number}>
            {month.isSelected ? (
              <button
                style={{ width: "100%" }}
                className=""
                type="submit"
                onClick={() => handleMonthClick(month)}
              >
                <Card style={{ padding: "10%" , backgroundColor: "rgb(220 252 231)"}}>
                  <text style={{ color: "#479B5F", fontWeight: "bold" }}>
                    {month.name}
                  </text>
                  <text>{count(selectedYear, month.number)}</text>
                  <text>เหตุการณ์</text>
                </Card>
              </button>
            ) : (
              <button
                style={{ width: "100%" }}
                className="bg-white text-black hover:bg-black hover:text-white"
                type="submit"
                onClick={() => handleMonthClick(month)}
              >
                <Card style={{ padding: "10%" }} className="hover:bg-green-100">
                  <text style={{ color: "#479B5F", fontWeight: "bold" }}>
                    {month.name}
                  </text>
                  <text>{count(selectedYear, month.number)}</text>
                  <text>เหตุการณ์</text>
                </Card>
              </button>
            )}
          </Col>
        ))}
      </Row>
    </Card>
  );
}

export default TimeSelecter;