import React from "react";
import EmergencyBanner from "../cards/emerContact";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const EmerContact = [
  {
    id: "1",
    name: "แจ้งเหตุด่วนเหตุร้าย",
    callNum: "191",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
  {
    id: "2",
    name: "แจ้งเพลิงไหม้ดับเพลิง",
    callNum: "199",
    image:
      "https://drive.google.com/file/d/1TdgpZ60vPctVZiRjEPKYypJcJBGIQ7mr/view?usp=share_link",
  },
  {
    id: "3",
    name: "ตำรวจท่องเที่ยว",
    callNum: "1155",
    image:
      "https://rayongtouristpolice.com/wp-content/uploads/2021/12/%E0%B9%82%E0%B8%A5%E0%B9%82%E0%B8%81%E0%B9%89%E0%B8%95%E0%B8%B3%E0%B8%A3%E0%B8%A7%E0%B8%88%E0%B8%97%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%B5%E0%B9%88%E0%B8%A2%E0%B8%A7-300x300.png",
  },
  {
    id: "4",
    name: "หน่วยกู้ชีพวชิรพยาบาล",
    callNum: "1554",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
  {
    id: "5",
    name: "กองปราบปราม",
    callNum: "1135",
    image:
      "https://esvector.net/home_es/images/stories/logo/10-11/police_fight.jpg",
  },
  {
    id: "6",
    name: "สายด่วนกรมทางหลวง",
    callNum: "1586",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/2e/Seal_of_the_Department_of_Highway_of_Thailand.svg",
  },
  {
    id: "7",
    name: "เหตุด่วนทางน้ำ",
    callNum: "1196",
    image:
      "http://marine.police.go.th/Pic%20Web/Logo%20TMP%202022.jpg",
  },
  {
    id: "8",
    name: "กรมป้องกันและบรรเทาสาธารณภัย",
    callNum: "1784",
    image:
      "https://www.disaster.go.th/th/images/LogoNav.png",
  },
  {
    id: "9",
    name: "ศูนย์ควบคุมและสั่งการจราจร",
    callNum: "1197",
    image:
      "http://www.trafficpolice.go.th/assets/traffic/di/logo.png",
  },
  {
    id: "10",
    name: "กรมทางพิเศษแห่งประเทศไทย",
    callNum: "1543",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Emblem_of_the_Expressway_Authority_of_Thailand.svg/600px-Emblem_of_the_Expressway_Authority_of_Thailand.svg.png",
  },
  {
    id: "11",
    name: "รับแจ้งรถหาย ถูกขโมย",
    callNum: "1192",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
  {
    id: "12",
    name: "xx",
    callNum: "xx",
    image:
      "https://logo-th.com/wp-content/uploads/2018/12/%e0%b8%aa%e0%b8%b3%e0%b8%99%e0%b8%b1%e0%b8%81%e0%b8%87%e0%b8%b2%e0%b8%99%e0%b8%95%e0%b8%b3%e0%b8%a3%e0%b8%a7%e0%b8%88%e0%b9%81%e0%b8%ab%e0%b9%88%e0%b8%87%e0%b8%8a%e0%b8%b2%e0%b8%95%e0%b8%b4.jpg",
  },
];
function Gambling() {
  return (
    <main>
      <Row>
        {EmerContact.map((data) => (
          <Col sm={4} key={data.id}>
            <EmergencyBanner
              images={data.image}
              Name={data.name}
              callNum={data.callNum}
            />
          </Col>
        ))}
      </Row>
    </main>
  );
}

export default Gambling;
